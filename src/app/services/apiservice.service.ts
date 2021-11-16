import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  private authorizationKey='Bearer BQBlDbiczqm7eJE0fT16YlOrWcTsppyFjOHiVSgdUoZMVEowGFlzG5MOsVoCjgg5WQ0lQKUtuAlOyPH64htsXnC8pVStgmCciMpU0DbJCjTCqnj0JePgzFXGjLReAAY1NCMDkFbrDygWi6Z9-sSC6k0QZd_wL3w';
 
  private httpOptions={
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'this.authorizationKey'
    })
  };
  constructor(private httpclient:HttpClient) { }

 

  public getallTracks():Observable<any>{
    let trackUrl='https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF';
    return this.httpclient.get(trackUrl,this.httpOptions);
  }
}
