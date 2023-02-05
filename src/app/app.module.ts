import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component'; 
import { CartComponent } from './cart/cart.component'; 
import { ProductsComponent } from './home/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './core/authentication/authentication.component'; 
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { filter } from 'rxjs';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { SignUpComponent } from './core/authentication/sing-up/sign-up/sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    AuthenticationComponent,
    FooterComponent,
    FilterPipe,
    ProductDetailsComponent,
    SignUpComponent,
    CheckoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
