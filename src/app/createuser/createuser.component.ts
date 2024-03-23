import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {
  user:User

  constructor(private userservice:UserserviceService,private router:Router){
    this.user={id:0,Full_name:'',Email:'',Password:''}
  }
  adduser():void{
    this.userservice.addNewuser(this.user)
    alert('registration succesfull')
    this.router.navigateByUrl("/userlist")

  }
}
