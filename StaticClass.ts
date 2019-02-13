class StaticCalculator{
    protected _first:number
    private _second:number
    static _add=(_first:number,_second:number):number=>{
        return _first * _second
    }
}
interface StaticI {
    _third:number
    process:()=>void
}
class Calculator extends StaticCalculator{
    _first= 10
}
const calc = new Calculator()

// static attributes have
// direct access via class name 
const sum = Calculator._add(10,2)
console.log('SUM is ',sum)

