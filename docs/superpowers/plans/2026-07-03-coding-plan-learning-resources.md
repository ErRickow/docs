# Coding Plan Learning Resources Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Add a "Learning Resources" subgroup (Best Practice + Memory-mechanism) to the Coding Plan docs (EN + ID) and register it in `docs.json`.

**Architecture:** Four vendor-neutral MDX pages using standard Mintlify components. New nav group after Guide/Panduan in both Coding Plan tabs.

## Global Constraints

- Vendor-neutral: NO Neosantara-specific tool references, NO model identifiers anywhere.
- ID content uses "Kamu" (capital K); never "Anda".
- Every MDX file has `title` + `description` frontmatter.
- Every code fence declares a language.
- Escape `<` / `<=` with backticks or unicode (`≤`).
- Best Practice listed before Memory-mechanism in nav.
- Git author: `ErRickow <er_rickow@neosantara.xyz>` (inline via `git -c`, no config change). Repo in detached HEAD.

---

### Task 1: Best Practice page (EN) — `en/coding-plan/best-practice.mdx`

Create with the exact content below, then verify no model IDs (`grep -nE "claude-[0-9]|gemini-[0-9]|glm-[0-9]|deepseek-|qwen[0-9]|nsk_code" en/coding-plan/best-practice.mdx || echo clean` → `clean`), then commit `docs: add vendor-neutral Best Practice learning resource (EN)`.

````mdx
---
title: "Best Practice"
description: "A practical framework for working with coding agents — structuring tasks, planning, project rules, execution environment, skills, automation, and session management."
---

Modern coding agents do far more than autocomplete code: they read and navigate codebases, edit files, run commands, and complete multi-step tasks. Getting good results is less about clever prompts and more about how you structure the work around the agent. The practices below form a general framework that applies across tools.

## 1. Treat Coding Agents as Collaborators, Not One-Off Assistants

A common mistake is treating an agent like a question-and-answer box: ask, copy the answer, done. A coding agent is better understood as a configurable collaborator you refine over time — through project guidance, tool connections, and reusable workflows. Its value comes from the *combination* of model capability and the workflow you build around it, not the model alone.

## 2. Structure Task Inputs: Context Beats Prompt Tricks

In a real codebase, an effective task description usually has four parts:

<CardGroup cols={2}>
  <Card title="Goal">What to build or change — fix a bug, add an endpoint, refactor a module.</Card>
  <Card title="Context">Relevant files, error messages, docs, or examples the agent should look at.</Card>
  <Card title="Constraints">Engineering rules to follow — coding standards, architecture, security, dependency limits.</Card>
  <Card title="Done when">How completion is judged — tests pass, behavior changes, the bug no longer reproduces.</Card>
</CardGroup>

Structured input reduces guesswork and makes changes easier to review.

## 3. Plan Before Execution for Complex Tasks

For anything non-trivial, asking the agent to write code immediately invites logic errors and rework. Have it **produce a plan first, then implement**: explore the codebase, identify the scope of changes, and confirm the approach before editing. Many agents offer a dedicated "plan" mode for exactly this.

## 4. Capture Repeated Rules in Project-Level Configuration Files

If you restate the same rules in every prompt, the workflow is inefficient and instructions drift. Move long-lived guidance into project-level configuration files the agent loads automatically:

```text
- Project directory structure
- Build commands
- Test workflow
- Coding standards
- PR submission process
```

The rule of thumb: **temporary instructions go in the prompt; long-lived rules go in project-level configuration files.**

## 5. The Execution Environment Defines What the Agent Can Do

Inconsistent results are often blamed on the model, but the cause is frequently an incomplete execution environment. Agents are expected to read/modify files, run build and test commands, call external tools, and use version control. When the environment is misconfigured, you see failures like:

- can't locate the project directory
- no permission to read or modify files
- build or test commands fail
- external tools or services are unreachable

A coding agent depends on three kinds of context:

| Context | What it covers |
|---------|----------------|
| Task Context | the prompt and input for the current task |
| Project Context | repository structure and engineering rules |
| Environment Context | tools, permissions, and execution environment |

Environment Context determines **what the agent can do, and how far it can go**.

## 6. Involve Coding Agents in the Full Development Loop

A code change is rarely judged on generation alone — it must pass tests, meet standards, and survive review. Bring the agent into the whole loop:

<Steps>
  <Step title="Implement">Modify or add code per the task.</Step>
  <Step title="Write/update tests">Add coverage for new behavior or the bug being fixed.</Step>
  <Step title="Run the test suite">Verify the changes behave as expected.</Step>
  <Step title="Run checks">Lint, format, and type-check to meet engineering standards.</Step>
  <Step title="Review the diff">Inspect for regressions and unintended changes.</Step>
</Steps>

This shifts the agent from a code *generator* to an execution node in the development loop.

## 7. Extend Agent Context with MCP

Much of the context an agent needs lives outside the repo — issue trackers, CI status, database schemas, API docs. Copy-pasting it by hand doesn't scale. The **Model Context Protocol (MCP)** provides a standard way to connect external tools so the agent can retrieve real-time context directly. This expands the agent's context boundary from a repository-level executor to a collaborator that operates within your engineering environment.

## 8. Capture Repeated Workflows as Skills

Some tasks recur constantly — PR review, log analysis, release notes, standard debugging. Describing them from scratch each time is wasteful and inconsistent. Package them as **skills**: structured, reusable workflow templates the agent applies the same way every time.

> If a prompt pattern or task flow is used repeatedly, it should probably be captured as a skill.

## 9. Automate Stable Workflows

Once a skill runs reliably, automate it. Many workflows are repetitive or time-based — commit summaries, investigating failed CI runs, scanning logs, weekly reports. A skill defines *how* a workflow runs; automation defines *when* it runs and how it continues over time. This turns the agent from an interactive tool into a continuous assistant.

## 10. Manage Agent Sessions Deliberately

A session is a working context that accumulates the task objective, relevant code, changes made, and intermediate reasoning. Left unmanaged, unrelated tasks pile up and degrade reasoning quality. Practical habits:

- **One session per task** — keep the working context focused.
- **Avoid overly long sessions** — summarize or compress when history grows.
- **Branch explorations get their own session** — don't pile new investigations onto the original.
- **Periodically compress history** — reduce pressure on the context window.

Session management is a form of context management: a clear session keeps reasoning coherent across multi-step tasks.

## Conclusion

The effectiveness of a coding agent comes from the workflow you build around it: clear task context, planning, captured project rules, a solid execution environment, connected tools, reusable skills, automation, and deliberate session management. Together these turn a code-generation tool into a collaborator across the full development lifecycle.
````

---

### Task 2: Best Practice page (ID) — `id/coding-plan/best-practice.mdx`

Create with the exact content below, then verify (`grep -nw "Anda" ...` no output; model-ID grep → clean), then commit `docs: add vendor-neutral Best Practice learning resource (ID)`.

````mdx
---
title: "Best Practice"
description: "Kerangka praktis untuk bekerja dengan coding agent — menyusun tugas, perencanaan, aturan proyek, environment eksekusi, skill, otomatisasi, dan manajemen sesi."
---

Coding agent modern jauh lebih dari sekadar autocomplete: mereka membaca dan menavigasi codebase, mengedit file, menjalankan perintah, dan menyelesaikan tugas multi-langkah. Hasil yang bagus lebih ditentukan oleh cara Kamu menyusun pekerjaan di sekitar agent daripada trik prompt. Praktik di bawah ini adalah kerangka umum yang berlaku lintas tool.

## 1. Perlakukan Coding Agent sebagai Kolaborator, Bukan Asisten Sekali Pakai

Kesalahan umum adalah memperlakukan agent seperti kotak tanya-jawab: tanya, salin jawaban, selesai. Coding agent lebih tepat dipahami sebagai kolaborator yang bisa Kamu konfigurasi dan sempurnakan seiring waktu — lewat panduan proyek, koneksi tool, dan workflow yang bisa dipakai ulang. Nilainya datang dari *kombinasi* kapabilitas model dan workflow yang Kamu bangun di sekitarnya, bukan model saja.

## 2. Susun Input Tugas: Konteks Mengalahkan Trik Prompt

Di codebase nyata, deskripsi tugas yang efektif biasanya punya empat bagian:

<CardGroup cols={2}>
  <Card title="Goal">Apa yang dibuat atau diubah — perbaiki bug, tambah endpoint, refactor modul.</Card>
  <Card title="Konteks">File terkait, pesan error, dokumentasi, atau contoh yang perlu dilihat agent.</Card>
  <Card title="Constraint">Aturan engineering yang harus diikuti — standar kode, arsitektur, keamanan, batasan dependensi.</Card>
  <Card title="Done when">Cara menilai selesai — test lulus, perilaku berubah, bug tidak muncul lagi.</Card>
</CardGroup>

Input terstruktur mengurangi tebak-tebakan dan membuat perubahan lebih mudah di-review.

## 3. Rencanakan Sebelum Eksekusi untuk Tugas Kompleks

Untuk tugas non-trivial, meminta agent langsung menulis kode mengundang error logika dan pekerjaan ulang. Minta agent **membuat rencana dulu, baru implementasi**: jelajahi codebase, identifikasi cakupan perubahan, dan konfirmasi pendekatannya sebelum mengedit. Banyak agent menyediakan mode "plan" khusus untuk ini.

## 4. Simpan Aturan Berulang di File Konfigurasi Tingkat Proyek

Kalau Kamu mengulang aturan yang sama di tiap prompt, workflow jadi tidak efisien dan instruksi mudah melenceng. Pindahkan panduan jangka panjang ke file konfigurasi tingkat proyek yang dimuat agent otomatis:

```text
- Struktur direktori proyek
- Perintah build
- Alur test
- Standar kode
- Proses submit PR
```

Patokannya: **instruksi sementara di prompt; aturan jangka panjang di file konfigurasi proyek.**

## 5. Environment Eksekusi Menentukan Apa yang Bisa Dilakukan Agent

Hasil yang tidak konsisten sering disalahkan ke model, padahal penyebabnya kerap environment eksekusi yang tidak lengkap. Agent diharapkan membaca/mengubah file, menjalankan perintah build dan test, memanggil tool eksternal, dan memakai version control. Saat environment salah konfigurasi, muncul kegagalan seperti:

- tidak menemukan direktori proyek
- tidak punya izin membaca atau mengubah file
- perintah build atau test gagal
- tool atau layanan eksternal tidak terjangkau

Coding agent bergantung pada tiga jenis konteks:

| Konteks | Cakupan |
|---------|---------|
| Task Context | prompt dan input untuk tugas saat ini |
| Project Context | struktur repositori dan aturan engineering |
| Environment Context | tool, izin, dan environment eksekusi |

Environment Context menentukan **apa yang bisa dilakukan agent, dan seberapa jauh**.

## 6. Libatkan Coding Agent di Seluruh Development Loop

Sebuah perubahan kode jarang dinilai dari hasil generasi saja — ia harus lulus test, memenuhi standar, dan melewati review. Libatkan agent di seluruh loop:

<Steps>
  <Step title="Implementasi">Ubah atau tambah kode sesuai tugas.</Step>
  <Step title="Tulis/update test">Tambah cakupan untuk perilaku baru atau bug yang diperbaiki.</Step>
  <Step title="Jalankan test suite">Verifikasi perubahan berperilaku sesuai harapan.</Step>
  <Step title="Jalankan pemeriksaan">Lint, format, dan type-check agar memenuhi standar engineering.</Step>
  <Step title="Review diff">Periksa regresi dan perubahan tak disengaja.</Step>
</Steps>

Ini menggeser agent dari *generator* kode menjadi simpul eksekusi dalam development loop.

## 7. Perluas Konteks Agent dengan MCP

Banyak konteks yang dibutuhkan agent ada di luar repo — issue tracker, status CI, skema database, dokumentasi API. Menyalin-tempel manual tidak scalable. **Model Context Protocol (MCP)** menyediakan cara standar untuk menghubungkan tool eksternal sehingga agent bisa mengambil konteks real-time langsung. Ini memperluas batas konteks agent dari eksekutor tingkat repositori menjadi kolaborator yang beroperasi di dalam environment engineering-mu.

## 8. Tangkap Workflow Berulang sebagai Skill

Beberapa tugas muncul terus-menerus — review PR, analisis log, catatan rilis, debugging standar. Menjelaskannya dari nol tiap kali itu boros dan tidak konsisten. Kemas jadi **skill**: template workflow terstruktur yang bisa dipakai ulang dan diterapkan agent dengan cara yang sama setiap kali.

> Kalau sebuah pola prompt atau alur tugas dipakai berulang, sebaiknya jadikan skill.

## 9. Otomatiskan Workflow yang Stabil

Setelah sebuah skill berjalan andal, otomatiskan. Banyak workflow bersifat repetitif atau berbasis waktu — ringkasan commit, investigasi CI yang gagal, memindai log, laporan mingguan. Skill mendefinisikan *bagaimana* workflow berjalan; otomatisasi mendefinisikan *kapan* ia berjalan dan bagaimana berlanjut seiring waktu. Ini mengubah agent dari tool interaktif menjadi asisten berkelanjutan.

## 10. Kelola Sesi Agent secara Sengaja

Sebuah sesi adalah working context yang mengumpulkan tujuan tugas, kode terkait, perubahan yang dibuat, dan reasoning perantara. Tanpa pengelolaan, tugas tak terkait menumpuk dan menurunkan kualitas reasoning. Kebiasaan praktis:

- **Satu sesi per tugas** — jaga working context tetap fokus.
- **Hindari sesi terlalu panjang** — ringkas atau kompres saat riwayat membengkak.
- **Eksplorasi cabang pakai sesi sendiri** — jangan menumpuk investigasi baru ke sesi asli.
- **Kompres riwayat berkala** — kurangi tekanan pada context window.

Manajemen sesi adalah bentuk manajemen konteks: sesi yang jelas menjaga reasoning tetap koheren di tugas multi-langkah.

## Kesimpulan

Efektivitas coding agent datang dari workflow yang Kamu bangun di sekitarnya: konteks tugas yang jelas, perencanaan, aturan proyek yang tersimpan, environment eksekusi yang solid, tool yang terhubung, skill yang bisa dipakai ulang, otomatisasi, dan manajemen sesi yang sengaja. Bersama-sama, semua ini mengubah tool generasi kode menjadi kolaborator di seluruh siklus pengembangan.
````

---

### Task 3: Memory-mechanism page (EN) — `en/coding-plan/memory-mechanism.mdx`

Create with the exact content below, verify no model IDs → clean, commit `docs: add vendor-neutral Memory Mechanism learning resource (EN)`.

````mdx
---
title: "Memory Mechanism"
description: "How coding agents retain context across tasks and sessions — memory types, the retrieve-assemble-update pattern, layered memory, and troubleshooting."
---

Memory lets a coding agent retain context across tasks and sessions, reducing repeated input and improving efficiency. With a good memory design, an agent keeps understanding the project structure, engineering conventions, and your preferences, and reuses that information in later work. Memory is usually organized into layers such as session, project, and long-term memory.

## Why Coding Agents Need Memory

Language models do not preserve state between calls on their own. They can't remember project context across sessions, accumulate experience, or consistently adapt to your preferences. Agent systems solve this with **external memory**. A typical loop looks like this:

```text
User input
   ↓
Memory retrieval
   ↓
Context assembly
   ↓
Model reasoning
   ↓
Action / tool call
   ↓
Memory update
```

The agent retrieves relevant memory before a task and updates memory after it — a common pattern in modern agent systems.

## Memory Architecture

At a high level:

```text
Short-term memory
    └ session context

Long-term memory
    ├ semantic memory
    ├ episodic memory
    └ procedural memory
```

## Core Memory Types

<AccordionGroup>
  <Accordion title="Session memory">
    Context tied to the current task — conversation history, recent tool outputs, the current plan, and files in scope. Usually lives in the model's context window.
  </Accordion>
  <Accordion title="Project memory">
    Long-lived information about the whole codebase — architecture, coding standards, build workflows, common commands. Typically written into `.md` files and loaded at the start of a session.
  </Accordion>
  <Accordion title="Semantic memory">
    Factual knowledge and reference material — API docs, language rules, knowledge bases. Often implemented with retrieval-augmented generation (RAG): embed the query, search a vector store, retrieve documents, then reason.
  </Accordion>
  <Accordion title="Episodic memory">
    Records of past experiences — how a previous bug was fixed, the root cause of a build failure, a debugging strategy that worked. Helps the agent learn from prior work.
  </Accordion>
  <Accordion title="Procedural memory">
    Step-by-step workflows for completing tasks — e.g. a debugging routine: read the error log, locate the file, write the patch, run tests. Used in prompt engineering, workflow templates, and policies.
  </Accordion>
</AccordionGroup>

## The Standard Memory Pattern

<Steps>
  <Step title="Memory retrieval">
    Before a task, the agent retrieves relevant project memory, knowledge-base entries, and prior experience, then injects them into the working context.
  </Step>
  <Step title="Context construction">
    Retrieved memories are assembled into a complete context and passed to the model.
  </Step>
  <Step title="Memory update">
    After the task, the agent decides whether to write new memories — newly discovered rules, debugging experience, or preferences.
  </Step>
</Steps>

## Using Memory Correctly

Effective memory is **layered, controllable, retrievable, and updatable**. Rather than expecting the model to "remember everything," establish a clear pattern for what goes where.

### Separate instruction memory from learning memory

- **Instruction memory** is written by humans to tell the agent how to work — coding standards, directory conventions, build/test commands, naming, commit rules, safety rules.
- **Learning memory** is accumulated over time from your corrections, preferences, failed attempts, and habits.

Mixing them causes behavior to drift. Write **rules and constraints** into instruction memory (stable, predictable), and **experience and preferences** into learning memory (improves over time). Keeping them separate stops experience notes from polluting core rules.

### Layered memory management

| Layer | Scope | Examples |
|-------|-------|----------|
| Organization | all developers/projects | security & compliance, review standards, restricted directories, dependency/license constraints |
| Project | team-shared, version-controlled | architecture, directory conventions, build/test commands, naming, workflows |
| User | personal, across projects | preferred style, debugging sequence, output format, shortcuts |
| Local | this machine, not committed | test accounts, local ports, mock endpoints, machine-specific notes |
| Role / agent | one specialized agent | test commands for a testing agent, module boundaries for a refactoring agent |

Organization memory is the highest-priority governance layer and should not be casually bypassed. Project memory is the most important shared layer.

### Load `.md` files by path

For large repositories, split instructions into multiple topic-focused Markdown files (e.g. `testing.md`, `api-design.md`, `security.md`) and load them by path only when relevant. Three principles:

- Keep the main memory file limited to global shared context.
- Keep specialized rules modular — one topic per file.
- If a rule can be loaded by path, don't load it globally; bring it in only when needed.

A memory structure might look like this:

```text
agent-memory/
├── project.md            # Project overview
├── rules/
│   ├── code-style.md     # Code style
│   ├── testing.md        # Testing conventions
│   ├── api-design.md     # API design guidelines
│   ├── security.md       # Security requirements
│   └── frontend/
│       └── react.md      # Frontend-specific rules
└── local/
    └── developer.local.md
```

### Write memory rules as concrete instructions

Use specific, verifiable rules rather than vague principles. Prefer:

- Use 2-space indentation in all new TypeScript files.
- Run `pnpm test` after modifying business logic.
- Place all API handlers under `src/api/handlers/`.
- Keep page components under 300 lines; split larger ones into hooks or child components.

Over vague statements like "keep the code clean" or "write good tests." Keep the main memory file concise (ideally under ~200 lines) and use Markdown headings and lists.

### Separate shared rules from personal preferences

Define each rule's scope and owner: project (team, version-controlled), organization (central IT/DevOps), user (individual), local (single machine), role (a specialized agent). The guiding question is: **who owns it, who shares it, and who it applies to.** Clear boundaries prevent rule sprawl and duplicate definitions.

### Reuse memory through imports and rule packages

Many rules are shared conventions across repositories. Rewriting them everywhere invites inconsistency. Where the tooling supports it, import shared rule files or link a shared rules directory, and build reusable rule packages (e.g. security rules, frontend rules, testing rules). Each project references only the modules it needs, so rules are maintained centrally and applied consistently.

## Troubleshooting

<AccordionGroup>
  <Accordion title="The agent isn't following my .md memory files">
    `.md` files are contextual instructions, not enforced configuration. The agent tries to follow them but can't guarantee compliance when rules are vague or conflicting. Confirm the files loaded, that they're in an allowed path/scope, and that no two files give conflicting instructions for the same behavior.
  </Accordion>
  <Accordion title="I don't know what auto-memory has saved">
    Many agents keep background auto-memory as Markdown files. Use the tool's memory command to view the memory directory, then read, edit, or delete those files directly.
  </Accordion>
  <Accordion title="My memory files are too large">
    Oversized files consume context window, reduce adherence, and increase conflicts. Split detailed content into multiple Markdown files and reference or import them, or move rules into a dedicated `rules/` directory.
  </Accordion>
  <Accordion title="Instructions disappear after context compression">
    Long conversations get compressed. Memory files are typically reloaded from disk afterward, so only content written into files persists. If a rule disappears after compression, it lived only in the conversation. Write long-term instructions into `.md` files instead of relying on the conversation.
  </Accordion>
</AccordionGroup>
````

---

### Task 4: Memory-mechanism page (ID) — `id/coding-plan/memory-mechanism.mdx`

Create with the exact content below, verify (no "Anda"; no model IDs → clean), commit `docs: add vendor-neutral Memory Mechanism learning resource (ID)`.

````mdx
---
title: "Mekanisme Memori"
description: "Cara coding agent menyimpan konteks lintas tugas dan sesi — jenis memori, pola retrieve-assemble-update, memori berlapis, dan troubleshooting."
---

Memori memungkinkan coding agent menyimpan konteks lintas tugas dan sesi, mengurangi input berulang dan meningkatkan efisiensi. Dengan desain memori yang baik, agent terus memahami struktur proyek, konvensi engineering, dan preferensi Kamu, lalu memakainya ulang di pekerjaan berikutnya. Memori biasanya diatur berlapis seperti sesi, proyek, dan memori jangka panjang.

## Kenapa Coding Agent Butuh Memori

Model bahasa tidak menyimpan state antar panggilan dengan sendirinya. Mereka tidak bisa mengingat konteks proyek lintas sesi, mengakumulasi pengalaman, atau konsisten menyesuaikan preferensimu. Sistem agent mengatasinya dengan **memori eksternal**. Loop tipikalnya:

```text
Input user
   ↓
Pengambilan memori
   ↓
Perakitan konteks
   ↓
Reasoning model
   ↓
Aksi / tool call
   ↓
Pembaruan memori
```

Agent mengambil memori relevan sebelum tugas dan memperbaruinya setelah selesai — pola umum di sistem agent modern.

## Arsitektur Memori

Secara garis besar:

```text
Memori jangka pendek
    └ konteks sesi

Memori jangka panjang
    ├ memori semantik
    ├ memori episodik
    └ memori prosedural
```

## Jenis Memori Inti

<AccordionGroup>
  <Accordion title="Memori sesi">
    Konteks yang terikat tugas saat ini — riwayat percakapan, output tool terbaru, rencana saat ini, dan file dalam cakupan. Biasanya ada di context window model.
  </Accordion>
  <Accordion title="Memori proyek">
    Informasi jangka panjang tentang seluruh codebase — arsitektur, standar kode, alur build, perintah umum. Biasanya ditulis ke file `.md` dan dimuat di awal sesi.
  </Accordion>
  <Accordion title="Memori semantik">
    Pengetahuan faktual dan materi referensi — dokumentasi API, aturan bahasa, basis pengetahuan. Sering diimplementasikan dengan retrieval-augmented generation (RAG): embed query, cari di vector store, ambil dokumen, lalu reasoning.
  </Accordion>
  <Accordion title="Memori episodik">
    Catatan pengalaman masa lalu — cara bug sebelumnya diperbaiki, akar penyebab kegagalan build, strategi debugging yang berhasil. Membantu agent belajar dari pekerjaan sebelumnya.
  </Accordion>
  <Accordion title="Memori prosedural">
    Alur langkah demi langkah untuk menyelesaikan tugas — mis. rutinitas debugging: baca error log, cari file, tulis patch, jalankan test. Dipakai di prompt engineering, template workflow, dan policy.
  </Accordion>
</AccordionGroup>

## Pola Memori Standar

<Steps>
  <Step title="Pengambilan memori">
    Sebelum tugas, agent mengambil memori proyek, entri basis pengetahuan, dan pengalaman relevan, lalu menyuntikkannya ke working context.
  </Step>
  <Step title="Perakitan konteks">
    Memori yang diambil dirakit jadi konteks lengkap dan diteruskan ke model.
  </Step>
  <Step title="Pembaruan memori">
    Setelah tugas, agent memutuskan apakah menulis memori baru — aturan yang baru ditemukan, pengalaman debugging, atau preferensi.
  </Step>
</Steps>

## Memakai Memori dengan Benar

Memori yang efektif itu **berlapis, terkontrol, bisa diambil, dan bisa diperbarui**. Alih-alih berharap model "mengingat semuanya", buat pola jelas tentang apa yang disimpan di mana.

### Pisahkan memori instruksi dari memori pembelajaran

- **Memori instruksi** ditulis manusia untuk memberi tahu agent cara bekerja — standar kode, konvensi direktori, perintah build/test, penamaan, aturan commit, aturan keamanan.
- **Memori pembelajaran** terakumulasi seiring waktu dari koreksi, preferensi, percobaan yang gagal, dan kebiasaanmu.

Mencampurnya membuat perilaku melenceng. Tulis **aturan dan batasan** ke memori instruksi (stabil, dapat diprediksi), dan **pengalaman serta preferensi** ke memori pembelajaran (membaik seiring waktu). Memisahkannya mencegah catatan pengalaman mencemari aturan inti.

### Manajemen memori berlapis

| Lapisan | Cakupan | Contoh |
|---------|---------|--------|
| Organisasi | semua developer/proyek | keamanan & kepatuhan, standar review, direktori terbatas, batasan dependensi/lisensi |
| Proyek | dibagi tim, version-controlled | arsitektur, konvensi direktori, perintah build/test, penamaan, workflow |
| User | personal, lintas proyek | gaya favorit, urutan debugging, format output, shortcut |
| Lokal | mesin ini, tidak di-commit | akun test, port lokal, endpoint mock, catatan spesifik mesin |
| Role / agent | satu agent khusus | perintah test untuk testing agent, batas modul untuk refactoring agent |

Memori organisasi adalah lapisan tata kelola prioritas tertinggi dan tidak boleh dilewati sembarangan. Memori proyek adalah lapisan bersama yang paling penting.

### Muat file `.md` berdasarkan path

Untuk repositori besar, pecah instruksi ke beberapa file Markdown fokus per topik (mis. `testing.md`, `api-design.md`, `security.md`) dan muat berdasarkan path hanya saat relevan. Tiga prinsip:

- Batasi file memori utama untuk konteks bersama global.
- Buat aturan khusus modular — satu topik per file.
- Kalau aturan bisa dimuat lewat path, jangan muat global; bawa hanya saat dibutuhkan.

Struktur memori bisa terlihat seperti ini:

```text
agent-memory/
├── project.md            # Ringkasan proyek
├── rules/
│   ├── code-style.md     # Gaya kode
│   ├── testing.md        # Konvensi testing
│   ├── api-design.md     # Panduan desain API
│   ├── security.md       # Persyaratan keamanan
│   └── frontend/
│       └── react.md      # Aturan khusus frontend
└── local/
    └── developer.local.md
```

### Tulis aturan memori sebagai instruksi konkret

Pakai aturan spesifik dan bisa diverifikasi, bukan prinsip abstrak. Lebih baik:

- Pakai indentasi 2 spasi di semua file TypeScript baru.
- Jalankan `pnpm test` setelah mengubah logika bisnis.
- Letakkan semua API handler di `src/api/handlers/`.
- Jaga komponen halaman di bawah 300 baris; pecah yang lebih besar jadi hook atau komponen anak.

Ketimbang pernyataan kabur seperti "jaga kode tetap bersih" atau "tulis test yang baik". Jaga file memori utama ringkas (idealnya di bawah ~200 baris) dan pakai heading serta list Markdown.

### Pisahkan aturan bersama dari preferensi pribadi

Definisikan cakupan dan pemilik tiap aturan: proyek (tim, version-controlled), organisasi (IT/DevOps pusat), user (individu), lokal (satu mesin), role (agent khusus). Pertanyaan pemandunya: **siapa yang memiliki, siapa yang berbagi, dan berlaku untuk siapa.** Batasan yang jelas mencegah aturan membengkak dan duplikasi.

### Pakai ulang memori lewat import dan paket aturan

Banyak aturan adalah konvensi bersama lintas repositori. Menulis ulang di tiap repo mengundang inkonsistensi. Bila tooling mendukung, import file aturan bersama atau tautkan direktori aturan bersama, dan bangun paket aturan yang bisa dipakai ulang (mis. aturan keamanan, aturan frontend, aturan testing). Tiap proyek mereferensikan hanya modul yang dibutuhkan, sehingga aturan dikelola terpusat dan diterapkan konsisten.

## Troubleshooting

<AccordionGroup>
  <Accordion title="Agent tidak mengikuti file memori .md saya">
    File `.md` adalah instruksi kontekstual, bukan konfigurasi yang dipaksakan. Agent berusaha mengikutinya tapi tidak bisa menjamin kepatuhan saat aturan kabur atau bertabrakan. Pastikan file termuat, berada di path/scope yang diizinkan, dan tidak ada dua file yang memberi instruksi bertentangan untuk perilaku yang sama.
  </Accordion>
  <Accordion title="Saya tidak tahu apa yang disimpan auto-memory">
    Banyak agent menyimpan auto-memory latar sebagai file Markdown. Pakai perintah memori tool untuk melihat direktori memori, lalu baca, edit, atau hapus file itu langsung.
  </Accordion>
  <Accordion title="File memori saya terlalu besar">
    File berukuran besar memakan context window, menurunkan kepatuhan, dan menambah konflik. Pecah konten detail ke beberapa file Markdown dan referensikan atau import, atau pindahkan aturan ke direktori `rules/` khusus.
  </Accordion>
  <Accordion title="Instruksi hilang setelah kompresi konteks">
    Percakapan panjang dikompres. File memori biasanya dimuat ulang dari disk setelahnya, jadi hanya konten yang tertulis di file yang bertahan. Kalau aturan hilang setelah kompresi, aturan itu hanya ada di percakapan. Tulis instruksi jangka panjang ke file `.md`, jangan mengandalkan percakapan.
  </Accordion>
</AccordionGroup>
````

---

### Task 5: Register the Learning Resources subgroup in docs.json

Add, after the EN "Guide" group (inside the `"tab": "Coding Plan"` EN tab), a new group:
```json
              {
                "group": "Learning Resources",
                "pages": [
                  "en/coding-plan/best-practice",
                  "en/coding-plan/memory-mechanism"
                ]
              }
```
And after the ID "Panduan" group (inside the ID Coding Plan tab):
```json
              {
                "group": "Sumber Belajar",
                "pages": [
                  "id/coding-plan/best-practice",
                  "id/coding-plan/memory-mechanism"
                ]
              }
```
Add a comma after the preceding group's closing brace. Match surrounding indentation. Verify `python3 -c "import json;json.load(open('docs.json'));print('valid')"` → `valid`. Commit `docs: register Learning Resources subgroup in Coding Plan nav`.

---

### Task 6: Final verification (no files)

- `python3 -c "import json;json.load(open('docs.json'));print('valid')"` → `valid`
- `grep -nE "Learning Resources|Sumber Belajar" docs.json` → two lines
- All four new files exist
- `grep -rnE "claude-[0-9]|gemini-[0-9]|glm-[0-9]|deepseek-|qwen[0-9]|nsk_code" en/coding-plan/best-practice.mdx en/coding-plan/memory-mechanism.mdx id/coding-plan/best-practice.mdx id/coding-plan/memory-mechanism.mdx || echo clean` → `clean`
- `grep -rnw "Anda" id/coding-plan/best-practice.mdx id/coding-plan/memory-mechanism.mdx || echo clean` → `clean`
