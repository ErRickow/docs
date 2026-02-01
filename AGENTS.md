# Neosantara AI API Documentation Agent Instructions

This repository contains the source files for the Neosantara AI API documentation, hosted on the Mintlify platform. These instructions are designed to help AI agents maintain consistency, accuracy, and professional quality across all pages.

## Scope

These instructions apply to all manually authored MDX files in the `en/` and `id/` directories.

## Localization & Tone

Neosantara uses a directory-based localization approach:
- English content: `en/` directory.
- Indonesian content: `id/` directory.

### Language Specifics
- **English**: Use second-person voice ("you"). Maintain a professional yet accessible tone.
- **Indonesian**: **CRITICAL:** Use **"Kamu"** (always capitalized 'K') as the second-person pronoun. Never use "Anda", "Loe", or other informal/formal variants. Maintain consistency with this "Kamu" terminology across all Indonesian guides and descriptions.

## SDK & API Standards

When writing code examples or integration guides, follow these strict rules:

### 1. Modern OpenAI SDK Syntax
Always use the modern parameter names for the OpenAI SDK (Python and Node.js):
- **DO USE**: `api_key` and `base_url`.
- **DO NOT USE**: `openai_api_key` or `openai_api_base` (these are deprecated).

### 2. Responses API First
- For new applications or general chat examples, prioritize the **Responses API** (`/v1/responses`) over the legacy Chat Completions API.
- Highlight the benefits of state management (`previous_response_id`) and automatic context handling.

### 3. Model Identifiers
- Always use correct model identifiers: e.g., `"nusantara-base"`, `"archipelago-70b"`, `"garda-beta-mini"`, `"neosantara-gen-2045"`.
- Verify the existence of a model in `Nusantara/models/index.js` and ensure it is marked as `listed: true` before featuring it in public pricing or guides.

## Technical Writing & MDX Safety

- **MDX Parsing**: Symbols like `<` or `<=` in tables or text can break the Mintlify parser. Always escape them using backticks (e.g., `` `< 2,000` ``) or use unicode equivalents (e.g., `≤`).
- **Code Fences**: Every code block MUST have a language specified (e.g., ` ```python Python `). Inside `<CodeGroup>`, ensure there is a blank line between the tag and the code block for proper rendering.
- **Internal Links**: Use root-relative paths (e.g., `/en/capability/ocr`). Do not use absolute URLs for internal documentation pages.
- **Frontmatter**: Every MDX file must have a `title` and a `description`.

## Project Structure Awareness

- **`docs.json`**: This is the source of truth for navigation. When adding pages, ensure they are registered here for both languages.
- **`openapi.json`**: This file is generated from the backend. Do not edit it manually in the `docs` repo; instead, trigger the build in the `nusantaraai` repo.

## Working relationship

- **Clarification**: Always ask for clarification if a model's capability or pricing is unclear.
- **Accuracy**: Never guess pricing or model parameters. Check the source code in the main application repository if unsure.
- **Conciseness**: Follow the "just enough for success" principle. Don't over-explain obvious implementation details.

For platform-specific questions, refer to the [Mintlify documentation](https://docs.mintlify.com).
