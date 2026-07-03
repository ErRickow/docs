# Coding Plan — Learning Path & Quota & Limits Pages

Date: 2026-07-03
Status: Approved for implementation

## Goal

Add two new pages to the Coding Plan docs (EN + ID) and register them in
`docs.json`, then trim duplicated quota content from existing pages so the new
Quota & Limits page is the single source of truth.

1. **Learning Path** — a hybrid start-here navigation hub.
2. **Quota & Limits** — the canonical reference for prompt-based quota, windows,
   tiers, and load multipliers.

## Scope decisions (from brainstorming)

- **Consolidation: Option B** — add the new pages AND trim duplicated
  quota/multiplier blocks in existing pages, replacing them with pointers to the
  canonical Quota & Limits page.
- **Learning Path: Option C (hybrid)** — a sequential start-here spine plus
  profile-based shortcut cards.

## New files

- `en/coding-plan/learning-path.mdx`
- `id/coding-plan/learning-path.mdx`
- `en/coding-plan/quota-and-limits.mdx`
- `id/coding-plan/quota-and-limits.mdx`

## Navigation (docs.json)

In both the EN "Coding Plan" tab and the ID "Coding Plan" tab, update the first
group's pages ordering:

```
Group "Coding Plan":
  - <lang>/coding-plan/learning-path      (NEW, first — start-here on-ramp)
  - <lang>/coding-plan/overview
  - <lang>/coding-plan/quota-and-limits   (NEW, after overview — reference)
  - <lang>/coding-plan/usage-policy
  - <lang>/coding-plan/faq
Group "Guide" / "Panduan": unchanged
  - quick-start, jelma, tool-integration, switching-models
```

## Learning Path page (hybrid)

Mirrored EN/ID; ID uses "Kamu". Pure navigation hub — no config snippets, no
quota numbers (nothing to keep in sync).

1. Intro — one line: what the Coding Plan is, "start here".
2. Start-here spine — `<Steps>` linking existing pages in order:
   Subscribe & get key → Connect a tool (Tool Integration) or Jelma →
   First prompt (Quick Start) → Understand quota (Quota & Limits) →
   Optimize (Switching Models).
3. Shortcut `<CardGroup>`:
   - Zero setup → Jelma
   - I use Claude Code / Cline / Cursor → Tool Integration
   - Minimize quota burn → Quota & Limits + Switching Models
   - Rules & fair use → Usage Policy

## Quota & Limits page (canonical)

1. What counts as a prompt — 1 user turn = 1 prompt (~15–20 model calls under
   the hood), with a short worked example.
2. Quota windows — 5-hour rolling + weekly, auto-reset, no overage / hard-stop.
3. Plan tiers table — Hemat / Reguler / Eksklusif limits + price (single
   canonical copy).
4. Load-based multipliers — 2×/3× flagship table + the dynamic "under load"
   `<Note>` (the one true source, moved from switching-models).
5. Tips to conserve quota — lightweight vs premium model guidance.
6. Cross-links — Switching Models, Usage Policy.

## Trimming existing pages (Option B)

- `overview.mdx` (EN+ID): keep a 2–3 line quota summary; replace the "Plans"
  table + detailed quota bullets with a link to the canonical page.
- `switching-models.mdx` (EN+ID): remove the full "Load-Based Quota Multipliers"
  table + Note; replace with a one-line pointer. Keep the per-task model
  recommendation table (switching-specific, not quota).
- `quick-start.mdx` (EN+ID): keep the onboarding "Tips for Efficient Quota
  Usage" section but trim the multiplier restatement to a pointer.
- `faq.mdx` (EN+ID): keep FAQ accordions (Q&A serves search) but link quota
  answers to the canonical page instead of restating numbers.

The tier/pricing table lives canonically in Quota & Limits; other pages link to it.

## Constraints & conventions (AGENTS.md)

- ID content uses "Kamu" (capital K).
- Internal links are root-relative (e.g. `/en/coding-plan/quota-and-limits`).
- Every MDX file has `title` + `description` frontmatter.
- Escape `<` / `<=` in tables/text with backticks or unicode.
- No new model identifiers — reuse only IDs already present in existing
  coding-plan pages (`claude-4.5-sonnet`, `claude-4.5-opus`, `gemini-3-flash`,
  `glm-4.7-flash`, `deepseek-r1`, `qwen3-32b`).

## Verification

- Keep `docs.json` valid JSON.
- Verify every internal link resolves to a real page path.
- Run Mintlify broken-links check if the CLI is available; otherwise verify
  links manually.
- No new model names introduced.
