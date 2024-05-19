import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users: any[] = [];
  function: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.users$.subscribe((users) => {
      this.users = users;
    });

    this.userService.functions$.subscribe((functions) => {
      this.function = functions;
    });
  }
}

