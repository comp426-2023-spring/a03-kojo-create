#!/usr/bin/env node

import { rps } from 'node-rpsls';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
  console.log(`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
  process.exit(0);
}

if (args.r || args.rules) {
  console.log(`Rules for Rock Paper Scissors:

 - Scissors CUTS Paper
 - Paper COVERS Rock
 - Rock CRUSHES Scissors`);
  process.exit(0);
}

const move = args._[0];

try {
  const gameObject = rps(move);
  console.log(JSON.stringify(gameObject));
} catch (e) {
  console.log('Invalid move!');
  console.log(`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}
