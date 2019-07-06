import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  //封装一个方法，来控制日志的输出
  showlog(info){
    console.log(info)
  }
}
