import { Component } from '@angular/core';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'registration-comp',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthenticationService],
  styles: [`input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}`]
})
export class RegistrationComponent {

  public emailExistsError : boolean;
  constructor(private _authService: AuthenticationService) {

  }

  onSubmit(value: any) {
    console.log(value)

    const user = {
      name: value.name,
      email: value.email,
      phone: parseInt(value.phone),
      password: value.password
    }

    console.log(user);

    this._authService.registerUser(user).subscribe(response => {
      console.log(response);
    }, error => {
      this.emailExistsError = true;
      console.log(error)
    })

  }

}
