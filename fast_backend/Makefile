# Makefile for backend FastAPI project

# Variables
POETRY = poetry
DOCKER_COMPOSE = docker compose
PYTEST = pytest
PRE_COMMIT = pre-commit

# Default target
.DEFAULT_GOAL := help

.PHONY: help
help:  ## Show this help.
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'

.PHONY: install
install:  ## Install dependencies using Poetry.
	$(POETRY) install

.PHONY: run
run:  ## Run the FastAPI server.
	$(POETRY) run python -m src

.PHONY: docker-build
docker-build:  ## Build the Docker image.
	$(DOCKER_COMPOSE) build

.PHONY: docker-up
docker-up:  ## Start the Docker containers.
	$(DOCKER_COMPOSE) up --build

.PHONY: docker-dev
docker-dev:  ## Start the Docker containers in development mode with autoreload.
	$(DOCKER_COMPOSE) -f docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . up --build

.PHONY: docker-down
docker-down:  ## Stop the Docker containers.
	$(DOCKER_COMPOSE) down

.PHONY: test
test:  ## Run tests using pytest.
	$(PYTEST) -vv .

.PHONY: docker-test
docker-test:  ## Run tests inside Docker.
	$(DOCKER_COMPOSE) run --build --rm api $(PYTEST) -vv .
	$(DOCKER_COMPOSE) down

.PHONY: pre-commit-install
pre-commit-install:  ## Install pre-commit hooks.
	$(PRE_COMMIT) install

.PHONY: lint
lint:  ## Run linting with pre-commit.
	$(PRE_COMMIT) run --all-files

.PHONY: clean
clean:  ## Clean up the project.
	$(DOCKER_COMPOSE) down -v
	rm -rf __pycache__ .pytest_cache .mypy_cache
