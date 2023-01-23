import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public users: any = [
    new User(1,'dimekfr@yahoo.fr', '12345'),
    new User(2, 'daddy@gmail.com', '2345'),
    new User(3, 'faire@hotmail.com', 'abcde')
    ];

  constructor() { }

  getUsers(){
    return this.users;
  }
}
