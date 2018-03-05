import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service'

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}`]
})
export class LoginComponent implements OnInit {
  

  public displayDashboardLink : boolean;
  public displayRegisterLink : boolean;
  public displayLoginLink: boolean;

  public displayLoginError : boolean;

  constructor(private _authService : AuthenticationService, private _router : Router){
    
  }

  ngOnInit() {

    this.displayDashboardLink = false;
    this.displayLoginLink = false;
    this.displayRegisterLink = true;

    this._authService.checkForUserSession().subscribe(response => {
      this._router.navigate(['/home'])
    },error => {

    })
    
  }


  onSubmit(value : any){
    console.log(value);

    var user = {
      email: value.email,
      password: value.password
    }

    this._authService.logIn(user).subscribe(response =>{
      console.log(response)
      this._router.navigate(['/dashboard'])
    },error =>{
      this.displayLoginError = true;
      console.log(error)
    })
  }



}
