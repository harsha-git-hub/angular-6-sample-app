import { Component, OnInit } from '@angular/core';
import {MultipurposeService} from './../multipurpose.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myobj:MultipurposeService) { }

  ngOnInit() {
  }
  email:string;
  pass:string;
  msg:string;

 login()
 {
   if( (this.email=="") || (this.pass=="") || (this.email=="undefined") || (this.pass=="undefined")  )
   {
     this.msg="please enter login details";
   }else{
   localStorage.setItem("name", "TestUser");
   localStorage.setItem("userid",  "1");
   window.location.reload();
 }
}
}
