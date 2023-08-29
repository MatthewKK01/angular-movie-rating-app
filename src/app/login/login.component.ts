import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = ""
  password = ""
  errorMsg = ""
  constructor(private auth: AuthService, private router: Router) { }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username Is Required" // check username length
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "Password Is Required"  // check if password length is more than 0
    } else {
      this.errorMsg = ""
      let res = this.auth.authenticate(this.username, this.password); // imports authenticate funtion from service and bind it to auth service also gives arguments 
      if (res === 200) {
        this.router.navigate(["home"]) // if res === 200 given in authenticate function continues login
      }
      if (res === 403) {
        this.errorMsg = "Invalid Credentials" // if res === 403 given in authenticate service error message will be like ...
      }
    }
  }

}
