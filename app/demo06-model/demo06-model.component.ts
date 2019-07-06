import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06-model',
  templateUrl: './demo06-model.component.html',
  styleUrls: ['./demo06-model.component.css']
})
export class Demo06ModelComponent implements OnInit {
  uname:"mike"
  constructor() { }

  ngOnInit() {
  }
  hangdlechange(){
    console.log(this.uname)
  }
}
