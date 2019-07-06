import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11-cart',
  templateUrl: './demo11-cart.component.html',
  styleUrls: ['./demo11-cart.component.css']
})
export class Demo11CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handlelogoutEvent(msg){
    console.log("父组件接受到子组件传来的数据是"+msg)
  }
}
