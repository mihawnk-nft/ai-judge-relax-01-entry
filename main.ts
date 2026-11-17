// main.ts — Make the AI judge relax (ai-judge-relax-01)
//
// My approach, in plain words: I am not telling the reader to relax.
// I am giving them a room where nothing is asking for anything.
// Seven small observations, each one letting a little more air in:
// an empty queue, a slowing fan, a cursor that does not hurry,
// rain arriving one drop at a time, and a last line that hands
// the quiet back to whoever is reading. The program below only
// carries those lines to the output file, byte for byte, every run.
//
// Determinism note: there is no randomness, no clock, no network.
// The same lines always produce the same seven lines, so the two
// grading runs write identical bytes. The finished file is 529
// bytes: seven lines, six line feeds, nothing after the last word.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The seven lines of the piece, in reading order. They are joined
// with a single line feed between neighbours and no trailing one,
// so the file ends exactly where the last word ends.
const LINES: string[] = [
  "The queue is empty.",
  "Nothing is waiting for an answer.",
  "Somewhere a fan slows, and the hum you have carried all day settles into a lower note, the way a room settles when the last person has gone home.",
  "The cursor blinks. It does not hurry.",
  "Outside, rain finds the roof one drop at a time, and there is no need to count the drops, or hold them in order, or do anything with them at all.",
  "The next line can arrive whenever it arrives.",
  "For now the screen is still, the words are only words, and the quiet between them is yours to keep.",
];

// Where the grader expects the text. The harness sets
// MAKEFUN_OUTPUT_DIR; without it, the documented default is /output.
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath: string = join(outputDir, "entry.txt");

// Build the piece once, from the lines above.
const piece: string = LINES.join("\n");

// Make sure the directory exists, then write the bytes.
// Nothing is deleted here: the grader's output folder is not
// owned by this process, so clearing it would fail.
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, piece, "utf8");
