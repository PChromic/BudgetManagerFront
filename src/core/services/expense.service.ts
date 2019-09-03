import {Injectable} from '@angular/core';
import {Operation} from '../../modules/home/classes/operation';
import {HttpService} from '../http/http.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Expense} from '../../modules/home/classes/expense';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private url: string;

  constructor(private httpService: HttpService) {
    this.url = environment.baseUrl + '/expenses';

  }

  public findAll(): Observable<Expense[]> {
    return this.httpService.http.get<Expense[]>(this.url);
  }

  public save(expense: Expense): Observable<Expense> {
    console.log("posting new expense");
    console.log(expense.id);
    return <Observable<Expense>>this.httpService.http.post<Expense>(this.url, expense, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public getDetails(id: string): Observable<Expense> {
    console.log('getDetails() works');
    console.log(id);
    return this.httpService.http.get<Expense>(this.url + `/${id}`);
  }


}
