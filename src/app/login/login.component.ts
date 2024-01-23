import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  constructor(private router: Router) {}

  login(): void {
    // Check username and password
    if (this.username === 'abc' && this.password === 'abc') {
      // Redirect to another page or perform actions upon successful login
      console.log('Login successful!');
      this.router.navigate(["/home"]);
      this.loginFailed = false;
     
    } else {
      // Display error message if login fails
      console.log('Login failed!');
      this.loginFailed = true;
    }
  }

}
