const args = process.argv.slice(2);

const makeBeep = (argsArray) => {
  for (const arg of argsArray) {
    if (arg >= 0 && typeof Number(arg) === 'number') {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * Number(arg));
    }
  }
};

if (args.length) {
  makeBeep(args);
}