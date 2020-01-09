import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  userlogin:boolean =false;
  name:string;
  userid:string;
  constructor () {}

  ngOnInit(){
    this.name=localStorage.getItem("name");
    this.userid = localStorage.getItem("userid");
    if ( ( this.name!=null) && (this.name!=""))
    {
      this.userlogin=true;
    }

  }
}
