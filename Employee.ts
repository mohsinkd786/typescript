interface User {
    id: number,
    name: string,
    email: string
}
interface Address {
    street : string,
    city: string,
    state: string,
    zip: number
}
interface UnEmployed extends User{
    //salary:number
}
interface Employed extends User,Address{
    salary : number,
    getNameAndEmail:()=>string
}
// actual body with methods implementations
let emp:Employed ={
    id: 1,
    name: 'Bob Marley',
    email: 'bob@marley.com',
    street: 'Chowpati',
    city: 'Mumbai',
    state: 'Maharashtra',
    zip: 20001,
    salary: 500000,
    getNameAndEmail:()=>{
        return emp.name +' '+emp.email
    }
}

// child to parent 
let _parent:User = {
    id: 1,
    name: 'Mohsin',
    email: 'mo@gmail.com'
}

let _child:UnEmployed = _parent

// parent to child
let __child:UnEmployed = {
    id: 1,
    name: 'Mohsin',
    email: 'mo@gmail.com'
   //,salary: 10
}

let __parent:User = __child
// __parent.name
console.log(emp.getNameAndEmail())
