const [firstArg, secondArg] = process.argv.slice(2);

function add(firstArg, secondArg) {
  console.log(+firstArg + +secondArg)
}

add (firstArg, secondArg);