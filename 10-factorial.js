const [firstArg] = process.argv.slice(2);
    let total = []
      function fact() {
  
        for (let i = 1; i <= firstArg; i++) {
    total.push(i)
      }
      let result = total.reduce((acc, val) => acc * val, 1)
      console.log(result)
      }
fact()
      