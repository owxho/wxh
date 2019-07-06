import { Demo04LianxiPage } from './../demo04-lianxi/demo04-lianxi';
import { Demo03ListPage } from './../demo03-list/demo03-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Demo05Page } from '../demo05/demo05';

/**
 * Generated class for the Demo12TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo12-tabs',
  templateUrl: 'demo12-tabs.html',
})
export class Demo12TabsPage {
  tabhome=Demo03ListPage
  tabcart=Demo04LianxiPage
  tabperson=Demo05Page
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo12TabsPage');
  }

}
