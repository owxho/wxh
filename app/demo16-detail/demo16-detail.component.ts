import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-demo16-detail',
  templateUrl: './demo16-detail.component.html',
  styleUrls: ['./demo16-detail.component.css']
})
export class Demo16DetailComponent implements OnInit {
  list=""
  constructor(private myRoute:ActivatedRoute) { }

  ngOnInit() {
    this.myRoute.params.subscribe((result:any)=>{
      console.log(result.index)
      this.list=result.index
    })
    console.log('可以在这处理一些初始化的工作')
  }
  
}
