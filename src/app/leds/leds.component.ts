import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-leds',
  templateUrl: './leds.component.html',
  styleUrls: ['./leds.component.css']
})
export class LedsComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getleds();
  }

  allleds:any[]=[];
  getleds()
  {
    var url ="https://www.firstenquiry.com/api/leads.php";
    var input ={"id": localStorage.getItem("userid")};

    this.obj.post(url,input).subscribe(response=>{
        this.allleds = response as string[];
        
    })
  }
}
