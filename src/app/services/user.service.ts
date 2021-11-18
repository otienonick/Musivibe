import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {  BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Register } from '../interfaces/register';
import { Login } from '../interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  baseUrl ='https://musivibe-userauth-backend.herokuapp.com/api'

  httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  })
  registerModel:Register


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  register(username:string,email:string,password:string)
  {
    this.registerModel = {
      username:username,
      email:email,
      password:password

    }
    
    return this.http.post<any>(this.baseUrl + '/register/',this.registerModel,{
      headers:this.httpHeaders

    }).pipe(map((result)=>{
      return result

    }
  ))
  }



  loginModel:Login

  login(username:string,password:string){
    this.loginModel = {
      username : username,
      password :password,

    }
    return this.http.post<any>(this.baseUrl + '/login/',{username,password},{
      headers:this.httpHeaders
    }).pipe(map(result=>{
      return result;
    }))

 
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}