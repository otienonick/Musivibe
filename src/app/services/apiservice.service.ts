import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  private authorizationKey='Bearer ';
 
  private httpOptions={
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'this.authorizationKey'
    })
  };
  constructor(private httpclient:HttpClient) { }

 

  public getallTracks():Observable<any>{
    let trackUrl='https://corsanywhere.herokuapp.com/http://api.deezer.com/chart/0/tracks';
    return this.httpclient.get(trackUrl);
  }

  public getallGenre():Observable<any>{
    let genreUrl='https://corsanywhere.herokuapp.com/https://api.deezer.com/genre/';
    return this.httpclient.get(genreUrl);
  }
}
