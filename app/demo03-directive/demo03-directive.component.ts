import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03-directive',
  templateUrl: './demo03-directive.component.html',
  styleUrls: ['./demo03-directive.component.css']
})
export class Demo03DirectiveComponent implements OnInit {
  myList=[100,200,300]
  islogin=true
  myanse='a'
  constructor() { }

  ngOnInit() {
  }

}
