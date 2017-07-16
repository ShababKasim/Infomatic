import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.user = {
      name:"John Doe",
      age : 23,
      email : "some@thing.com",
      dob:"12/1/1994",
      address : {
        street:'M A Road',
        city:'Mumbai',
        state:'Maharashtra'
        },
      hobbies:['Watching Movies','Listening music','Fucking people']
    }
  }

  changeName(name){
    this.user.name=name;
    return false;
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface User{
  name:String;
  age:number;
  email:String;
  dob:String;
  hobbies:String[];
  address:{
    street:String,
    city:String,
    state:String
  }
}
