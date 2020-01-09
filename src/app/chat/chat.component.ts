import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getchatdata();
  }

  chatdata:any[]=[];
  chatmsg:any[]=[];
  getchatdata()
  {
    this.obj.get("./assets/chatlist.json").subscribe(response=>{
      this.chatdata=response as string[];
      this.chatmsg=this.chatdata[0].msg;
    })
  }
    getmsg(index:number)
    {
      this.chatmsg =this.chatdata[index].msg;
    }
}
