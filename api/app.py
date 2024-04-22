import json
from flask import Blueprint, Flask, request, jsonify
from flask_cors import CORS

from azure_openai import get_response, summarize_chat

app = Flask(__name__)

# Api blueprint
api = Blueprint('api', __name__, url_prefix='/api')
cors = CORS(api, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'Hello, Any Chatbot World!'

@app.route('/json')
def hello_json():
    return { 'message': 'Hello, Any Chatbot World!' }

# Determine received message as post argument: message
@api.route('/message', methods=['POST'])
def receive_message():
    message = request.json['message']
    history = request.json['history']

    history_summary = summarize_chat(history, message).choices[0].text

    print("history_summary")
    print(history_summary)

    response = get_response(message, history_summary)
    data = list(map(lambda choice: choice.message.content, response.choices))

    return { 'messages': data, 'length': len(data), "history_summary": history_summary }

# Register blueprint
app.register_blueprint(api)