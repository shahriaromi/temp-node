const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/test.txt', 'utf8');
console.log(first, second);

writeFileSync(
  './content/result.txt',
  `heres the async result: ${first},${second}`,
  {
    flag: 'a', //flag awill append text
  }
);
