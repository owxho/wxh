import {Input, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-demo10-list',
  templateUrl: './demo10-list.component.html',
  styleUrls: ['./demo10-list.component.css']
})
export class Demo10ListComponent implements OnInit {
  @Input() myvalue=""
  @Input() mylist=[]
  constructor() { }

  ngOnInit() {
  }

}
