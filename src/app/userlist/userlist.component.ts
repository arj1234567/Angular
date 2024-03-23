import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
user:User[]
constructor(private userservice:UserserviceService){
  this.user=this.userservice.getall()
}
deleteUser(id:number)
{
  this.userservice.deleteus(id);
}
}
