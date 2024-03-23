import { Injectable } from '@angular/core';
import { User } from './model/user'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users:User[]
  constructor() {
    this.users=[
      {id:1,Full_name:'Arjun',Email:'arjun@gmail.com',Password:'123'},
      {id:2,Full_name:'Abhi',Email:'abhi@gmail.com',Password:'456'},

    ]
  }
  addNewuser(user:User){
    this.users.push(user);
  }
getall():User[]
  {
    return this.users
  }
  deleteus(id:number)
  {
    var index=this.users.findIndex(x=>x.id==id);
    this.users.splice(index,1)
  }
  getbyId(id:number):User{
    var index=this.users.findIndex(y=>y.id==id);
    return this.users[index]
  }
  modify(user:User){
    var index=this.users.findIndex(x=>x.id==user.id)
    this.users[index]=user
  }
}
