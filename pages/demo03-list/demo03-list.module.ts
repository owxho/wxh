import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo03ListPage } from './demo03-list';

@NgModule({
  declarations: [
    Demo03ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo03ListPage),
  ],
})
export class Demo03ListPageModule {}
