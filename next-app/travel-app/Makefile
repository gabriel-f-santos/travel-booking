# Variables
NODE_MODULES_BIN = ./node_modules/.bin
NEXT = $(NODE_MODULES_BIN)/next

# Development
dev:
	$(NEXT) dev

# Build
build:
	$(NEXT) build

# Start
start:
	$(NEXT) start

# Clean
clean:
	rm -rf .next

# Install dependencies
install:
	npm install

# Run linting
lint:
	$(NODE_MODULES_BIN)/eslint .

# Run tests
test:
	$(NODE_MODULES_BIN)/jest

# Default target
.DEFAULT_GOAL := dev