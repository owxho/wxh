import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07-lianxi',
  templateUrl: './demo07-lianxi.component.html',
  styleUrls: ['./demo07-lianxi.component.css']
})
export class Demo07LianxiComponent implements OnInit {
  number=""
  list=[]
  constructor() { }

  ngOnInit() {
  }
  baby(){
    this.list.push(this.number)
    this.number=""
  }
}
