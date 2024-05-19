import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../user.service';
 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users$ = this.userService.users$;
  
  constructor(private router: Router, private userService: UserService) {}

  novoUser(){
    this.router.navigate(['/app/add-user']);
  }

  editarUser(user: any){
    this.router.navigate(['/app/edit-user', user.id]);
    
  }
  
  removerUser(user: any){
    this.userService.removerUser(user.id);
  }
  
}
