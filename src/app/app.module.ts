import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndianComponent } from './components/indian/indian.component';
import { ChiniseComponent } from './components/chinise/chinise.component';
import { RussianComponent } from './components/russian/russian.component';
import { DesiComponent } from './components/desi/desi.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ModelComponent } from './components/model/model.component';
import { Model1Component } from './components/model1/model1.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    IndianComponent,
    ChiniseComponent,
    RussianComponent,
    DesiComponent,
    IndexComponent,
    FooterComponent,
    CustomerComponent,
    ModelComponent,
    Model1Component,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
