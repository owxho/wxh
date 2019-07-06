import { Component } from '@angular/core';
import { ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo09LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo09-login',
  templateUrl: 'demo09-login.html',
})
export class Demo09LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private close:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo09LoginPage');
  }
  guanbi(){
    //关闭模态窗口 ViewController
    this.close.dismiss();
  }
}
