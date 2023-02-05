import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: any;
  public products: any;
  public id: number | undefined;

  constructor(private apiService: ApiService, private cartService: CartService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.apiService.getProduct()
    .subscribe(res => {
      this.product = res.find((item: any) => item.id === this.id);
      console.log('the product is = ');
      console.log(this.product);
      console.log('the id is : ' + this.id)
    });
  }

  addToCart(product: any){
    this.cartService.addtoCart(product);
    console.log(this,)
  }
}
