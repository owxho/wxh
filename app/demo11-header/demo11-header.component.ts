import {Output,EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11-header',
  templateUrl: './demo11-header.component.html',
  styleUrls: ['./demo11-header.component.css']
})
export class Demo11HeaderComponent implements OnInit {
  //定义了一个支持向外输出的事件类型:logoutEvent
@Output() logoutEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  handleclick(){
    this.logoutEvent.emit(123)
  }
}
