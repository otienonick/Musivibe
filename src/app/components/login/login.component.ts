import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  username:FormControl
  password:FormControl
  errorMessage:string
  hide = true;
  error=false;
  invalidLogin:boolean
  notLogged=false




  constructor(private userService: UserService,
    private router: Router,
    private fb:FormBuilder,) { }

  ngOnInit() {
    this.username = new FormControl('',[Validators.required]);
    this.password = new FormControl('',[Validators.required]);

    this.loginForm = this.fb.group({
      username:this.username,
      password:this.password,
    });
  }

  loginUser(){
    let userLogin = this.loginForm.value;
    this.userService.login(userLogin.username,userLogin.password)
    .subscribe(result =>{
      this.invalidLogin = false;
      this.router.navigate(['/home'])
      console.log(userLogin.username)

    },error=>{
      this.notLogged = true
    })
  }



