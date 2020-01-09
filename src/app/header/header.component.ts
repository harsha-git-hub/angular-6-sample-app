import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
    fullname:string;
    id:string;
  ngOnInit() {
    this.fullname=localStorage.getItem("name");
    this.id = localStorage.getItem("userid");
  }
  logout()
  {
    localStorage.clear();//clear data
    window.location.href="http://localhost:4200";
  }

}
