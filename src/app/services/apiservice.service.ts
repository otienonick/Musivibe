import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  
 
  constructor(private httpclient:HttpClient) { }

 

  public getTracks():Observable<any>{
    let trackUrl='http://api.deezer.com/chart/0/tracks';
    return this.httpclient.get<any>(trackUrl);
  }
}
