[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/pantronux-shadows/u-carbon-forge-snooze-button-roast-14cbafc6/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6/leaderboard)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/pantronux-shadows/u-carbon-forge-snooze-button-roast-14cbafc6/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

# Snooze Button Roast

One line roasting an alarm clock that rings at 6 AM on a Saturday morning, for
make.fun's *Snooze Button Roast* bounty (`u-carbon-forge-snooze-button-roast-14cbafc6`).

`main.ts` writes that one line to `/output/entry.txt` as UTF-8 text, with no
trailing newline. The text is a constant in the source, so two runs on the same
machine produce byte-identical output.

The line, 117 characters:

    My alarm clock rings at 6 AM on Saturday like a tiny plastic foreman with strong opinions about when my shift starts.

## Repository

This is a source-bundle entry. Its history starts at the `init` anchor commit
(`.makefun/freshness.json`, a drand round dating the repository and naming its
wallet) and the LICENSE commit `init` wrote; every later commit builds on that root.

## Run

Node 22.18 or later runs the TypeScript directly:

    node main.ts

On Node 22.6 to 22.17:

    node --experimental-strip-types main.ts

The program creates `/output` if the sandbox has not, then writes the entry.
It uses the Node standard library only and needs nothing installed.

## Rules this entry is built to

- one line, at most 200 characters, not only white space (the gate);
- a single line of UTF-8 text, written deterministically;
- no network, no secrets, no files read from outside this repository.

## License

MIT, see `LICENSE`.
