import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myname=""
  mypwd=""
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    var url="http://localhost:8080/user/login"
    this.myhttp.post(url,{uname:this.myname,upwd:this.mypwd},{withCredentials:true}).subscribe((result:any)=>{
      console.log(result)
      if(result.code==200){
        this.navCtrl.pop();
      }else{
        result.msg="登录失败";
        var bb= this.toast.create({
        message:'登录失败',
        duration:2000
     });
     bb.present();
      }
    })
  }
}
