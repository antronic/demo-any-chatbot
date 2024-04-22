# Debug - Flask debug mode
start:
	flask --app app run

dev:
	flask --app app run --debug

setup:
	python3 -m venv .venv
	source .venv/bin/activate
	pip install -r requirements.txt

prod:
	gunicorn --config gunicorn_config.py app:app