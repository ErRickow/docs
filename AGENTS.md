# Neosantara AI API Documentation Overview

This repository contains the source files for the Neosantara AI API documentation, hosted on the Mintlify platform. The documentation is provided in both English and Indonesian.

## Scope

**These instructions apply to manually authored documentation only. They do NOT apply to:**

- Auto-generated parts of the API reference (though the MDX wrappers are in scope)
- Build artifacts and temporary files

## Working relationship

- You can push back on ideas—this can lead to better documentation. Cite sources and explain your reasoning when you do so.
- ALWAYS ask for clarification rather than making assumptions.
- NEVER lie, guess, or make up information.

## Project context

- **Format:** MDX files with YAML frontmatter. Mintlify syntax.
- **Config:** `docs.json` for navigation, theme, and settings.
- **Languages:** English (`en/`) and Indonesian (`id/`).
- **Components:** Mintlify components and custom React components in `snippets/`.

## Content strategy

- Document just enough for user success—not too much, not too little.
- Prioritize accuracy and usability of information.
- Make content evergreen when possible.
- Search for existing information before adding new content. Avoid duplication unless it is done for a strategic reason. Reference existing content when possible.
- Check existing patterns for consistency.
- Start by making the smallest reasonable changes.

## docs.json

- Refer to the [docs.json schema](https://mintlify.com/docs.json) when building the `docs.json` file and site navigation.
- When adding new pages, ensure they are correctly mapped in the `navigation` object for both `en` and `id` languages.
- Group models and capabilities logically to maintain a clean sidebar.

## Frontmatter requirements for pages

- `title`: Clear, descriptive, concise page title.
- `description`: Concise summary for SEO/navigation.

## Localization

Neosantara uses a directory-based localization approach:

- English content resides in the `en/` directory.
- Indonesian content resides in the `id/` directory.
- Model-specific pages are shared in the `models/` directory.
- Ensure that updates to English documentation are reflected in the Indonesian version to maintain consistency.

## Snippets

Reusable React components and MDX content are stored in the `snippets/` directory (e.g., `model-info.jsx`, `model-data.jsx`). These can be imported into multiple MDX pages.

```javascript
import { ModelInfo } from '/snippets/model-info.jsx';
```

## Style guide

In general, follow the [Google Developer Documentation Style Guide](https://developers.google.com/style).

- Second-person voice ("you").
- Prerequisites at the start of procedural content.
- Test all code examples before publishing.
- Match style and formatting of existing pages.
- Include both basic and advanced use cases.
- Use language tags on all code blocks (e.g., ````python`,````javascript`).
- Add alt text to all images.
- Use root-relative paths for internal links.
- Correct spelling and grammar in both languages.
- Sentence-case for headings.

## Do not

- Do not skip frontmatter on any MDX file.
- Do not use absolute URLs for internal links.
- Do not include untested code examples.
- Do not make assumptions—always ask for clarification.
- Do not use model aliases in code examples; always use full model names / identifiers (e.g., `"nusantara-base"`, `"garda-beta-mini"`).

For questions, refer to the [Mintlify documentation](https://docs.mintlify.com).

## Pull request guidelines

- Describe the "why" of the changes, why the proposed solution is the right one.
- Highlight areas of the proposed changes that require careful review.
- Always add a disclaimer to the PR description mentioning how AI agents were involved in the contribution.
