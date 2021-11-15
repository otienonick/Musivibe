import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  login: any;
  error=false;


  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';

    } else if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return 'You must enter a value';
  }


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    };
  }

  loginUser() {
    this.userService.loginUser(this.login).subscribe(
      response => {
        console.log(response)
        window.location.href = 'home.component.html'
      },
      errorRespnose => { this.error = true }
    );

  }


}
