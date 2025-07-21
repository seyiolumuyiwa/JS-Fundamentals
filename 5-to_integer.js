const [firstArg] = process.argv.slice(2);

if (!isNaN(firstArg)) {
  console.log ("My number: ", firstArg);
} else {
  console.log ('Not a number');
}