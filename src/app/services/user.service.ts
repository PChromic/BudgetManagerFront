import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../domain/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Expense} from '../domain/expense';


@Injectable({providedIn: 'root'})
export class UserService {

  private url: string;
  users: User[];

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl + '/users';
 /*   this.findAll().subscribe(data => {
      this.users = data
    });*/
  }

  public findAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url);
  }

  public getById(id: number) {
    return this.http.get<User>(`${environment.baseUrl}/users/${id}`);
  }

  public save(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.url, user);
  }

  public update(user: User) {
    return this.http.put(`${environment.baseUrl}/users/${user.id}`, user);
  }

  public delete(id: number) {
    return this.http.delete<void>(`${environment.baseUrl}/users/${id}`);
  }
}
