import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject, tap, map} from 'rxjs';
import jwtDecode from 'jwt-decode';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient) { }
  userData = new BehaviorSubject(null);
  token:any = localStorage.getItem('userToken');

  getProfileData(){
    return this._HttpClient.get('http://135.181.95.148:1000/api/Account/GetMyProfile')
  }

  register(dataForm:any)
  {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Students/Add',dataForm)
  }

  login(loginForm:any):Observable<any> {
    let params = new HttpParams({fromObject: loginForm});
    return this._HttpClient.post(`http://135.181.95.148:1000/Token`, params.toString())
  }
}

