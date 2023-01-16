import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public products: any; 
  constructor (private api: ApiService, private cartService : CartService) {
    
  }

  ngOnInit() {
    of(this.api.getProduct())
    .subscribe(res => {this.products = res;

    this.products.forEach((a:any) => {
      Object.assign(a, {quantity:1, total:a.price});
      
    });
  })
  }
  addToCart(product: any){
    this.cartService.addtoCart(product)
  }
}
