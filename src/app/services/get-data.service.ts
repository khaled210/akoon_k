import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _HttpClient:HttpClient) { }

  getAll():Observable<any>
  {
    return this._HttpClient.get('http://135.181.95.148:1000/api/Articles/GetAll')
  }
}
