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
  private loggedUser: User;

  constructor(private userService: UserService) {
    console.log('Initialized auth service');
    this.userService.findAll()
      .subscribe(data => {
          this.users = data;
        },
        err => console.error(err),
        () => console.log('done loading users'));
  }

  ngOnInit() {

  }

  public authenticate(username, password) {
    if (this.filterUsers(username, password)) {
      console.log('validated');
      return true;
    }
    return false;
  }

  private filterUsers(username, password) {
    console.log('in filterUsers');
    console.log(this.users.find(user => {
      return user.name === username;
    }));

    if (this.users.find(user => {
      return user.name === username;
    })) {

      this.loggedUser = this.users.find(user => {
        return user.name === username;
      });
      sessionStorage.setItem('name', username);
      console.log(sessionStorage.length);
      return this.loggedUser.password === password;
      //return true;
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
    console.log(sessionStorage.length);
  }
}
