const [firstArg] = process.argv.slice(2);
if (firstArg) {
  console.log (firstArg);
} else {
  console.log ('No argument');
}

