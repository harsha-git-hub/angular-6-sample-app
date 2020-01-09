import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-changeaddress',
  templateUrl: './changeaddress.component.html',
  styleUrls: ['./changeaddress.component.css']
})
export class ChangeaddressComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
  }
  companyname:string;
  city:string;
  locality:string;
  pincode:string;
  address:string;
  serverdata;
  getcontact()
  {
    var input ={"id":localStorage.getItem("userid")};
    var url ="https://www.firstenquiry.com/api/getaddress.php";
    this.obj.post(url, input).subscribe(response=>{
      this.serverdata = response as string[];
      if(this.serverdata.id !=""){
        this.companyname=this.serverdata.companyname;
        this.city=this.serverdata.city;
        this.locality=this.serverdata.locality;
        this.pincode=this.serverdata.pincode;
        this.address=this.serverdata.address;
        
              
      }
    })
  }
}
