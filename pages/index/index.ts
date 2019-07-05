import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import { DetailPage } from '../detail/detail';


/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  clist=[]
  list=[]
  nlist=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url="http://localhost:8080/index"
    this.myhttp.get(url).subscribe((result:any)=>{
      console.log(result)//是一个对象
     this.clist= result.carouselItems;
     this.list=result.newArrialItems;
     this.nlist=result.recommendedItems;
    })
  }
  // 跳转detail详情页
  jump(pid){
    this.navCtrl.push(DetailPage,{pid})
  }
}
