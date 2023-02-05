import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { AuthenticationService } from '../service/authentication.service'; 
import { of } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  
 

  constructor( private authentication: AuthenticationService){

  }

  ngOnInit(): void {
    
  }

}
