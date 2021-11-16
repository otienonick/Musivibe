import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required,Validators.minLength(6),],);
  hide = true;
  register:any;


  emailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
 
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  usernameErrorMessage(){
       if (this.username.hasError('required')) {
      return 'Username is required';
    }
    return this.username.hasError('username is reuired');

  }

  passwordErrorMessage(){
    if (this.password.hasError('required')) {
   return 'password is required';
 }

 return this.username.hasError('password is required');

}
passwordLengthErrorMessage(){
  if(this.password.hasError('minLength')){
    return 'password must be atleast six characters';
  
   }
   return this.username.hasError('password must be atleast six characters');

}

  constructor(private userService:UserService){}

  ngOnInit(){
    this.register = {
      username:'',
      password:'',
      email:''
    };

  }
  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        window.location.href = 'home.component.html'
      });

  }


}
