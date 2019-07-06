import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo04LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo04-lianxi',
  templateUrl: 'demo04-lianxi.html',
})
export class Demo04LianxiPage {
  list=[100,200,300]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo04LianxiPage');
  }
  shan(id){
    this.list.splice(id,1)
  }
}
