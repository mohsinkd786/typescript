import { IOperation } from "./Operation"
const ACTIONS = require('./_Actions').ACTIONS

const _process = (_first:number,_next:number,_action:IOperation)=>{
    return _action._operate(_first,_next)
}

// Actions
const _calculate = (_first:number,_next:number,_action:string)=>{
    switch(_action){
        case 'SUM':
            // #### ADDITION
            const _addObj = ACTIONS._SUM
            console.log(`${_action} IS ${_process(_first,_next,_addObj)}`)
            break
        case 'DIFF':
            // #### DIFFERENCE
            const _diffObj = ACTIONS._DIFF
            console.log(`${_action} IS ${_process(_first,_next,_diffObj)}`)
            break
        case 'PRODUCT':
            // #### PRODUCT
            const _mulObj =ACTIONS._PRODUCT
            console.log(`${_action} IS ${_process(_first,_next,_mulObj)}`)
            break
        default:
            console.log('Please choose from SUM, DIFF & PRODUCT')
        }
}

// call the specific action
_calculate(parseInt(process.argv[2]),parseInt(process.argv[3]),process.argv[4])