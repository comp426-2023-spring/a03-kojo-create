#!/usr/bin/env node
import { rps } from 'node-rpsls'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    helpMessage();
    process.exit(0);
}
if (args.r || args.rules) {
    ruleMessage();
    process.exit(0);
}
const move = args._[0]
try {
    gameObject = rps(move)
    console.log(JSON.stringify(rps(gameObject)));
} catch (e){
    helpMessage()
    ruleMessage()
    process.exit(0)
}


function helpMessage() {
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
    '  -h, --help      display this help message and exit\n',
    '  -r, --rules     display the rules and exit\n\nExamples:\n',
    '  node-rps        Return JSON with single player RPS result.\n',
    '                  e.g. {"player":"rock"}\n',
    '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
    '                  e.g {"player":"rock","opponent":"scissors","result":"win"}')
}

function ruleMessage() {
    console.log('Rules for Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock CRUSHES Scissors')
}