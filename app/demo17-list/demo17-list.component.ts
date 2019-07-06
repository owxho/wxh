import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo17-list',
  templateUrl: './demo17-list.component.html',
  styleUrls: ['./demo17-list.component.css']
})
export class Demo17ListComponent implements OnInit {
  pid=''
  constructor(private myRoou: ActivatedRoute ) { }

  ngOnInit() {
    this.myRoou.params.subscribe((result)=>{
      console.log(result.id)
      this.pid=result.id
    })
  }

}
