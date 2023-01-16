import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http:HttpClient) { }

  get=()=>{
    return this.http.get("http://localhost:8080/get")
  }
  searchP=(value:any)=>{
    return this.http.post("http://localhost:8080/search",value)
  }
  phLogin=(value:any)=>{
    return this.http.post("http://localhost:8080/pass",value)
  }

}
