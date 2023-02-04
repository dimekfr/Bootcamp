import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './home/products.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';

const routes: Routes = [
  {path: 'login', component: AuthenticationComponent},
  {path:'cart', component: CartComponent},
  {path:'products', component: ProductsComponent},
  {path:'products/details/:id', component: ProductDetailsComponent},
  {path:'', redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }