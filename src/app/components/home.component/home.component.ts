import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

import { User } from './../../models/user.model';

@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _user : User;

  public displayDashboardLink : boolean;
  public displayRegisterLink : boolean;
  public displayLoginLink: boolean; 

  constructor(private _authService: AuthenticationService) {

  }

  ngOnInit() {
    this._authService.checkForUserSession().subscribe(response => {
      this.getUserData();
      this.displayLoginLink = false;
      this.displayRegisterLink = false;
      this.displayDashboardLink = true;
    },error => {
      this.displayLoginLink = true;
      this.displayRegisterLink = true;
      this.displayDashboardLink = false;
    })
  }

  getUserData(){
    this._authService.getUserData().subscribe(user =>{
      this._user = user;
    },
    error =>{

    })
  }



}
