import { Component } from '@angular/core';
import { AlertController,ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo11LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo11-lianxi',
  templateUrl: 'demo11-lianxi.html',
})
export class Demo11LianxiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo11LianxiPage');
  }
  danji(){
    var bb=this.alert.create({
      title:'验证手机号',
      message:'请输入本次业务中要用到的手机号',
      inputs:[
        {type:"text",placeholder:'请输入'}
      ],
      buttons:[
        {text:'OK',handler:(result)=>{
         this.showToast("验证码已经成功发送到"+result[0]);
        }},
        {text:'cancel'},
      ]
    });
    bb.present();
  }
  showToast(msg){
  var cc=  this.toast.create({
    message:msg,
    duration:2000
  });
  cc.present();
  }
}
