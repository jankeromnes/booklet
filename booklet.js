// Copyright © 2018 Jan Keromnes.
// The following code is covered by the MIT license.

if (process.argv.length !== 3) {
  console.error('Usage: node booklet.js PAGES\n\nHint: PAGES should be divisible by 4');
  process.exit(1);
}

const pages = parseInt(process.argv[2], 10);
const modulus = pages % 4;
if (modulus !== 0) {
  console.error(`Error: PAGES should be divisible by 4\n\nHint: You can add ${4 - modulus} blank pages to your document`)
  process.exit(1);
}

let sequence = [];
for (let i = 0; i < (pages / 2); i+= 2) {
  sequence = sequence.concat([pages - i, i + 1, i + 2, pages - i - 1]);
}

console.log('Pages:', sequence.join(','));
