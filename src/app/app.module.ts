import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallnewsComponent } from './viewallnews/viewallnews.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

const myroutes =[
  {path:"",component:NewsComponent},
  {path:"n",component:ViewallnewsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    ViewallnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
