import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {

 

  datalist :any;
  constructor(public datafromservice:MyserviceService){
  }
  ngOnInit(){
    this.datafromservice.getdatafromser().subscribe(
      (res:any)=>{
        this.datalist=res;
        console.log(this.datalist);
    })
  }

}
