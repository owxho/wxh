import { NotFoundPage } from './../not-found/not-found';
import { UserCenterPage } from './../user-center/user-center';
import { CartPage } from './../cart/cart';
import { IndexPage } from './../index/index';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  index1=IndexPage
  cart1=CartPage
  user=UserCenterPage
  not=NotFoundPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
