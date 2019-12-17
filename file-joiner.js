#!/usr/bin/env node

// Get provided args
const [,, ...args] = process.argv;

const folder = args[0];
const output = args[1];

console.log('Target Folder:', folder);
console.log('Output File:', output);
