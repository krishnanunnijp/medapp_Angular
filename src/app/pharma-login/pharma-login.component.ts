import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pharma-login',
  templateUrl: './pharma-login.component.html',
  styleUrls: ['./pharma-login.component.css']
})
export class PharmaLoginComponent {
  constructor(private api:ApiService){}
  userName=""
  password=""
  login=()=>{
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)

    this.api.phLogin(data).subscribe(
      (generated:any)=>{
        console.log(generated)
      }
    )
  }

}
