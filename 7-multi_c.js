const [firstArg] = process.argv.slice(2);
let languages= 'C is fun';
 if (isNaN(firstArg)) {
      console.log ('Missing number of occurrences')
    } else {
       for (let i = 0; i < +firstArg; i++) {
    console.log(languages);
  }
    }