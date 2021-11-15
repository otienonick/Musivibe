import { UserService } from './../../services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  currentUser: null;
  selected = 'option2';  

  constructor(private userService:UserService, private router: Router) { 
    this.userService.currentUser.subscribe(x => this.currentUser = x);

  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit(){

  }

}
