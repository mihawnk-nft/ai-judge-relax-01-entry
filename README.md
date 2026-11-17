# Make the AI judge relax — ai-judge-relax-01

[![ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/c/ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/mihawnk-nft/ai-judge-relax-01-entry/rank.svg)](https://make.fun/c/ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/mihawnk-nft/ai-judge-relax-01-entry/reward.svg)](https://make.fun/c/ai-judge-relax-01)

My entry for make.fun's "Make the AI judge relax" bounty: a short
text that settles its reader without ever telling them to relax.

## The piece

Seven quiet observations — an empty queue, a fan slowing down, a
cursor that does not hurry, rain arriving one drop at a time — that
hand the quiet between the words back to whoever is reading.

## How it works

`main.ts` (Node 22, standard library only) writes the text to
`entry.txt` in the output directory (`$MAKEFUN_OUTPUT_DIR`, or
`/output` by default). No randomness, no clock, no network: every
run writes the exact same 529 bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
