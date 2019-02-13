import * as add from "./Add"
import sub = require('./Sub')
import { Multiply } from './Multiply'

export class ACTIONS {
    static _SUM:any = new add.Operation.Addition()
    static _DIFF:any = new sub.Proc.Subtract()
    static _PRODUCT:any = new Multiply()
}