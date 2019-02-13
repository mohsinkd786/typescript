class User{
    _id:number
    _name:string
}

interface Employee extends User{
    address:{street:string,city:string,zip:number}
    _salary: number
    calculateSalary:()=>void // void refers to no return type
}

class EmployeeService implements Employee{
    address={
        street: 'Manyata',
        city: 'Bengaluru',
        zip: 560045
    }
    _salary = 30000
    _id = 1
    _name = 'Dushyanta'
    
    calculateSalary = ():void=>{
        console.log(`${this._name} has salary of ${this._salary} INR`)
    }
}
let service = new EmployeeService()
service.calculateSalary()




