

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItems.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
    console.log(this.cartItems)
  }
  getTotalPrice() : number  {
    let grandTotal = 0;
    this.cartItems.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  getDiscount(discount : any) : number {
    let discountTotal = 0;
    if(discount == 'PROMO20') 
      discountTotal = this.getTotalPrice() - (this.getTotalPrice() * 0.20);
    if(discount == 'PROMO10')
      discountTotal = this.getTotalPrice() - (this.getTotalPrice() * 0.10);
    return discount;
  }


  deleteCartItem(product: any){
    this.cartItems.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItems.splice(index,1);
      }
    })
    this.productList.next(this.cartItems);
  }
  deleteAllCart(){
    this.cartItems = []
    this.productList.next(this.cartItems);
  }
}