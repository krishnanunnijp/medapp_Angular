import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
username=""
password=""
constructor(private router:Router){}

login=()=>{
  let data:any={
    "username":this.username,
    "password":this.password
  }
  if( data.username=="admin" && data.password=="12345"){
    this.router.navigate(["/pharm"])

  }else{
    alert("something is wrong")
  }
}

}
