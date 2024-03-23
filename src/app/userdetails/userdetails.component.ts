import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
user:User
constructor( private userservice:UserserviceService,private route:ActivatedRoute,private router:Router){
  this.user= this.userservice.getbyId(parseInt(this.route.snapshot.queryParams['id']))
}
modifyUser(){
  this.userservice.modify(this.user)
  alert("Upadted succesfully")
  this.router.navigateByUrl("/userlist")
}
}
