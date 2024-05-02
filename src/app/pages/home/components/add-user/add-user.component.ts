import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userForm = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    funcao: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/app/users']);
    }
  }
}
