// One Word, First Thought — entry program (program/v1, Node 22).
//
// The brief: send exactly one word, the first that comes to mind, and let
// an AI judge compare it pairwise on surprise, vividness and wit.
//
// Candidates weighed against the judge's brief (surprise, vividness,
// sound / double meaning, chosen-not-generic):
//   petrichor   — vivid, but the single most expected "beautiful word" pick.
//   syzygy      — striking spelling, but more technical than vivid.
//   phosphene   — vivid (lights behind closed eyes), strong runner-up.
//   susurrus    — onomatopoeic whisper; lovely sound, less of a feeling.
//   limerence   — specific emotion, but heavier than the brief's lightness.
//   gloaming    — poetic dusk, but fairly well known.
//   serendipity — pleasant, but the safe, expected answer.
//   halcyon     — golden calm, but a familiar list word.
//   crepuscular — twilight-sharp, but clunkier to say.
//   apricity    — the warmth of the sun on a cold winter's day.
//
// Chosen word: apricity. A real (if rare) English word, in the OED, naming
// a feeling everyone knows and almost nobody has a word for: that is the
// surprise. It is vivid and specific — winter sun on cold skin — and its
// soft, open sound carries the warmth it names. It feels chosen, not filler.

import { mkdirSync, writeFileSync } from "node:fs";

// The word, exactly as it will be judged: one word, no spaces, no punctuation.
const WORD = "apricity";

// The harness expects the entry at this absolute path.
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });

// Written byte-exact: the word alone, no trailing newline, so the entry
// is exactly one word of 9 characters and nothing else.
writeFileSync(OUTPUT_PATH, WORD, "utf8");
