import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo09LoginPage } from './demo09-login';

@NgModule({
  declarations: [
    Demo09LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo09LoginPage),
  ],
})
export class Demo09LoginPageModule {}
