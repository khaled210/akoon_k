import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject, tap, map} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient) { }

  register(dataForm:any)
  {
    return this._HttpClient.post('http://135.181.95.148:1000/api/Students/Add',dataForm)
  }

  // login(loginForm:any)
  // {
  //   return this._HttpClient.post('http://135.181.95.148:1000/Token',loginForm)
  // }



  login(loginForm:any) {

    let params = new HttpParams({fromObject: loginForm});

    return this._HttpClient.post(`http://135.181.95.148:1000/Token`, params.toString()).subscribe((res)=>{
      console.log("sjvbdkvhbdkvb", res);
    })
  }
}



// .pipe(map((res: any) => {
//   const user = res;
//   localStorage.setItem('token', user.token);
// })
// )
