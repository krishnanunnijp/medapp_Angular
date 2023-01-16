import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pharmasist',
  templateUrl: './pharmasist.component.html',
  styleUrls: ['./pharmasist.component.css']
})
export class PharmasistComponent {
  data:any=[]
constructor(private api:ApiService){
  api.get().subscribe(
    (generated:any)=>{
      this.data=generated
    }
  )
}


}
