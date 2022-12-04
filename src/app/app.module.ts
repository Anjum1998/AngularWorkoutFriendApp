import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
  {
    path:"",
    component:ViewFriendComponent

  },
  {
    path:"add",
    component:AddFriendComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewFriendComponent,
    AddFriendComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
