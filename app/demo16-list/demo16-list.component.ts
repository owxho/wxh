import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo16-list',
  templateUrl: './demo16-list.component.html',
  styleUrls: ['./demo16-list.component.css']
})
export class Demo16ListComponent implements OnInit {
  lili=[100,200,300]
  constructor() { }

  ngOnInit() {
  }

}
