import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component'; 
import { CartComponent } from './cart/cart.component'; 
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './core/authentication/authentication.component'; 
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    AuthenticationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
