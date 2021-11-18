import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  isRegistrationInProcess:boolean = false;
  username:FormControl;
  email:FormControl;
  password:FormControl;
  errorList:string[]
  hide = true;


constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(){

    this.username = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]);
    this.email = new FormControl('',[Validators.required,Validators.email]);
    this.password = new FormControl('',[Validators.required,Validators.minLength(5)]);


    this.registerForm = this.fb.group({
      username:this.username,
      email:this.email,
      password:this.password,
    })

  }

  

  registerUser(){
    this.isRegistrationInProcess = true;

    let userDetails = this.registerForm.value;
    this.userService.register(userDetails.username,
      userDetails.email,
      userDetails.password).subscribe(result=>{
        this.router.navigate(['/login'])
      }

      );
  }


}
