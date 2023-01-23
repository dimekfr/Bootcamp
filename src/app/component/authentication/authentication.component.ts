import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public users: any; 
  user = new User();
  isLogged: boolean = false;

  constructor( private authentication: AuthenticationService){

  }

  
  ngOnInit(): void {
    of(this.authentication.getUsers()).subscribe(res => {this.users = res;})
  }

  

  iSaValideUser(user: User): boolean{
    return false;
  }

  login(user: User){
    if(this.iSaValideUser(user))
      this.user.logged = true;
  }

  logout(user: User) {
    this.user.logged = false;
  }

}
