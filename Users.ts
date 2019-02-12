const usrs =[
    {
        id: 1,
        name: 'Xyz'
    },{
        id: 2,
        name: 'Abc'  
        ,address: 'asasyaus'  
    }
]

// interfaces
interface User{
    id:number,
    name:string,
    email:string
}

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
