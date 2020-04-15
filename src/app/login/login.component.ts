import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../domain/user';
import {UserService} from '../services/user.service';
import {Expense} from '../domain/expense';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();
  username = '';
  password = '';
  invalidLogin = false;
  showLoginForm = false;
  userDuplicated = false;
  newUserSubmitted = false;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  checkLogin() {
    console.log('in checkLogin');

    let authorized = this.authService.authenticate(this.username, this.password);
    if (authorized) {
      console.log('validated');
      this.router.navigate(['']);
      this.invalidLogin = false;
    }
    else {
      console.log('not validated');
      this.invalidLogin = true;
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  createUser() {
    this.newUserSubmitted = true;
    if (this.isDuplicate(this.user.name))
      this.userDuplicated = true;
    else {
     // this.registerForm.controls['username'].valid && this.registerForm.controls['password'].valid;
      this.userService.save(this.user).subscribe();
      alert ("User created successfully! Click OK to move to login page.")
      setTimeout(() => {
        this.afterUserCreation();
      }, 2500);
    }
  }

  private isDuplicate(username: string) {
    console.log(this.authService.isUserDuplicated(username));
    return this.authService.isUserDuplicated(username);
  }

  private afterUserCreation() {
    this.userDuplicated = false;
    this.showLoginForm = false;
    this.invalidLogin = false;
    this.newUserSubmitted = false;
    this.registerForm.reset();
    this.authService.updateUsers();
    this.router.navigate(['/login']);
  }
}
