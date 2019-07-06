import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Demo14SubmitPage } from '../demo14-submit/demo14-submit';

/**
 * Generated class for the Demo14CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo14-cart',
  templateUrl: 'demo14-cart.html',
})
export class Demo14CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo14CartPage');
  }
  jump(){
    this.navCtrl.push(Demo14SubmitPage,{id:500})
  }
}
