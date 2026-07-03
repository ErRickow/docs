# Coding Plan — Learning Resources Subgroup (Best Practice + Memory Mechanism)

Date: 2026-07-03
Status: Approved for implementation

## Goal

Add a "Learning Resources" subgroup to the Coding Plan docs (EN + ID) with two
vendor-neutral educational pages — Best Practice and Memory-mechanism — modeled
on z.ai's devpack resources, and register them in `docs.json`.

## Scope decisions (from brainstorming)

- **Content style: Option C — vendor-neutral.** Original prose covering the same
  concepts as the reference pages, with NO Neosantara-specific tool or model
  references and NO model identifiers. Generic "coding agent" terminology.
- Not a verbatim copy of z.ai; original writing of the shared concepts.

## New files

- `en/coding-plan/best-practice.mdx`
- `id/coding-plan/best-practice.mdx`
- `en/coding-plan/memory-mechanism.mdx`
- `id/coding-plan/memory-mechanism.mdx`

## Navigation (docs.json)

Add a new group after "Guide" (EN) / "Panduan" (ID) in both Coding Plan tabs:

```
Group "Learning Resources" (EN) / "Sumber Belajar" (ID):
  - <lang>/coding-plan/best-practice
  - <lang>/coding-plan/memory-mechanism
```

Best Practice listed first (matches the reference).

## Best Practice page

Vendor-neutral original prose. Ten `##` sections:

1. Treat coding agents as collaborators, not one-off assistants
2. Structure task inputs — Goal / Context / Constraints / Done-when
3. Plan before execution for complex tasks
4. Capture repeated rules in project-level configuration files
5. The execution environment defines what the agent can do
   (Task Context / Project Context / Environment Context)
6. Involve coding agents in the full development loop
   (implement -> write/update tests -> run suite -> run checks -> review)
7. Extend agent context with MCP
8. Capture repeated workflows as skills
9. Automate stable workflows
10. Manage agent sessions deliberately

No vendor names, no model IDs. Use generic "coding agent" throughout.

## Memory-mechanism page

Vendor-neutral original prose:

- Why coding agents need memory (+ retrieve -> assemble -> reason -> act ->
  update loop as a fenced code diagram)
- Memory architecture: short-term (session) vs long-term (semantic / episodic /
  procedural)
- Core memory types (session, project, semantic, episodic, procedural)
- The standard memory pattern (retrieve -> assemble context -> update)
- Using memory correctly:
  - separate instruction memory from learning memory
  - layered memory management (organization / project / user / local / role)
  - load `.md` files by path
  - write memory rules as concrete instructions
  - separate shared rules from personal preferences
  - reuse memory through imports and rule packages
- Troubleshooting (accordions)

Generic `.md` / rules directory examples presented as common conventions, not
as any specific product's proprietary feature.

## Conventions & constraints (AGENTS.md)

- ID content uses "Kamu" (capital K); never "Anda".
- Every MDX file has `title` + `description` frontmatter.
- Internal links (if any) are root-relative.
- Escape `<` / `<=` with backticks or unicode (`≤`); MDX-safe.
- Every code fence declares a language.
- No model identifiers anywhere (vendor-neutral).
- Git author identity for commits: `ErRickow <er_rickow@neosantara.xyz>` (inline
  via `git -c`, no config change). Repo is in detached HEAD.

## Verification

- `docs.json` stays valid JSON.
- Both Coding Plan tabs contain the new subgroup with both pages.
- All four new files exist and have frontmatter.
- No model identifiers present in the new pages.
