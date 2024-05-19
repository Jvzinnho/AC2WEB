import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = new BehaviorSubject<any[]>([]);
  functions$ = new BehaviorSubject<any[]>([]);

  addUser(user: any) {
    const users = this.users$.getValue();
    users.push(user);
    this.users$.next(users);

  
    const functions = this.functions$.getValue();
    const functionIndex = functions.findIndex(f => f.name === user.function);
    if (functionIndex !== -1) {
      
      functions[functionIndex].count += 1;
    } else {
      
      functions.push({ name: user.function, count: 1 });
    }
    this.functions$.next(functions);
  }

  removerUser(id: number) {
    let users = this.users$.getValue();
    users = users.filter(user => user.id !== id);
    this.users$.next(users);
  }

  getUserById(id: number) {
    const users = this.users$.getValue();
    return users.find(user => user.id === id);
  }
  
  updateUser(updatedUser: any) {
    console.log('Atualizando usuário:', updatedUser);
  
    let users = this.users$.getValue();
    users = users.map(user => {
      if (user.id === updatedUser.id) {
        console.log('Usuário encontrado:', user);
        return updatedUser;
      } else {
        return user;
      }
    });
  
    console.log('Usuários após a atualização:', users);
  
    this.users$.next(users);
  }
}
