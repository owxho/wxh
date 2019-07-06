import { LoggerService } from '../logger.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo09-service',
  templateUrl: './demo09-service.component.html',
  styleUrls: ['./demo09-service.component.css']
})
export class Demo09ServiceComponent implements OnInit {
//实例化：将一个类 变成一个实例(instance/object)
  constructor(private myService:LoggerService) { }

  ngOnInit() {
  }
  handleClick(){
    //在此方法中 调用loggerService类中所封装的方法showlog
    this.myService.showlog('btn is clicked')
  }
}
