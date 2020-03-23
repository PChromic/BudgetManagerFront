import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../domain/user';
import {UserService} from '../services/user.service';
import {Expense} from '../domain/expense';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  username = 'javainuse';
  password = '';
  invalidLogin = false;
  showForm = false;
  //test
  testUsers: User[];

  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }

  createUser() {
    this.userService.save(this.user).subscribe();

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 4000);
    this.showForm = false;
  }

}
