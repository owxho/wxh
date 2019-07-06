import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04-dir',
  templateUrl: './demo04-dir.component.html',
  styleUrls: ['./demo04-dir.component.css']
})
export class Demo04DirComponent implements OnInit {
stulist=[
  {name:'json',age:20,score:100},
  {name:'mike',age:20,score:70},
  {name:'lucy',age:20,score:90},
]
myimgurl="http://lorempixel.com/400/200/"
myurl="http://baidu.com"
myscore=61
  constructor() { }

  ngOnInit() {
  }
  //创建自定义方法，当按钮在按下去时执行
  handleClick(){
    alert('btn is clicked')
  }
}
