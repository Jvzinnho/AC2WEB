import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<any[]>([]);
  users$ = this.users.asObservable();

  addUser(user: any) {
    this.users.next([...this.users.getValue(), user]);
  }
}
