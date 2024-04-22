from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Any Chatbot World!'

@app.route('/json')
def hello_json():
    return { 'message': 'Hello, Any Chatbot World!' }