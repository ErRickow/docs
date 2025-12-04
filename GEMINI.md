# GEMINI.md

## Directory Overview

This directory contains the source files for the Neosantara AI API documentation, built using the Mintlify static site generator. The documentation is available in both English and Indonesian.

## Key Files

*   `docs.json`: The main configuration file for the Mintlify project. It defines the navigation structure, theme, colors, API endpoints, and other settings for the documentation site.
*   `index.mdx`: The main landing page of the documentation, written in MDX (Markdown + JSX). It provides a welcome message and links to key sections.
*   `README.md`: Contains basic instructions for setting up and running the documentation project locally.
*   `api-reference/`: This directory contains the OpenAPI specification (`openapi.json`) and Markdown files for the API reference documentation.
*   `en/` and `id/`: These directories contain the English and Indonesian versions of the documentation pages, respectively. The content is written in Markdown (`.md` and `.mdx` files).
*   `snippets/`: This directory contains reusable React components (`.jsx` files) that are embedded in the documentation pages.

## Building and Running

To build and run the documentation site locally, you need to have Node.js and npm installed.

1.  **Install Mintlify CLI:**
    ```bash
    npm i -g mintlify
    ```

2.  **Install dependencies:**
    ```bash
    mintlify install
    ```

3.  **Run the development server:**
    ```bash
    mintlify dev
    ```
    This will start a local development server and open the documentation site in your browser.

## Development Conventions

*   The documentation is written in Markdown and MDX.
*   The site is built using the Mintlify static site generator.
*   The project uses a multi-language setup with English (`en/`) as the default language and Indonesian (`id/`) as a secondary language.
*   Reusable React components are stored in the `snippets/` directory.
*   API documentation is generated from the `openapi.json` file and Markdown files in the `api-reference/` directory.
