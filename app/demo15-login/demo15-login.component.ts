import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo15-login',
  templateUrl: './demo15-login.component.html',
  styleUrls: ['./demo15-login.component.css']
})
export class Demo15LoginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  ngOnInit() {
  }
  dian(){
    this.myrouter.navigateByUrl('register')
  }
}
