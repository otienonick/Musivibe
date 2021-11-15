import { UserService } from 'src/app/services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    @Output() sidenavClose = new EventEmitter();
    // isAuthenticated: boolean;

  
  constructor() { }

  ngOnInit(): void {
  }
  onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  // isLoggedIn() {
  //   this.isAuthenticated = this.userService.isLoggedIn();
  //   return this.isAuthenticated;
  // }

}
