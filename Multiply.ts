import { IOperation } from "./Operation";

export class Multiply implements IOperation{
    _operate=(_first:number,_next:number)=>{
        return _first * _next
   }
}

// import  * as M from "./Multiply"