import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm = this.fb.group({
    id: [''], 
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    funcao: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  });

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = Number(this.route.snapshot.params['id']);
    const user = this.userService.getUserById(userId);
    this.userForm.patchValue(user); 
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userForm.value);
      this.router.navigate(['/app/users']);
    }
  }
}

