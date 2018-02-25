import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [ AuthenticationService]
})
export class DashboardComponent implements OnInit {
  private user : any;
  constructor(private _authService : AuthenticationService){

  }

  ngOnInit(){
    this._authService.getUserData().subscribe(response =>{
      console.log(response)
      this.user = response.userData;
    },error =>{
      console.log(error)
    })
  }

  logOut(){
    console.log("Log out clicked");
    this._authService.logOut().subscribe(response => {
      console.log(response);
      this.user = null;
    },error => {
      console.log(error);  
    })
  }

}
