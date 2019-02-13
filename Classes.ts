class UserService{

    private users:User[]

    constructor(){
        this.users = [
            {
                id: 1,
                name: 'Xyz',
                salary: 100000
            },
            {
                id: 2,
                name: 'Abc'
                //,salary: 50000
            }
        ]
    }
    getUsers():User[]{
        return this.users
    }
}
interface User{
    id: number,
    name: string,
    salary?: number
}
interface EmployService{
    //empId: number,
    getEmploy:()=>string
}
interface SalaryCalculatorService{
    getAllWithSalaryInRange:(_from:number,_to:number)=>User[]
}
class EmployServiceImpl implements EmployService,SalaryCalculatorService{
    //id = 1
    //empId=1
    name ='Test'
    
    private users:User[]

    constructor(users:User[]){
        this.users = users
    }
    // implemented method 
    getEmploy =()=>{
        return this.name
    }
    getAllWithSalaryInRange=(_from:number,_to:number)=>{
        //this.process()
        return this.users.filter(u=>u.salary>_from && u.salary<_to)
    }
    private process=()=>{

    }
}
// variable declaration
let usrObj:UserService

// object creation
usrObj = new UserService()

let users:User[] = usrObj.getUsers()

console.log(users)

const emp = new EmployServiceImpl(users)

const emp1 = new EmployServiceImpl([])

// emp.process()

emp.getAllWithSalaryInRange(45000,60000)
.forEach(u=>console.log(JSON.stringify(u)))
