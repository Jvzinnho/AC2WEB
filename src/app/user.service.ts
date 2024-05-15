import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<any[]>([]);
  users$ = this.users.asObservable();
  private idCounter = 1; 

  addUser(user: any) {
    user.id = this.idCounter++;
    this.users.next([...this.users.getValue(), user]);
  }

  removerUser(id: number) {
    let users = this.users.getValue();
    users = users.filter(user => user.id !== id);
    this.users.next(users);
  }

  getUserById(id: number) {
    const users = this.users.getValue();
    return users.find(user => user.id === id);
  }
  
updateUser(updatedUser: any) {
  console.log('Atualizando usuário:', updatedUser);
  
  let users = this.users.getValue();
  users = users.map(user => {
    if (user.id === updatedUser.id) {
      console.log('Usuário encontrado:', user);
      return updatedUser;
    } else {
      return user;
    }
  });
  
  console.log('Usuários após a atualização:', users);
  
  this.users.next(users);
}

}
