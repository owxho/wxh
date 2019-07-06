import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-demo12-item',
  templateUrl: './demo12-item.component.html',
  styleUrls: ['./demo12-item.component.css']
})
export class Demo12ItemComponent implements OnInit {
  mylist=[100,200,300]
  constructor() { }

  ngOnInit() {
  }
  handlelogoutEvent(msg){
    console.log("父组件接受到子组件传来的数据是"+msg)
   this.mylist.splice(msg,1)
  }
}
