import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo05',
  templateUrl: 'demo05.html',
})
export class Demo05Page {
  mylist=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo05Page');
    for(var i=0;i<50;i++){
      this.mylist.push("商品"+i)
    }
  }
  shuaxin(myrefresher){
    setTimeout(()=>{
      for(var i=0;i<5;i++){
        this.mylist.unshift("test");
      }
      myrefresher.complete();
    },2000)
  }
  shangla(id){
    setTimeout(()=>{
      for(var i=0;i<10;i++){
        this.mylist.push("你爹")
      }
      id.complete();
    },3000)
  }
}
