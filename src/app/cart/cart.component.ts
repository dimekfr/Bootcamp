import { Component,OnInit } from '@angular/core';
import { CartService } from '../core/service/cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;
  public totalDiscount : number = 0;
  

  constructor(private cartService : CartService){

  }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  deleteItem(item: any){
    this.cartService.deleteCartItem(item);
  }

  emptyCart(){
    this.cartService.deleteAllCart();
  }

  applyDiscount(promotionCode: string) {
    this.totalDiscount = this.cartService.getTotalDiscount(promotionCode);
    console.log(this.totalDiscount);
  }


}
