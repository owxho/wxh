import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Demo13DetailPage } from '../demo13-detail/demo13-detail';

/**
 * Generated class for the Demo13ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo13-list',
  templateUrl: 'demo13-list.html',
})
export class Demo13ListPage {
  detail=Demo13DetailPage
  myid=100
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo13ListPage');
  }
  jump(){
    this.navCtrl.push(Demo13DetailPage,{id:this.myid})
  }
}
