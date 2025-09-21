---
metadata:
	primary_file: ToDo.md
	supporting_text: none
	cv_file: none
	generated_on: 2025-09-19
---

Instruction for generating interview questions (LLM-friendly)

Purpose
--------
Given a primary file (required), optional supporting text, and an optional CV (`MyCV.tex`), generate interview questions and a Markdown deliverable that is ready for reviewers or interviewers.

Required behavior
-----------------
- Update the primary Markdown file in-place (do not create a new file). If the primary file is not Markdown, convert it to Markdown first and then update it in-place.
- Include or prepend a short metadata header listing the input files processed and a 1–2 line summary for each.
- Preserve existing headings, code blocks, lists, and links where possible when editing the primary file.
- Identify any incomplete or unanswered questions inside the primary file and insert concise, referenced answers near the relevant location.
 - Generate up to 10–15 interview questions derived from the primary file, supporting text, and CV (if provided) and append them under a clearly marked "Interview Questions" section.
	 - Do not invent unrelated questions: if the source material supports fewer than 10 high-quality questions, produce only the supported questions.
	- Group questions by topic and label each with a difficulty tag: Easy / Medium / Hard.
	- For each question include: source (file or supporting text), difficulty, and a 1-line answer hint or key points.
- For any questions not already present, insert them into the most appropriate existing section .
- Continue question numbering sequentially (no gaps).
- Preserve the file’s compact Q + bulleted-answer style and existing headings.
- Add short example snippets where helpful (e.g., useState, fragments, export/import).
- Do not remove or reorder existing content unless necessary; only append or insert.
- After edits, verify numbering and show the changed sections.

Optional behavior
-----------------
- If supporting text is provided, derive additional relevant questions from it and mark their source.
- If the CV is provided, prefer questions that relate candidate experience to the topics in the primary file.

- Defaults and constraints
- ------------------------
- Language: US English.
- Default question count: 12 (unless the inputs clearly require more or fewer).
- Produce up to 10–15 questions based on source material; producing fewer than 10 is acceptable when the inputs do not justify more.
- Output must be valid Markdown, grammatically correct, and free of PII (redact names, emails, and phone numbers from the CV).

Example deliverable structure
----------------------------
1. Metadata (files processed + 1-line summary each)
2. Converted primary file content (only if conversion was needed)
3. Interview questions
	 - Topic A
		 1. Question text
				- Source: `filename` or `supporting text`
				- Difficulty: Medium
				- Answer hint: One-line answer or key points

Prompt template (copy-paste for assistants)
-----------------------------------------
Inputs:
- primary_file: [attach file or paste text]
- supporting_text: [optional, paste text]
- cv_file: [optional, attach MyCV.tex]

Update the primary Markdown file in-place with:
1) A 2-line summary of inputs in a metadata header (prepend or insert near the top).
2) Converted primary file content (if conversion was needed) — keep existing content structure and only fix formatting necessary for Markdown.
3) An "Interview Questions" section appended to the document containing 10–15 questions grouped by topic and labeled Easy/Medium/Hard. For each question include source, difficulty, and a 1-line answer hint.
4) Insert concise answers for any incomplete/unanswered questions found in the primary file, placed close to their original location and clearly marked as auto-filled.

Defaults:
- Language: US English
- Question count: 12
(- The assistant edits the primary file in-place; no separate output filename is required.)

Acceptance criteria
-------------------
- The Markdown file contains the three required sections (metadata, converted content when applicable, questions).
- At least 70% of questions are traceable to the primary file or supporting text.
- Incomplete questions in the source are answered concisely and clearly.
- No PII is leaked; CV contact details are redacted.

If you want a different tone (concise, friendly, or formal), a different default question count, or to include model answers, specify it in the input.




