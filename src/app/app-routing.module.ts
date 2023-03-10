import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path: 'login', component: AuthenticationComponent},
  {path:'cart', component: CartComponent},
  {path:'products', component: ProductsComponent},
  {path:'', redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }