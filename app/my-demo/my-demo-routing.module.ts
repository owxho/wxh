import { LoginGuardService } from '../login-guard.service';

import { Demo18OutboxComponent } from './../demo18-outbox/demo18-outbox.component';
import { Demo18MailComponent } from './../demo18-mail/demo18-mail.component';
import { Demo17ListComponent } from './../demo17-list/demo17-list.component';
import { Demo17CheckComponent } from './../demo17-check/demo17-check.component';
import { Demo16ListComponent } from './../demo16-list/demo16-list.component';
import { Demo16DetailComponent } from './../demo16-detail/demo16-detail.component';
import { Demo15RegisterComponent } from './../demo15-register/demo15-register.component';
import { Demo15LoginComponent } from './../demo15-login/demo15-login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo18InboxComponent } from '../demo18-inbox/demo18-inbox.component';



const routes: Routes = [
  {path:'',component:Demo15LoginComponent},
  {path:'register',component:Demo15RegisterComponent},
  {path:'detail/:index',component:Demo16DetailComponent},
  {path:'list',component:Demo16ListComponent},
  {path:'check',component:Demo17CheckComponent},
  {path:'list1/:id',component:Demo17ListComponent},
  {path:'mail',component: Demo18MailComponent,canActivate:[LoginGuardService],children:[
    {path:'',component:Demo18InboxComponent},
    {path:'outbox',component:Demo18OutboxComponent},
    {path:'inbox',component:Demo18InboxComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyDemoRoutingModule { }
