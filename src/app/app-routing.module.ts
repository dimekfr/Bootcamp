import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './home/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { SignUpComponent } from './core/authentication/sing-up/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'authentication', component: AuthenticationComponent},
  {path:'cart', component: CartComponent},
  {path:'products', component: ProductsComponent},
  {path:'products/details/:id', component: ProductDetailsComponent},
  {path:'authentication/signup', component: SignUpComponent},
  {path:'', redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }