import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  private authorizationKey='Bearer BQCZq9ISPd6lvlNoa7bYsURPdsVmRb0j8rnZMb6y3OjlzgF7KemznhBAPZ8fOyZte-e-myjabLtTTDkSYVZ2MrasexyclbyL8D5OwqDYFAGVEyU5Q0gtaot4A9PV7A8yab1rFw1EN500-2-XV-rEyoeVd8iDC1w';
 
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
}
