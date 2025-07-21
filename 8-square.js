const [firstArg] = process.argv.slice(2);
let square= 'X';
 if (isNaN(firstArg)) {
      console.log ('Missing size')
    } else {
       for (let i = 0; i < +firstArg; i++) {
    console.log(square.repeat(firstArg));
  }
    }