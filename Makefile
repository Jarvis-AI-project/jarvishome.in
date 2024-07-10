SHELL := /bin/bash
SERVICE_NAME = jarvishome.in
SERVICE_FILE = $(CURDIR)/deployment.service
TARGET_SERVICE_FILE = /etc/systemd/system/$(SERVICE_NAME).service
WORK_DIR = /home/devasheesh/auth-server
VENV_DIR = $(WORK_DIR)/.venv

# xinclude .env
.PHONY: all install enable start status logs stop disable clean deps deploy dev format


all: dev

deps:
	@echo "Installing dependencies ..."
	npm install


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
	npm run format

deploy: deps install start

dev: deps start_dev_server
