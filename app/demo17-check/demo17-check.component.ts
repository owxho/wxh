import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo17-check',
  templateUrl: './demo17-check.component.html',
  styleUrls: ['./demo17-check.component.css']
})
export class Demo17CheckComponent implements OnInit {
  list=[]
  constructor(private myhttp:HttpClient,private myrouter:Router) { }

  ngOnInit() {
    var url="http://localhost:8080/product/list";
    this.myhttp.get(url).subscribe((result:any)=>{
      console.log(result.data)
      this.list=result.data
    })
  }
  hangdclick(id){
    this.myrouter.navigateByUrl('list1/'+id)
  }

}
