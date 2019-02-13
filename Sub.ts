import { IOperation } from "./Operation";

export namespace Proc{
    export class Subtract implements IOperation{
        _operate=(_first:number,_next:number)=>{
            return _first - _next
       }
    }
}
