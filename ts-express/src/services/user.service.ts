import { users as dbUsers  } from "../data/user.data";
import { User } from "../entity/user";

export class UserService{
    users:User[]
    
    constructor(){
        this.users = dbUsers
    }

    getUsers():User[]{
        return this.users;
    }

    addUser(user:User):void{
        this.users.push(user)
    }

    deleteUser(id:number):void{
        this.users = this.users.splice(0,1);
    }    
}