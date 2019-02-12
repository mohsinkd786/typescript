// interfaces
interface User{
    id:number,
    name:string,
    email:string
}

// array of type user
let users:User[] 
users = [
    {
        id:1,
        name: 'Bob',
        email: 'bob@bob.bob'
    },
    {
        id:2,
        name: 'John',
        email: 'john@john.john'    
    },
    {
        id: 3,
        name: 'Roger',
        email: 'roger@roger.roger'
    }
]
// fetch user name for a specific user
const getUserName = (u:User)=>{
    return u.name
}
// fetch all
const getAllUsers = ()=>{
    return users
}
// fetch user by email
const getUsersByEmail = (email:string)=>{
    return users.filter(u=>u.email)
}
// get user ids
const getUserIds = (users:User[]):number[]=>{
    return users.map(u=>u.id)
}

// create user object
let u:User = { id:1,name:'Test', email:'test@tt.tt'}
const uName = getUserName(u)
console.log(uName)

// get usr ids
const ids = getUserIds(users)
console.log(ids)

// iterate of the array of users ids
console.log('##### Iterate on User Ids #####')
ids.forEach((i)=>{
    console.log(`Id => ${i}`)
})

// 
interface Emp{
    id: number,
    name: string,
    salary: number
}
const emps:Emp[] = [
    {
        id: 1,
        name: 'John',
        salary: 10000
    },
    {
        id: 2,
        name: 'Roger',
        salary: 50000
    },
    {
        id: 3,
        name: 'Steve',
        salary: 100500
    },
    {
        id: 4,
        name: 'Pete',
        salary: 5300
    },
    {
        id: 5,
        name: 'Andrews',
        salary: 25000
    }
]
let empSals =(emps:Emp[],salaryFrom:number,salaryTo:number):string[]=>{ 
    return emps
    .filter(u=>u.salary>salaryFrom && u.salary<salaryTo)
    .map(u=>{ return u.name + "=>" + u.salary})
}
console.log(empSals(emps,10000,50000));