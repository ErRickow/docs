# Coding Plan Learning Path & Quota Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Learning Path hub and a canonical Quota & Limits page to the Coding Plan docs (EN + ID), register them in `docs.json`, and trim duplicated quota content from existing pages.

**Architecture:** Two new MDX pages per language. Quota & Limits becomes the single source of truth for prompt-based quota, windows, tier pricing, and load multipliers; existing pages replace their duplicated blocks with links to it. Learning Path is a pure navigation hub (start-here `<Steps>` spine + shortcut `<CardGroup>`).

**Tech Stack:** Mintlify MDX, `docs.json` navigation.

## Global Constraints

- ID content uses "Kamu" (capital K) as the second-person pronoun; never "Anda".
- Internal links are root-relative, e.g. `/en/coding-plan/quota-and-limits`.
- Every MDX file has `title` + `description` frontmatter.
- Escape `<` / `<=` in tables/text with backticks or unicode (`≤`).
- No new model identifiers. Only reuse: `claude-4.5-sonnet`, `claude-4.5-opus`, `gemini-3-flash`, `glm-4.7-flash`, `deepseek-r1`, `qwen3-32b`.
- Canonical tier/pricing table lives ONLY in Quota & Limits; other pages link to it.
- Git author identity for commits: `ErRickow <er_rickow@neosantara.xyz>` (pass inline via `git -c user.name=... -c user.email=...`, do not modify config). Repo is in detached HEAD.

---

### Task 1: Create the canonical Quota & Limits page (EN)

Build this first — everything else links to it.

**Files:**
- Create: `en/coding-plan/quota-and-limits.mdx`

**Interfaces:**
- Produces: page at route `/en/coding-plan/quota-and-limits` (linked by learning-path, overview, switching-models, quick-start, faq).

- [ ] **Step 1: Create the file with full content**

```mdx
---
title: "Quota & Limits"
description: "How the Neosantara Coding Plan quota works — prompts, 5-hour and weekly windows, tier limits, and load-based model multipliers."
---

This is the canonical reference for how quota is measured and consumed on the [Coding Plan](/en/coding-plan/overview).

## What Counts as 1 Prompt

Quota is **prompt-based, not token-based**. One prompt = **one user turn** in your coding tool — no matter how many model calls the agent makes under the hood.

<Info>
  A single "fix this bug" turn may trigger ~15–20 model calls internally (reasoning steps, tool calls, file reads). That entire turn still counts as **1 prompt**.
</Info>

**Worked example:** You ask your agent to *"refactor this module and update the tests."* The agent reads 6 files, runs the test suite twice, and makes 18 model calls to complete the task. Your quota decreases by **1 prompt** (times the model multiplier — see below).

## Quota Windows

| Window | Behavior |
|--------|----------|
| **5-hour rolling** | Resets automatically 5 hours after use begins. |
| **Weekly** | Resets 7 days from your subscription start. |

- **No overage.** When a window's quota is exhausted, requests are hard-stopped until it resets.
- **No balance deduction.** The Coding Plan never charges your PAYG balance.

## Plan Tiers

| Tier | 5-Hour Limit | Weekly Limit | Price |
|------|--------------|--------------|-------|
| Coding Hemat | ~80 prompts | ~400 prompts | Rp 149.000/mo |
| Coding Reguler | ~400 prompts | ~2.000 prompts | Rp 499.000/mo |
| Coding Eksklusif | ~1.600 prompts | ~8.000 prompts | Rp 1.290.000/mo |

<Info>
  Actual available usage varies with project complexity and model choice.
</Info>

## Load-Based Model Multipliers

Each prompt consumes quota equal to its model's multiplier. Flagship models cost more when the upstream is **under load**. Load is detected **dynamically per model** from its live capacity-error rate over a rolling window — it is **not** a fixed time-of-day schedule.

| Condition | Flagship models | Mid-tier models | Lightweight models |
|-----------|-----------------|-----------------|--------------------|
| Normal | 2× | 2× | 1× |
| Under load | 3× | 2× | 1× |

<Note>
  Only flagship-band models switch between 2× and 3×. Mid-tier stays at 2× and lightweight stays at 1× regardless of load. "Under load" is derived from each model's live upstream capacity, not a wall-clock window.
</Note>

## Tips to Conserve Quota

<Tip>
  Use lightweight models (`gemini-3-flash`, `glm-4.7-flash`) for routine tasks — they stay at 1×. Reserve flagship models (`claude-4.5-sonnet`, `claude-4.5-opus`) for complex reasoning and large refactors.
</Tip>

- Batch related changes into a single turn where practical — fewer turns, fewer prompts.
- Switch models per task instead of running everything on a flagship. See [Switching Models](/en/coding-plan/switching-models).

## Related

- [Switching Models](/en/coding-plan/switching-models) — pick the right model per task.
- [Usage Policy](/en/coding-plan/usage-policy) — rate-limit enforcement and fair use.
```

- [ ] **Step 2: Verify frontmatter and no forbidden model names**

Run: `grep -nE "claude-opus-4-6|gemini-3-pro|neosantara-gen" en/coding-plan/quota-and-limits.mdx`
Expected: no output (no unlisted/new model IDs).

- [ ] **Step 3: Commit**

```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add en/coding-plan/quota-and-limits.mdx && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: add canonical Coding Plan Quota & Limits page (EN)"
```

---

### Task 2: Create the canonical Quota & Limits page (ID)

**Files:**
- Create: `id/coding-plan/quota-and-limits.mdx`

**Interfaces:**
- Produces: page at route `/id/coding-plan/quota-and-limits`.

- [ ] **Step 1: Create the file with full content**

```mdx
---
title: "Kuota & Limit"
description: "Cara kerja kuota Neosantara Coding Plan — prompt, jendela 5 jam dan mingguan, limit tier, dan multiplier model berbasis beban."
---

Ini referensi kanonik cara kuota dihitung dan dipakai di [Coding Plan](/id/coding-plan/overview).

## Apa yang Dihitung sebagai 1 Prompt

Kuota **berbasis prompt, bukan token**. Satu prompt = **satu giliran user** di coding tool — berapa pun panggilan model yang dilakukan agent di balik layar.

<Info>
  Satu giliran "perbaiki bug ini" bisa memicu ~15–20 panggilan model secara internal (langkah reasoning, tool call, baca file). Seluruh giliran itu tetap dihitung **1 prompt**.
</Info>

**Contoh nyata:** Kamu minta agent *"refactor modul ini dan update test-nya."* Agent membaca 6 file, menjalankan test suite dua kali, dan melakukan 18 panggilan model. Kuotamu berkurang **1 prompt** (dikali multiplier model — lihat di bawah).

## Jendela Kuota

| Jendela | Perilaku |
|---------|----------|
| **Rolling 5 jam** | Reset otomatis 5 jam setelah pemakaian dimulai. |
| **Mingguan** | Reset 7 hari sejak awal langganan. |

- **Tanpa overage.** Saat kuota sebuah jendela habis, request di-hard-stop sampai reset.
- **Tanpa potongan saldo.** Coding Plan tidak pernah memotong saldo PAYG-mu.

## Tier Paket

| Tier | Limit 5 Jam | Limit Mingguan | Harga |
|------|-------------|----------------|-------|
| Coding Hemat | ~80 prompt | ~400 prompt | Rp 149.000/bln |
| Coding Reguler | ~400 prompt | ~2.000 prompt | Rp 499.000/bln |
| Coding Eksklusif | ~1.600 prompt | ~8.000 prompt | Rp 1.290.000/bln |

<Info>
  Penggunaan aktual bervariasi tergantung kompleksitas proyek dan pilihan model.
</Info>

## Multiplier Model Berbasis Beban

Setiap prompt memakai kuota sebesar multiplier model-nya. Model flagship makan lebih banyak saat upstream sedang **under load**. Beban dideteksi **dinamis per model** dari live capacity-error rate-nya pada rolling window — **bukan** jadwal jam tetap.

| Kondisi | Model flagship | Model mid | Model ringan |
|---------|----------------|-----------|--------------|
| Normal | 2× | 2× | 1× |
| Under load | 3× | 2× | 1× |

<Note>
  Hanya model flagship yang berpindah antara 2× dan 3×. Model mid tetap 2× dan model ringan tetap 1× berapa pun bebannya. "Under load" ditentukan dari kapasitas upstream tiap model secara live, bukan jendela jam.
</Note>

## Tips Hemat Kuota

<Tip>
  Pakai model ringan (`gemini-3-flash`, `glm-4.7-flash`) untuk tugas rutin — tetap 1×. Simpan model flagship (`claude-4.5-sonnet`, `claude-4.5-opus`) untuk reasoning kompleks dan refactor besar.
</Tip>

- Gabungkan perubahan terkait dalam satu giliran bila memungkinkan — lebih sedikit giliran, lebih sedikit prompt.
- Ganti model per tugas alih-alih menjalankan semuanya di flagship. Lihat [Ganti Model](/id/coding-plan/switching-models).

## Terkait

- [Ganti Model](/id/coding-plan/switching-models) — pilih model yang tepat per tugas.
- [Usage Policy](/id/coding-plan/usage-policy) — penegakan rate-limit dan fair use.
```

- [ ] **Step 2: Verify "Kamu" convention (no "Anda")**

Run: `grep -nw "Anda" id/coding-plan/quota-and-limits.mdx`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add id/coding-plan/quota-and-limits.mdx && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: add canonical Coding Plan Quota & Limits page (ID)"
```

---

### Task 3: Create the Learning Path hub (EN)

**Files:**
- Create: `en/coding-plan/learning-path.mdx`

**Interfaces:**
- Consumes: links to `/en/coding-plan/{quick-start,jelma,tool-integration,switching-models,quota-and-limits,usage-policy}`.
- Produces: page at route `/en/coding-plan/learning-path`.

- [ ] **Step 1: Create the file with full content**

```mdx
---
title: "Learning Path"
description: "Start here — the fastest route through the Neosantara Coding Plan, from subscribing to optimizing quota."
---

New to the Coding Plan? Follow the path below. Already know what you need? Jump ahead with the shortcut cards.

## Start Here

<Steps>
  <Step title="Subscribe & get a coding key">
    Pick a tier and create a `nsk_code_*` key. See the [Overview](/en/coding-plan/overview) for how the plan works.
  </Step>
  <Step title="Connect a tool">
    Wire up your coding agent — [Tool Integration](/en/coding-plan/tool-integration) for Claude Code, Cline, Continue, OpenCode, or Cursor. Prefer zero setup? Use [Jelma](/en/coding-plan/jelma).
  </Step>
  <Step title="Send your first prompt">
    Follow the [Quick Start](/en/coding-plan/quick-start) to verify your setup and start coding.
  </Step>
  <Step title="Understand your quota">
    Learn how prompts, windows, and multipliers work in [Quota & Limits](/en/coding-plan/quota-and-limits).
  </Step>
  <Step title="Optimize">
    Switch models per task to conserve quota — see [Switching Models](/en/coding-plan/switching-models).
  </Step>
</Steps>

## Shortcuts

<CardGroup cols={2}>
  <Card title="Zero setup" href="/en/coding-plan/jelma">
    Launch an agent with no config using Jelma.
  </Card>
  <Card title="I use Claude Code / Cline / Cursor" href="/en/coding-plan/tool-integration">
    Manual configuration for supported tools.
  </Card>
  <Card title="Minimize quota burn" href="/en/coding-plan/quota-and-limits">
    Quota rules plus model-switching strategy.
  </Card>
  <Card title="Rules & fair use" href="/en/coding-plan/usage-policy">
    What's allowed and how limits are enforced.
  </Card>
</CardGroup>
```

- [ ] **Step 2: Verify linked pages exist**

Run: `for p in overview tool-integration jelma quick-start quota-and-limits switching-models usage-policy; do test -f en/coding-plan/$p.mdx || echo "MISSING: $p"; done`
Expected: no "MISSING" output.

- [ ] **Step 3: Commit**

```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add en/coding-plan/learning-path.mdx && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: add Coding Plan Learning Path hub (EN)"
```

---

### Task 4: Create the Learning Path hub (ID)

**Files:**
- Create: `id/coding-plan/learning-path.mdx`

**Interfaces:**
- Produces: page at route `/id/coding-plan/learning-path`.

- [ ] **Step 1: Create the file with full content**

```mdx
---
title: "Learning Path"
description: "Mulai di sini — rute tercepat menjelajahi Neosantara Coding Plan, dari langganan hingga mengoptimalkan kuota."
---

Baru di Coding Plan? Ikuti alur di bawah. Sudah tahu yang Kamu butuhkan? Lompat lewat kartu pintasan.

## Mulai di Sini

<Steps>
  <Step title="Langganan & dapatkan coding key">
    Pilih tier dan buat key `nsk_code_*`. Lihat [Overview](/id/coding-plan/overview) untuk cara kerja paket.
  </Step>
  <Step title="Hubungkan tool">
    Sambungkan coding agent-mu — [Tool Integration](/id/coding-plan/tool-integration) untuk Claude Code, Cline, Continue, OpenCode, atau Cursor. Mau tanpa setup? Pakai [Jelma](/id/coding-plan/jelma).
  </Step>
  <Step title="Kirim prompt pertama">
    Ikuti [Mulai Cepat](/id/coding-plan/quick-start) untuk verifikasi setup dan mulai coding.
  </Step>
  <Step title="Pahami kuotamu">
    Pelajari cara kerja prompt, jendela, dan multiplier di [Kuota & Limit](/id/coding-plan/quota-and-limits).
  </Step>
  <Step title="Optimalkan">
    Ganti model per tugas untuk hemat kuota — lihat [Ganti Model](/id/coding-plan/switching-models).
  </Step>
</Steps>

## Pintasan

<CardGroup cols={2}>
  <Card title="Tanpa setup" href="/id/coding-plan/jelma">
    Jalankan agent tanpa konfigurasi pakai Jelma.
  </Card>
  <Card title="Saya pakai Claude Code / Cline / Cursor" href="/id/coding-plan/tool-integration">
    Konfigurasi manual untuk tool yang didukung.
  </Card>
  <Card title="Hemat kuota" href="/id/coding-plan/quota-and-limits">
    Aturan kuota plus strategi ganti model.
  </Card>
  <Card title="Aturan & fair use" href="/id/coding-plan/usage-policy">
    Apa yang diizinkan dan cara limit ditegakkan.
  </Card>
</CardGroup>
```

- [ ] **Step 2: Verify "Kamu" convention and linked pages**

Run: `grep -nw "Anda" id/coding-plan/learning-path.mdx; for p in overview tool-integration jelma quick-start quota-and-limits switching-models usage-policy; do test -f id/coding-plan/$p.mdx || echo "MISSING: $p"; done`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add id/coding-plan/learning-path.mdx && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: add Coding Plan Learning Path hub (ID)"
```

---

### Task 5: Register new pages in docs.json

**Files:**
- Modify: `docs.json` (EN "Coding Plan" tab group + ID "Coding Plan" tab group)

**Interfaces:**
- Consumes: routes produced by Tasks 1–4.

- [ ] **Step 1: Update the EN "Coding Plan" group**

Find the EN block:
```json
              {
                "group": "Coding Plan",
                "pages": [
                  "en/coding-plan/overview",
                  "en/coding-plan/usage-policy",
                  "en/coding-plan/faq"
                ]
              },
```
Replace with:
```json
              {
                "group": "Coding Plan",
                "pages": [
                  "en/coding-plan/learning-path",
                  "en/coding-plan/overview",
                  "en/coding-plan/quota-and-limits",
                  "en/coding-plan/usage-policy",
                  "en/coding-plan/faq"
                ]
              },
```

- [ ] **Step 2: Update the ID "Coding Plan" group**

Find the ID block:
```json
              {
                "group": "Coding Plan",
                "pages": [
                  "id/coding-plan/overview",
                  "id/coding-plan/usage-policy",
                  "id/coding-plan/faq"
                ]
              },
```
Replace with:
```json
              {
                "group": "Coding Plan",
                "pages": [
                  "id/coding-plan/learning-path",
                  "id/coding-plan/overview",
                  "id/coding-plan/quota-and-limits",
                  "id/coding-plan/usage-policy",
                  "id/coding-plan/faq"
                ]
              },
```

- [ ] **Step 3: Verify docs.json is valid JSON**

Run: `python3 -c "import json;json.load(open('docs.json'));print('valid')"`
Expected: `valid`

- [ ] **Step 4: Commit**

```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add docs.json && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: register Coding Plan learning-path & quota pages in nav"
```

---

### Task 6: Trim duplicated quota content in existing pages (EN)

**Files:**
- Modify: `en/coding-plan/overview.mdx`
- Modify: `en/coding-plan/switching-models.mdx`
- Modify: `en/coding-plan/quick-start.mdx`
- Modify: `en/coding-plan/faq.mdx`

- [ ] **Step 1: Trim overview.mdx — replace the `## Quota & Limits` + `## Plans` sections**

Replace these two sections (the `## Quota & Limits` bullet list and the `## Plans` table + its `<Info>`):
```mdx
## Quota & Limits

- Quota is prompt-based (not token-based).
- 1 prompt = 1 user turn, regardless of how many model calls the agent makes internally.
- When a flagship model is under load, its quota multiplier rises to 3× (from 2× normal). Use lighter models for routine tasks to conserve quota.
- When quota runs out, requests are blocked until the next window resets — no balance deduction, no overage.

## Plans

| Tier | 5-Hour Limit | Weekly Limit | Price |
|------|--------------|--------------|-------|
| Coding Hemat | ~80 prompts | ~400 prompts | Rp 149.000/mo |
| Coding Reguler | ~400 prompts | ~2.000 prompts | Rp 499.000/mo |
| Coding Eksklusif | ~1.600 prompts | ~8.000 prompts | Rp 1.290.000/mo |

<Info>
  Actual available usage may vary depending on project complexity and model choice.
</Info>
```
with:
```mdx
## Quota & Limits

Quota is prompt-based: **1 prompt = 1 user turn**, regardless of how many model calls the agent makes internally. There is no overage — when a window's quota runs out, requests are blocked until it resets.

See [Quota & Limits](/en/coding-plan/quota-and-limits) for the full tier pricing table, 5-hour/weekly windows, and load-based model multipliers.
```

- [ ] **Step 2: Trim switching-models.mdx — replace the `## Load-Based Quota Multipliers` section**

Replace the entire `## Load-Based Quota Multipliers` section (heading, table, and `<Note>`) with:
```mdx
## Load-Based Quota Multipliers

Model multipliers (1× lightweight, 2× mid/flagship, up to 3× for flagship under load) determine how much quota each prompt costs. See [Quota & Limits](/en/coding-plan/quota-and-limits#load-based-model-multipliers) for the full breakdown.
```

- [ ] **Step 3: Trim quick-start.mdx — replace the multiplier restatement in `## Tips for Efficient Quota Usage`**

In the `<Tip>` under `## Tips for Efficient Quota Usage`, replace:
```mdx
<Tip>
  **Use lightweight models for routine tasks.** Models like `gemini-3-flash` or `glm-4.7-flash` consume 1× quota. Premium models like `claude-4.5-opus` consume up to 3× when the model is under load. Switch to premium only for complex reasoning tasks.
</Tip>
```
with:
```mdx
<Tip>
  **Use lightweight models for routine tasks.** `gemini-3-flash` and `glm-4.7-flash` consume 1× quota; flagship models cost more (up to 3× under load). See [Quota & Limits](/en/coding-plan/quota-and-limits) for the full multiplier table.
</Tip>
```

- [ ] **Step 4: Trim faq.mdx — link the quota accordion instead of restating numbers**

In the accordion titled "How much quota does the plan provide?", replace its body:
```mdx
    Each plan tier has a 5-hour rolling limit and a weekly limit:
    - **Coding Hemat**: ~80 prompts / 5 hours, ~400 / week
    - **Coding Reguler**: ~400 prompts / 5 hours, ~2,000 / week
    - **Coding Eksklusif**: ~1,600 prompts / 5 hours, ~8,000 / week

    In token terms, each prompt typically triggers 15–20 model calls, giving a total monthly allowance far exceeding what you'd get at standard API pricing.
```
with:
```mdx
    Each tier has a 5-hour rolling limit and a weekly limit. See the full table in [Quota & Limits](/en/coding-plan/quota-and-limits#plan-tiers). Each prompt typically triggers 15–20 model calls, so the effective monthly allowance far exceeds standard API pricing.
```

- [ ] **Step 5: Verify links resolve and commit**

Run: `test -f en/coding-plan/quota-and-limits.mdx && echo ok`
Expected: `ok`
```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add en/coding-plan/overview.mdx en/coding-plan/switching-models.mdx en/coding-plan/quick-start.mdx en/coding-plan/faq.mdx && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: point EN Coding Plan pages to canonical Quota & Limits"
```

---

### Task 7: Trim duplicated quota content in existing pages (ID)

**Files:**
- Modify: `id/coding-plan/overview.mdx`
- Modify: `id/coding-plan/switching-models.mdx`
- Modify: `id/coding-plan/quick-start.mdx`
- Modify: `id/coding-plan/faq.mdx`

- [ ] **Step 1: Trim overview.mdx — replace the `## Kuota & Limit` + `## Paket` sections**

Replace the `## Kuota & Limit` bullet list and the `## Paket` table + its `<Info>` with:
```mdx
## Kuota & Limit

Kuota berbasis prompt: **1 prompt = 1 giliran user**, berapa pun panggilan model yang dilakukan agent secara internal. Tidak ada overage — saat kuota sebuah jendela habis, request diblokir sampai reset.

Lihat [Kuota & Limit](/id/coding-plan/quota-and-limits) untuk tabel harga tier lengkap, jendela 5 jam/mingguan, dan multiplier model berbasis beban.
```

- [ ] **Step 2: Trim switching-models.mdx — replace the `## Multiplier Kuota Berbasis Beban` section**

Replace the entire `## Multiplier Kuota Berbasis Beban` section (heading, table, and `<Note>`) with:
```mdx
## Multiplier Kuota Berbasis Beban

Multiplier model (1× ringan, 2× mid/flagship, hingga 3× untuk flagship under load) menentukan berapa kuota yang dipakai tiap prompt. Lihat [Kuota & Limit](/id/coding-plan/quota-and-limits#multiplier-model-berbasis-beban) untuk rinciannya.
```

- [ ] **Step 3: Verify "Kamu" convention across modified ID files**

Run: `grep -nw "Anda" id/coding-plan/overview.mdx id/coding-plan/switching-models.mdx`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" add id/coding-plan/overview.mdx id/coding-plan/switching-models.mdx && \
git -c user.name="ErRickow" -c user.email="er_rickow@neosantara.xyz" commit -m "docs: point ID Coding Plan pages to canonical Kuota & Limit"
```

<Note>
Note: the ID quick-start.mdx and faq.mdx do not contain the same standalone quota-multiplier duplication as EN (verify during implementation). If equivalent duplicated blocks exist, apply the same pointer treatment as Task 6 Steps 3–4 using ID routes; otherwise skip and note it.
</Note>

---

### Task 8: Final verification

**Files:** none (verification only)

- [ ] **Step 1: docs.json valid**

Run: `python3 -c "import json;json.load(open('docs.json'));print('valid')"`
Expected: `valid`

- [ ] **Step 2: All internal coding-plan links point to existing files**

Run:
```bash
grep -rhoE "/(en|id)/coding-plan/[a-z-]+" en/coding-plan id/coding-plan | sort -u | while read l; do f=".${l}.mdx"; test -f "$f" || echo "BROKEN: $l"; done
```
Expected: no "BROKEN" output.

- [ ] **Step 3: Mintlify link check (if CLI available)**

Run: `command -v mintlify >/dev/null && mintlify broken-links || echo "mintlify CLI not installed — skipped"`
Expected: no broken links, or the skip message.

- [ ] **Step 4: Confirm no forbidden model IDs introduced**

Run: `grep -rnE "claude-opus-4-6|gemini-3-pro-preview|neosantara-gen" en/coding-plan/learning-path.mdx en/coding-plan/quota-and-limits.mdx id/coding-plan/learning-path.mdx id/coding-plan/quota-and-limits.mdx`
Expected: no output.
