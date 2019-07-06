import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router'
//implements实现
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor() { }
  canActivate(){
    //应该执行一些鉴权或者是否登陆之类的处理，通过返回的true，false来决定是否可以访问
    return true;
  }
}
