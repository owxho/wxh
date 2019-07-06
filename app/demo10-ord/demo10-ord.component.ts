import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10-ord',
  templateUrl: './demo10-ord.component.html',
  styleUrls: ['./demo10-ord.component.css']
})
export class Demo10OrdComponent implements OnInit {
  mycontent='hellow wprd'
  shuzhu=[100,200,300]
  constructor() { }

  ngOnInit() {
  }

}
