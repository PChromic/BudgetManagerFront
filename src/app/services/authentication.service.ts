import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string;
  private users: User[];
  private userExists: User;

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

  public authenticate(username, password): boolean {
    this.updateUsers();
    if (this.filterUsers(username, password)) {
      console.log('validated');
      return true;
    }
    return false;
  }

  private filterUsers(username, password) {
    console.log('in filterUsers');
    this.userExists = this.users.find(user => {
      return user.name === username;
    });

    if (this.userExists) {
      let passwordMatch = this.userExists.password === password;

      if (passwordMatch) {
        console.log(sessionStorage.length);
        sessionStorage.setItem('name', username);
        return true;
      }
      else
        return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('name');
    // console.log(!(user === null))
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('name');
    console.log(sessionStorage.length);
  }

  isUserDuplicated(username: string) {
    if (this.users.find(user => {
      return user.name === username;
    }))
      return true;
    return false;
  }

  updateUsers() {
    this.userService.findAll()
      .subscribe(data => {
          this.users = data;
        },
        err => console.error(err),
        () => console.log('done loading users'));
  }
}
