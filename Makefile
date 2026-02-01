.PHONY: lint lint-fix broken-links dev install

# Lint markdown files using markdownlint
lint:
	@echo "🔍 Linting markdown files..."
	@if command -v markdownlint >/dev/null 2>&1; then \
		markdownlint "**/*.md" "**/*.mdx" --ignore node_modules; \
	else \
		echo "❌ markdownlint not found. Install with: npm install -g markdownlint-cli"; \
		exit 1; \
	fi

# Lint and automatically fix issues
lint-fix:
	@echo "🛠️ Fixing markdown files..."
	@if command -v markdownlint >/dev/null 2>&1; then \
		markdownlint "**/*.md" "**/*.mdx" --fix --ignore node_modules; \
	else \
		echo "❌ markdownlint not found. Install with: npm install -g markdownlint-cli"; \
		exit 1; \
	fi

# Check for broken links using Mintlify CLI
broken-links:
	@echo "🔗 Checking for broken links..."
	mint broken-links

# Start Mintlify development server
dev:
	mint dev

# Install documentation dependencies
install:
	npm install -g mintlify markdownlint-cli

