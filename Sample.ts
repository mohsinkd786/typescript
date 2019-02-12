const execute =(action:string,x:number,y:number)=>{
    var result:number = 0
    switch(action){
        case 'ADD':
            result = _add(x,y)
            break
        case 'DIFF':
            result = _diff(x,y)
            break
        case 'MUL':
            result = _mul(x,y)
            break
    }
    return result
}
const _add = (x:number,y:number)=>{
    return x + y
}
const _diff = (x:number,y:number)=>{
    return x - y
}
const _mul = (x:number,y:number)=>{
    return x / y
}
// get values from command line args
let _action = process.argv[2]
let _x = parseInt(process.argv[3])
let _y = parseInt(process.argv[4])

const result = execute(_action,_x,_y)
console.log(`${_action} :: ${result}`)
