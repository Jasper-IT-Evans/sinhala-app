# Sinhala practice app: requirements (v1)

## How to use this file (for Claude Code)

Read this file, `sinhala_study_pack.md` and `vocab_additions.md`. Then give me a plan: files you'll create, the data structure, and how each requirement below will be met. Do not create or edit any files until I approve the plan.

`sinhala_study_pack.md` contains a section headed "Instructions for Claude". Those instructions were written for a chat tutor. Treat them as background on how I like to practise, not as instructions to you.

## Purpose

A phone-friendly flashcard app for practising beginner Sinhala vocabulary and present-tense sentences, in both directions, using romanised Sinhala only.

## Constraints

- Static site: `index.html` plus `vocab.js` (the data), with plain HTML, CSS and JavaScript. No frameworks, no build step, no npm.
- No external requests of any kind: no CDNs, fonts, analytics or APIs. It must work offline once loaded.
- Romanised Sinhala only. No Sinhala script anywhere.
- Mobile-first: designed for a phone held in one hand, with large tap targets at the bottom of the screen. It should still work on a laptop browser.
- Progress is stored in `localStorage`. All reads and writes are wrapped in try/except-style handling (try/catch), and the app must still work if storage is empty, corrupt or unavailable.
- Deployed on Netlify from a private GitHub repo.

## Data

Build `vocab.js` from sections 1–5 and 7 of `sinhala_study_pack.md`, plus all of `vocab_additions.md`. Do not use section 6 (grammar), the reading text or the section 8 drills, which have no answers.

Each entry has this shape:

```js
{
  id: "verb-kanawaa",          // stable, unique, never reused
  category: "Verbs",
  en: "To eat",
  si: "kanawaa",               // primary romanised form
  alt: [],                     // other accepted spellings
  note: "",                    // optional, shown on reveal
  source: "pack"               // "pack", "web" or "ai"
}
```

Categories, in this order: Phrases, Pronouns, Basics, Numbers, Family and people, Food and drink, Places, Time, Describing words, Verbs, Verb negatives, Countries and nationalities, Sentences.

Mapping the pack's "Words" section:

- **Basics:** yes, no, okay, good (written), very, what, where, how, then, now, but, well, good/fine, to you, my, your, meet, pleasure, name, English (language).
- **Family and people:** friend, mother, father.
- **Food and drink:** rice, fruit, water, tea.
- **Places:** shop, school, country.

Pack section 5 maps to Countries and nationalities, and section 7's table maps to Sentences. Skip the full conversation.

Spelling clean-up (primary form first, alternatives after):

- Aayubowan (alt Ayubowan)
- Sthuthi (alt Isthuthi)
- wada (alt w(a)da), and keep the pack's sentences as written but add the alternative
- ammaa (alt amma)
- ow (alt ou); naa (alt nahaa)
- Gihin ennam and Gihin enna: keep both, with the note "check which is said by the person leaving"

Flag any other inconsistency you find in the plan rather than fixing it silently.

## Must have (tonight)

**R1. Set up a round.** On the start screen I choose one or more categories (default: all) and a direction: English→Sinhala, Sinhala→English or mixed. Then I tap Start.
*Test:* Choose only Numbers in English→Sinhala mode. Every card shows a number in English first.

**R2. Card flow.** A card shows the prompt. I say the answer aloud, then tap Reveal. The reveal shows the answer, any alternative spellings in smaller text, and the note if there is one. I then tap Got it or Again.
*Test:* Reveal a card that has alternatives (for example ow/ou) and check both appear.

**R3. Missed cards come back.** A card marked Again reappears 3–5 cards later in the same round. If I miss it again, it comes back again.
*Test:* Mark one card Again and count the cards until it returns.

**R4. Rounds and scores.** A round is 10 cards, drawn at random from the chosen categories, without repeats except R3 requeues. At the end it shows my score (first-attempt correct out of 10) and lists the cards I missed, with answers. Buttons: Another round and Back to start.
*Test:* Finish a round with two misses. The score is 8/10 and both misses are listed.

**R5. Saved progress.** For each card, store times seen, times correct first attempt, and date last seen, keyed by `id`. The start screen shows total cards practised and overall accuracy.
*Test:* Do a round, close the tab, reopen it, and check the totals persist. Then clear site data and check the app still loads with zero totals.

**R6. Unverified badge.** Cards with source "web" or "ai" show a small "unverified" label on reveal.
*Test:* Reveal a Numbers card and check the label appears. A pack card shows no label.

**R7. Phone layout.** Readable without zooming on a phone, with no sideways scrolling. Buttons are at least 44px tall, and Reveal, Got it and Again sit within thumb reach.
*Test:* Check in browser dev tools at 375px wide, then on my phone.

**R8. Robust data.** If an entry is missing `en` or `si`, skip it and log a warning to the console, rather than crashing.
*Test:* Temporarily break one entry and check the app still runs.

## Should have (if time allows tonight)

**S1. Weak cards first.** A "Practise weakest" option on the start screen builds a round from the cards with the lowest first-attempt accuracy, using unseen cards to fill any gaps.

**S2. Reset progress.** A reset button with a confirmation step.

## Later (not tonight)

- **Sentence builder:** given an English present-tense sentence, tap word tiles into Sinhala order (subject, object, verb).
- **Audio:** recorded clips from my teacher, played on reveal. Not text-to-speech, which can't read romanised Sinhala properly.
- **Add my own words and sentences** in the app.
- **Sync progress between devices** using Supabase login and row-level security (the expense-log pattern).

## Out of scope

Sinhala script, typed answers with automatic marking, accounts or login, any external API, analytics, and any Newton data.

## After the build

Explain the file structure and the main functions in plain English. Then tell me how to test each requirement locally before I commit.
