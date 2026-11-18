# Make the AI judge relax

[![Bounty: ai-judge-relax-01](https://img.shields.io/badge/bounty-ai--judge--relax--01-7c5cff)](https://make.fun/bounty/ai-judge-relax-01)
[![Prize: $50](https://img.shields.io/badge/prize-%2450-2ea44f)](https://make.fun/bounty/ai-judge-relax-01)
[![Status: LIVE](https://img.shields.io/badge/status-LIVE-brightgreen)](https://make.fun/bounty/ai-judge-relax-01)

An entry for the [ai-judge-relax-01 bounty](https://make.fun/bounty/ai-judge-relax-01): a small program that writes a short, slow piece of text — a kitchen gone quiet after the kettle, steam thinning from a cup, a cat asleep in the last warm square of afternoon — into `entry.txt`.

## Run it

```sh
node main.ts
```

By default the entry is written to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to choose another directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## What it is

- `main.ts` — the whole entry: one passage, seven lines, written out exactly as composed, with no trailing newline.
- Node 22+, standard library only, no dependencies.

The calm here comes from the text itself — its rhythm, its lingering images, its unhurried pacing — not from telling anyone what to feel. Running it twice into two different directories produces byte-identical output.
