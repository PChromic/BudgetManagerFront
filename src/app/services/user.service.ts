import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../domain/user';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UserService {

  private url: string;
  users: User[];
  errorList;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl + '/users';
    /*   this.findAll().subscribe(data => {
         this.users = data
       });*/
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public getById(id: number) {
    return this.http.get<User>(`${environment.baseUrl}/users/${id}`);
  }

  public save(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.url, user)
      .pipe(catchError(this.handleError));
  }

  public update(user: User) {
    return this.http.put(`${environment.baseUrl}/users/${user.id}`, user);
  }

  public delete(id: number) {
    return this.http.delete<void>(`${environment.baseUrl}/users/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message)
    return throwError(error)
  }
}
