import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {MyDemoRoutingModule} from './my-demo/my-demo-routing.module'

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02LianxiComponent } from './demo02-lianxi/demo02-lianxi.component';
import { Demo03DirectiveComponent } from './demo03-directive/demo03-directive.component';
import { Demo04DirComponent } from './demo04-dir/demo04-dir.component';
import { Demo05CartComponent } from './demo05-cart/demo05-cart.component';
import { Demo05HeaderComponent } from './demo05-header/demo05-header.component';
import { Demo06ModelComponent } from './demo06-model/demo06-model.component';
import { Demo07LianxiComponent } from './demo07-lianxi/demo07-lianxi.component';
import { Demo08PipeComponent } from './demo08-pipe/demo08-pipe.component';
import { OrderPipe } from './order.pipe';
import { SexPipe } from './sex.pipe';
import { Demo09ServiceComponent } from './demo09-service/demo09-service.component';
import { Demo10OrdComponent } from './demo10-ord/demo10-ord.component';
import { Demo10ListComponent } from './demo10-list/demo10-list.component';
import { Demo11CartComponent } from './demo11-cart/demo11-cart.component';
import { Demo11HeaderComponent } from './demo11-header/demo11-header.component';
import { Demo12ItemComponent } from './demo12-item/demo12-item.component';
import { Demo12ListComponent } from './demo12-list/demo12-list.component';
import { Demo13HttpComponent } from './demo13-http/demo13-http.component';
import { Demo14LianxiComponent } from './demo14-lianxi/demo14-lianxi.component';
import { Demo15LoginComponent } from './demo15-login/demo15-login.component';
import { Demo15RegisterComponent } from './demo15-register/demo15-register.component';
import { Demo16ListComponent } from './demo16-list/demo16-list.component';
import { Demo16DetailComponent } from './demo16-detail/demo16-detail.component';
import { Demo17ListComponent } from './demo17-list/demo17-list.component';
import { Demo17CheckComponent } from './demo17-check/demo17-check.component';
import { Demo18MailComponent } from './demo18-mail/demo18-mail.component';
import { Demo18InboxComponent } from './demo18-inbox/demo18-inbox.component';
import { Demo18OutboxComponent } from './demo18-outbox/demo18-outbox.component';
@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02LianxiComponent,
    Demo03DirectiveComponent,
    Demo04DirComponent,
    Demo05CartComponent,
    Demo05HeaderComponent,
    Demo06ModelComponent,
    Demo07LianxiComponent,
    Demo08PipeComponent,
    OrderPipe,
    SexPipe,
    Demo09ServiceComponent,
    Demo10OrdComponent,
    Demo10ListComponent,
    Demo11CartComponent,
    Demo11HeaderComponent,
    Demo12ItemComponent,
    Demo12ListComponent,
    Demo13HttpComponent,
    Demo14LianxiComponent,
    Demo15LoginComponent,
    Demo15RegisterComponent,
    Demo16ListComponent,
    Demo16DetailComponent,
    Demo17ListComponent,
    Demo17CheckComponent,
    Demo18MailComponent,
    Demo18InboxComponent,
    Demo18OutboxComponent
  ],
  imports: [
    MyDemoRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
