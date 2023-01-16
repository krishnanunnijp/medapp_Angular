import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  constructor(private api:ApiService){
    api.get().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }
    val=""
    data:any={}

    search=()=>{
      let data1:any={
        "name":this.val
      }
      this.api.searchP(data1).subscribe(
        (generated:any)=>{
          console.log(generated)
          this.data=generated
        }
      )
    }
}
