import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public products: any = [{"id":1, "name":"Brazil T-shirt" , "price": 80.67,   "image":"assets/camisa1.jpeg"}, {"id":2, "name":"Black and Red T-shirt" , "price": 56.79,   "image":"assets/camisa2.jpeg"}, {"id":3, "name":"Blue Jeans" , "price": 150.09, "Description":"Jeans", "image":"assets/jeans2.jpeg"}, {"id":4, "name":"Black Shoes" , "price": 190.80,   "image":"assets/sapato1.jpeg"},{"id":5, "name":"Brown Shoes" , "price": 220.00,   "image":"assets/sapato2.jpg"},{"id":6, "name":"Man Jeans" , "price": 106.50,   "image":"assets/jeans2.jpeg"}, {"id":7, "name":"Luxery Jeans" , "price": 200.00,   "image":"assets/jeans1.jpg"}, {"id":8, "name":"Mixte Sun Glass" , "price": 128.00,   "image":"assets/oculos.jpeg"}, {"id":9, "name":"USB key" , "price": 10.78,   "image":"assets/pendrive.jpg"}, {"id":10, "name":"Red Watch" , "price": 50.09,   "image":"assets/relogio2.jpg"}, {"id":11, "name":"Useery Watch" , "price": 200.09,   "image":"assets/relogio4.jpeg" }, {"id":12, "name":"Breiteling Watch" , "price": 100.05,   "image":"assets/relogio3.jpg" }];

  constructor() { }

  getProduct(){
    return this.products;
  }
}
