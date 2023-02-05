import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { ApiService } from '../core/service/product.service'; 
import { CartService } from '../core/service/cart.service'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  public products: any; 
  public filterCategory : any;
  searchKey:string = "";
  constructor (private api: ApiService, private cartService : CartService) {
    
  }

  ngOnInit() {
    this.api.getProduct()
    .subscribe(res => {
      this.products = res;
      this.filterCategory = res;
      this.products.forEach((a:any) => {
      Object.assign(a, {quantity:1, total:a.price});
      
    }); 
    console.log(this.products)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addToCart(product: any){
    this.cartService.addtoCart(product)
  }

  filter(category:string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    });
    console.log(this.filterCategory);
    console.log(this.products);

  }
}