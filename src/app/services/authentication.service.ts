import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string;
  private users: User[];

  constructor(private userService: UserService) {
    this.users = this.userService.users;
  }

  authenticate(username, password) {

    if (this.filterUsers)
      return true;
    return false;
  }

  filterUsers(username, password) {
    if (this.users.filter(user =>
          user.name.toLocaleLowerCase().indexOf(username.toLowerCase()) !== -1)) {

      sessionStorage.setItem('name', username);
      return true;
    }
    else
      return false;
  }

  /*
  authenticate(username, password) {
    if (username === 'javainuse' && password === 'password') {
      sessionStorage.setItem('name', username);
      return true;
    } else {
      return false;
    }
  }*/

  isUserLoggedIn() {
    let user = sessionStorage.getItem('name');
    // console.log(!(user === null))
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('name');
  }
}
