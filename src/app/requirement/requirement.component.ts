import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  userid:string;
  ngOnInit() {
    this.userid=localStorage.getItem("userid");
    this.getrequirement();
  }

  allrequirement:any[]=[];
    getrequirement()
    {
      var url ="https://www.firstenquiry.com/api/requirement.php";
      this.obj.get(url).subscribe(response=>{
          this.allrequirement = response as string[];
      })
    }
    title:string;
    details:string;
    save()
    {
                var input={
                  "id":this.userid,
                  "title":this.title,
                  "details":this.details
                };
      var url ="https://www.firstenquiry.com/api/saverequirement.php";
      this.obj.post(url,input).subscribe(response=>{
          this.getrequirement();//reload the list
          this.title="";
          this.details="";
      })
    }
}
