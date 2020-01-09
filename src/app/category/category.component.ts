import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  cat:any[]=[];

  ngOnInit() {
    this.getcategory();
  }
    getcategory()
    {
      var url ="https://www.firstenquiry.com/api/allcat.php";
      var input ={"id": localStorage.getItem("userid")};

            this.obj.post(url, input).subscribe(response=>{
         this.cat=response as string[];
      })
    }
     
}
