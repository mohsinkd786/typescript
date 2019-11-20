import * as express from 'express';
import { UserService } from "./services/user.service";
import { User } from './entity/user';
import * as parser from 'body-parser';
const server = express();
const service = new UserService();

server.use(parser.json()); // used the read the request body as JSON

// GET
server.get('/status',(rq,rs) => {
    rs.json({
        message : "Service is Running"
    });
});

// GET + Path Params
server.get('/message/:msg',(rq,rs) =>{
    const _msg = rq.params.msg; // get url path parameter
    rs.json({
        message : _msg
    });
});

// POST
server.post('/user',(rq,rs)=>{
    const user:User = rq.body;
    service.addUser(user);
    rs.json({
        message : 'User Saved Successfully'
    });
});

server.get('/users',(rq,rs)=>{
    const users:User[] = service.getUsers();
    rs.json({
        users : users
    }); 
});



// Listener PORT
server.listen(1234,()=>{
    console.log('Server Started at 1234');
});

