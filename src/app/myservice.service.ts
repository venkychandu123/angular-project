import { Injectable, NgModule } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empdate } from './empdate';

@NgModule({
  providers:[MyserviceService]
})
export class MyserviceService {

  constructor(public httpref:HttpClient) { }

  getdatafromser():Observable<Empdate>{
   return this.httpref.get<Empdate>("https://jsonplaceholder.typicode.com/posts");
  }

  validatinguserdata(username,password){

return true;
  }

}
