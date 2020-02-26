import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Expense} from '../domain/expense';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl + '/expenses';

  }

  public findAll(): Observable<Expense[]> {
    return this.http
      .get<Expense[]>(this.url);
  }

  public findOne(id: string): Observable<Expense> {
    return this.http
      .get<Expense>(this.url + `/${id}`);
  }

  public save(expense: Expense): Observable<Expense> {
    console.log('posting new expense');
    console.log(expense);
    return this.http.post<Expense>(this.url, expense);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);

  }
  public delete(id: number){
    console.log('removing expense');
    console.log(this.url+`/${id}`);
    return this.http.delete(this.url+`/${id}`);
  }
  public getDetails(id: string): Observable<Expense> {
    console.log('getDetails() works');
    console.log(id);
    return this.http.get<Expense>(this.url + `/${id}`);
  }


}
