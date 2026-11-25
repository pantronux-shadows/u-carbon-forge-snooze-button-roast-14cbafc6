// Snooze Button Roast: write one line roasting an alarm clock that rings at 6 AM on a Saturday.
//
// Node 22 runs this file as it is (22.6-22.17: node --experimental-strip-types main.ts).
// Standard library only, nothing installed, no network, no secrets: the roast is a constant
// in this file and the program does nothing but put those exact bytes in /output/entry.txt.
// Two runs therefore write byte-identical output, which is what the grader compares.

import { mkdirSync, writeFileSync } from 'node:fs';

// One line, 91 characters, well inside the gate's 1..200 cap. The turn lands on the last
// three words: the alarm is not warning about a fire, it has decided the sleeper is the fire.
const ROAST =
  "My alarm clock rings at 6 AM on Saturday like a smoke detector that's decided I'm the fire.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ROAST, 'utf8');
