import { LoginPage } from './../login/login';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  mylist=[]//成功获取到的购物车列表
  isAllSelected=false//记录的是否选中了全选
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp: HttpClient ) {
  }

  ionViewDidLoad() {
    this.navParams.get("pid")
  }
  ionViewWillEnter(){
    var url="http://localhost:8080/cart/list"
    this.myhttp.get(url,{withCredentials:true}).subscribe((result:any)=>{
      console.log(result)
      if(result.code==300){
        this.navCtrl.push(LoginPage)
      }else if(result.code==200){
        console.log('购物车列表获取成功',result)
        this.mylist=result.data
        for(var i=0;i<this.mylist.length;i++){
          this.mylist[i].isSelected=false
        }
      }
    })
  }
  // 复选框选中事件
  operateAll(){
    for(var i=0;i<this.mylist.length;i++){
      this.mylist[i].isSelected=this.isAllSelected
    }
  }
  check(){
    var result=true
    // 遍历购物车
    for(var i=0;i<this.mylist.length;i++){
      result=result&&this.mylist[i].isSelected
    }
    this.isAllSelected=result
  }
  //计算被选中的总价格
  calcAll(){
    var totalprice=0
    for(var i=0;i<this.mylist.length;i++){
      if(this.mylist[i].isSelected){
        //单价*数量
        totalprice+=(this.mylist[i].price*this.mylist[i].count)
      }
    }
    return totalprice
  }
}
 