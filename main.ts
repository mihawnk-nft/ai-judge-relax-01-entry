import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT = [
  'The hallway light is still on, and nobody is coming to turn it off.',
  'A mug waits on the sill, half full, its warmth given back to the room hours ago.',
  'Somewhere below, a washing machine finishes its slow turning, and the house exhales through the walls.',
  'The evening does not ask for anything.',
  'Dust moves in the lamplight the way snow moves when there is no wind at all.',
  'It falls, and falls, and is in no hurry to land.',
  'There is time to watch it.',
  'Nothing else is required of this hour.',
].join('\n');
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
