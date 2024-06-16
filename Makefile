# TODO: This is a python makefile. @swarnim modify this for react app.
# I am using npm serve package for starting website.
# If possible setup a global code formatter.

SERVICE_NAME = jarvis-auth-server
SERVICE_FILE = $(CURDIR)/gunicorn.service
TARGET_SERVICE_FILE = /etc/systemd/system/$(SERVICE_NAME).service
WORK_DIR = /home/devasheesh/auth-server
VENV_DIR = $(WORK_DIR)/.venv

.PHONY: all install enable start status logs stop disable clean deps start_dev_server deploy dev

all: dev

deps:
	@echo "Installing dependencies ..."
	poetry install

database:
	@echo "Upgrading database..."
	poetry run alembic upgrade head

start_dev_server:
	@echo "Starting development server ..."
# 	TODO: Take host and port from env variables also in gunicorn service file
	poetry run uvicorn app:app --host=127.0.0.1 --port=8000 --reload

install:
	@echo "Installing $(SERVICE_NAME) service ..."
	@sudo cp $(SERVICE_FILE) $(TARGET_SERVICE_FILE)
	@sudo systemctl daemon-reload

enable:
	@echo "Enabling $(SERVICE_NAME) service ..."
	@sudo systemctl enable $(SERVICE_NAME).service

start:
	@echo "Starting $(SERVICE_NAME) service ..."
	@sudo systemctl start $(SERVICE_NAME).service

status:
	@echo "Checking status of $(SERVICE_NAME) service ..."
	@sudo systemctl status $(SERVICE_NAME).service

logs:
	@echo "Displaying logs for $(SERVICE_NAME) service ..."
	@sudo journalctl -u $(SERVICE_NAME).service

stop:
	@echo "Stopping $(SERVICE_NAME) service ..."
	@sudo systemctl stop $(SERVICE_NAME).service

disable:
	@echo "Disabling $(SERVICE_NAME) service ..."
	@sudo systemctl disable $(SERVICE_NAME).service

clean: stop disable
	@echo "Cleaning up $(SERVICE_NAME) service ..."
	@sudo rm -f $(TARGET_SERVICE_FILE)
	@sudo systemctl daemon-reload

format:
	@echo "Formatting code ..."
	poetry run black --line-length 100 --skip-string-normalization --skip-magic-trailing-comma --target-version py39 app

deploy: deps database install start

dev: deps databases tart_dev_server
