import os
from openai import AzureOpenAI
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('AZURE_OPENAI_API_KEY')
api_version=os.getenv('AZURE_OPENAI_API_VERSION')
endpoint = os.getenv('AZURE_OPENAI_ENDPOINT')
chat_model = os.getenv('CHAT_DEPLOYMENT_NAME')
completion_model = os.getenv('COMPLETION_DEPLOYMENT_NAME')

client = AzureOpenAI(
  api_key=api_key,
  api_version=api_version,
  azure_endpoint=endpoint
)

def summarize_chat(history, message):
  prompt = f"""
  Summarize the chat below for using as chat history background. If messages is empty, return as "None":
  ---
  {history}

  User new message: {message}
  """

  response = client.completions.create(
    model=completion_model,
    prompt=prompt,
    max_tokens=1000,
    temperature=0,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0,
    # stop=['\n']
    stop=None
  )

  return response

def get_response(message, chat_history = None):
  messages = [
    {
      "role": "system",
      "content": f"""
You are an AI assistant that helps people with their tasks.

Return as markdown
      """
    },
    {
      "role": "system",
      "content": f"""
Chat history summary: {chat_history}
      """,
    },
  ]

  messages.append({
    "role": "user",
    "content": message
  })

  response = client.chat.completions.create(
    model=chat_model,
    messages=messages,
    max_tokens=1000,
    temperature=0.5,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0,
    # stop=['\n']
    stop=None
  )

  return response