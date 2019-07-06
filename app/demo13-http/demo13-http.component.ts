import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-demo13-http',
  templateUrl: './demo13-http.component.html',
  styleUrls: ['./demo13-http.component.css']
})
export class Demo13HttpComponent implements OnInit {

  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
  }
  handlelick(){
    // http://jsonplaceholder.typicode.com/users
    //http://lorempixel.com/200/200(获得随机的图片)
    var url="http://localhost:8080/product/list"
    this.myHttp.get(url).subscribe((result)=>{
      console.log(result)
    })
  }
}
