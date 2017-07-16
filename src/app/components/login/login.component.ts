import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valid:boolean = false;
  uinvalid:String;
  pinvalid:String;
  suc:number = 0;
  constructor() { }

  ngOnInit() {
  }

  redirect(username,password){
    if(username == 'amit' && username != ''){
      this.suc += 1;
      this.valid = false;
      this.uinvalid = '';
    } else {
      this.uinvalid = 'has-error';
      this.valid = true;
    }
    if(password == 'aasma' && password != ''){
      this.suc += 1;
      this.valid = false;
      this.pinvalid = '';
    } else {
      this.pinvalid = 'has-error';
      this.valid = true;
    }
    if(this.suc == 2){
      window.location.href= '/index';
    } else
      this.suc = 0;
  }

}
