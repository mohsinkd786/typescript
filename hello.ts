var message:string = 'Hello Welcome to TYPESCRIPT'

console.log(`Message : ${message}`)

let count:number = 10

if(count >10 || count == 15){
    console.log(count)
}else{
    console.log(`Count is lesser than 10`)
}

// switch cases
switch(count){
    case 10:
        console.log('10')
        break
    case 15:
        console.log('15')    
}
// param less function
function sayHello(){
    return 'Hello'
}
const data = sayHello()
console.log(data)

// parameterized function
function getMessage(msg:string){
    return 'Msg is '+msg
}
const msg = getMessage('Hello how r u')
console.log(msg)

// parameterized function with defailt Message
function getDefaultMessage(msg:string='Default Message'){
    return 'Msg is '+msg
}

console.log(getDefaultMessage())