import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-changecontact',
  templateUrl: './changecontact.component.html',
  styleUrls: ['./changecontact.component.css']
})
export class ChangecontactComponent implements OnInit {

  constructor( private obj:HttpClient) { }

  ngOnInit() {
  }
  moblie:string;
  landline:string;
  email:string;
  website:string;
  facebook:string;
  linkedin:string;
  twitter:string;
  google:string;

  serverdata;
  getcontact()
  {
    var input ={"id":localStorage.getItem("userid")};
    var url ="https://www.firstenquiry.com/api/getcontact.php";
    this.obj.post(url, input).subscribe(response=>{
      this.serverdata = response as string[];
      if(this.serverdata.id !=""){
        this.moblie=this.serverdata.moblie;
        this.landline=this.serverdata.landline;
        this.email=this.serverdata.email;
        this.website=this.serverdata.website;
        this.facebook=this.serverdata.facebook;
        this.linkedin=this.serverdata.linkedin;
        this.twitter=this.serverdata.twitter;
        this.google=this.serverdata.google;
              
      }
    })
  }
  updatecontact()
  {
    var input ={
                  "id":localStorage.getItem("userid"),
                  "moblie":this.moblie,
                  "email":this.email,
                  "landline":this.landline,
                  "website":this.website,
                  "facebook":this.facebook,
                  "linkedin":this.linkedin,
                  "twitter":this.twitter,
                  "google":this.google,
    }
    var url ="https://www.firstenquiry.com/api/updatecontact.php";
    this.obj.post(url,input).subscribe(response=>{
      this.getcontact();
    })
  }
}
