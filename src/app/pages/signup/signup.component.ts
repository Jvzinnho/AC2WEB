import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';
  passwordConfirmation = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.name && this.email && this.password && this.passwordConfirmation) {
      console.log("New user added with success!")
      console.log({name: this.name, email: this.email, password: this.password, passwordConfirmation: this.passwordConfirmation});
  
     
      this.router.navigate(['/app']);
    }
  }
  
}
