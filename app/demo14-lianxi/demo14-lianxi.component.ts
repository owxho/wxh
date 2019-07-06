import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo14-lianxi',
  templateUrl: './demo14-lianxi.component.html',
  styleUrls: ['./demo14-lianxi.component.css']
})
export class Demo14LianxiComponent implements OnInit {
  list=""
  constructor(private mhttp:HttpClient) { }

  ngOnInit() {
  }
  dian(){
    var url="http://localhost:8080/product/detail?lid=1"
    this.mhttp.get(url).subscribe((result:any)=>{
      console.log(result.details)
      this.list=result.details
    })
  }
}
