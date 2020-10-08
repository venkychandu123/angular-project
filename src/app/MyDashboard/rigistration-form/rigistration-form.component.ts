import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-rigistration-form',
  templateUrl: './rigistration-form.component.html',
  styleUrls: ['./rigistration-form.component.css']
})
export class RigistrationFormComponent implements OnInit {
 public formvalues;
  constructor() { }
 
  ngOnInit(): void {
  }
  public signup =new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    lastname: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    phonenumber: new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
    email: new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    age:new FormControl("",[Validators.required,Validators.pattern("[0-9]{1,3}")])
  });
  addnewuser(){
  
  this.formvalues =[{
    FName:this.signup.get('firstname').value,
     Lname:this.signup.get('lastname').value,
     pnumber:this.signup.get('phonenumber').value,
     mail:this.signup.get('email').value,
     AGE:this.signup.get('age').value,
   }];

   console.log(this.formvalues.FName);
   console.log(this.formvalues);
   //console.log('Name:' + this.signup.get('firstname').value);
   //console.log('phonenumber:' + this.signup.get('lastname').value);
   //console.log('phonenumber:' + this.signup.get('phonenumber').value);
   //console.log('email:' + this.signup.get('email').value);
   //console.log('email:' + this.signup.get('age').value);
   

  }

}
