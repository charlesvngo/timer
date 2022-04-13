const readline = require('readline');
const { stdin: input } = require('process');

readline.emitKeypressEvents(input);
input.setRawMode(true);
input.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else {
    if (key.name === 'b') {
      console.log("Beep!");
      process.stdout.write('\x07');
    }
    if (!Number.isNaN(Number(key.name))) {
      console.log(`Setting timer for ${key.name} seconds...`);
      setTimeout(() => process.stdout.write('\x07'), 1000 * Number(key.name));
    }
  }
});
console.log('Press a number or B...');