import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/model/address.model';
import { User } from 'src/app/shared/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baserURL = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { 

  }

  getUsers(user: User): Observable<any> {
    console.log('getUser'+this.baserURL+'users');
    return this.http.get<User[]>(this.baserURL+'users')
  }

  createUser(user: User): Observable<any> {
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baserURL+'users', body, {'headers':headers})
  }

  getUserbyId(id:number) :Observable<any> {
    console.log('getUserBuId'+ this.baserURL + 'users/' + id);
    return this.http.get<User>(this.baserURL + 'users/' + id);
  }

  deleteUser(id: number): Observable <any> {
    return this.http.delete<User>(this.baserURL+ 'users/' + id);
  }

  updateUser(id: number, user: User) : Observable<any> {
    return this.http.put<User>(this.baserURL + 'users/' + id, JSON.stringify(user), this.httpOptions);
  }

}
