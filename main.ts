// Round 3 entry for "Make the AI judge relax".
// The passage below was composed fresh for this round: seven slow lines
// about a kitchen gone quiet after the kettle, a cooling cup of tea, and
// an afternoon in no hurry at all. The program's only job is to put those
// exact words into entry.txt, byte for byte, wherever the harness asks.

import fs from "node:fs";

// One template literal holds the whole passage. No trailing newline:
// the text ends on the word "wait." and the file ends right there.
const passage = `The kettle clicked off some time ago, and the kitchen has been quiet since.
Steam still rises in slow ribbons from the cup, curling, thinning, gone.
Outside, the light has gone the colour of old honey on the windowsill.
A cat sleeps in the one warm square of afternoon, breathing slow, dreaming of nothing at all.
Somewhere a clock ticks, and the minutes arrive unhurried, one by one.
The tea cools the way good afternoons do, gradually, asking nothing of you.
There is nowhere the next hour needs to be, and nothing in it that cannot wait.`;

// Where the entry goes: the harness sets MAKEFUN_OUTPUT_DIR, else /output.
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target: string = outDir + "/entry.txt";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(target, passage, "utf8");
