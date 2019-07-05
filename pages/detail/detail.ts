import { LoginPage } from './../login/login';
import { CartPage } from './../cart/cart';
import { NotFoundPage } from './../not-found/not-found';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  list=[]
  mylist=[]
  myprice=0
  mytitle=""
  mysubtitle=""
  id=0
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('pid'))
    this.id=this.navParams.get('pid')
    var url="http://localhost:8080/product/detail?lid="+this.id;
    this.myhttp.get(url).subscribe((result:any)=>{
      console.log(result);
      this.myprice=result.details.price;
      this.mylist=result.details.picList;
      this.mytitle=result.details.title;
      this.mysubtitle=result.details.subtitle;
      this.list=result;
    })
  }
  jump(){
    this.navCtrl.push(NotFoundPage)
  }
  jump1(){
    this.navCtrl.push(CartPage)
  }
  jump2(){
    var url="http://localhost:8080/cart/add?buyCount=1&lid="+this.id
   this.myhttp.get(url,{withCredentials:true}).subscribe((result:any)=>{
     console.log(result)
     var msg="";
     if(result.code==300){
       msg="你未登录";
       this.navCtrl.push(LoginPage)
     }else if(result.code==200){
      msg="添加到购物车成功";
     }
     var mytoast=this.toast.create({
       message:msg,
       duration:3000
     });
     mytoast.present();
   })
  }
}
