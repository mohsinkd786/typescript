// string accessed from command line
var msg = new String(process.argv[2])
console.log(msg.toLocaleUpperCase())

// download the below module in case 
// process not accessible 
// >> npm i @types/node
 
let count = new Number(5644)
console.log(parseFloat(count.toString()))

let salary = new Number(2000.55)
console.log(salary)

let _accumulate= salary.toFixed()

console.log(`Fixed : ${_accumulate}`)


