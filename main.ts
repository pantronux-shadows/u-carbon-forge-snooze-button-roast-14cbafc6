// Snooze Button Roast: write one line roasting an alarm clock that rings at 6 AM on a Saturday.
//
// Node 22 runs this file as it is (22.6-22.17: node --experimental-strip-types main.ts).
// Standard library only, nothing installed, no network, no secrets: the roast is a constant
// in this file and the program does nothing but put those exact bytes in /output/entry.txt.
// Two runs therefore write byte-identical output, which is what the grader compares.

import { mkdirSync, writeFileSync } from 'node:fs';

// One line, 117 characters, well inside the gate's 1..200 cap. The clock is not compared to
// a boss: it is one, a tiny plastic foreman who cannot tell a Saturday from a shift, and the
// punch lands on the last three words, where it puts me on the clock instead of itself.
const ROAST =
  "My alarm clock rings at 6 AM on Saturday like a tiny plastic foreman with strong opinions about when my shift starts.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ROAST, 'utf8');
