import { Demo09LoginPage } from './../demo09-login/demo09-login';
import { Demo07LianxiPage } from './../demo07-lianxi/demo07-lianxi';
import { Component } from '@angular/core';
import {ModalController,AlertController,ActionSheetController,ToastController,LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo08WindowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo08-windows',
  templateUrl: 'demo08-windows.html',
})
export class Demo08WindowsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private load:LoadingController,private toastCtrl:ToastController,private ActionSheet:ActionSheetController,private alert:AlertController,private modalctrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo08WindowsPage');
  }
  // LoadingController
  showloading(){
    //创建
    var bb= this.load.create({
      content:'正在刷新...',
      duration:3000
    })
    //显示
    bb.present()
  }
  // ToastController
  showToast(){
    var aa=this.toastCtrl.create({
      message:'登录失败',
      duration:2000,
      showCloseButton:true,
      closeButtonText:'关闭'
    });
    aa.present();
  }
  // ActionSheetController
  showActionSheet(){
    var action=this.ActionSheet.create({
      title:'分享',
      buttons:[
        {text:'分享到qq',handler:()=>{console.log('分享qq成功')}},
        {text:'分享到微信好友'},
        {text:'分享到微博'},
      ]
    })
    action.present();
  }
  // AlertController
  showalert(){
    var aa=this.alert.create({
      title:'标题',
      message:'这是一个消息',
      inputs:[
        {type:'text',placeholder:'请输入'}
      ],
      buttons:[
        {text:'yes',handler:(result)=>{//result是一个数组，有几个元素取决于inputs数组中指定了几个输入框，元素储存的就是输入框的数据
          console.log(result[0])
        }},
        {text:'no'}
      ]
    });
    aa.present();
  }
  //ModalController加载自定义窗口
  showModal(){
  var dd= this.modalctrl.create(Demo09LoginPage);
  dd.present()
  }
}
