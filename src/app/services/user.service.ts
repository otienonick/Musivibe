import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {  BehaviorSubject,Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedin: boolean = false;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  registerNewUser(userData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/users/',userData);
  }

  loginUser(userData:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/',userData);
  }

  
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }



}
