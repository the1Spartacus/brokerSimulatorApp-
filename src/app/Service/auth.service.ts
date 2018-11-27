import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceResponse } from '../model/ServiceReposnse';
import { Guid } from 'guid-typescript';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
token: string;
 httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };

login(username: string, password: string, appClientId: string): Observable<ServiceResponse> {
  return this.http.post<ServiceResponse>('https://dev-platform.investsure.info/dev/authenticate',
  {'Username': username, 'Password': password, 'AppClientId': appClientId}, this.httpOptions);
}

getToken() {
  return localStorage.getItem('access_token');
}

logout() {
    localStorage.removeItem('access_token');
    console.log('just logged you out');
  }

  loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  generateGuid() {
       return Guid.create().toString();
  }
}
