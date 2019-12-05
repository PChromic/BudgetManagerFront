import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Operation} from '../domain/operation';


@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private operationsUrl: string;

  constructor(private http: HttpClient) {
    this.operationsUrl = environment.baseUrl+'/operations';

  }

  public findAll(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationsUrl);
  }

  public save(operation: Operation) {
    return this.http.post<Operation>(this.operationsUrl, operation);
  }

  public getDetails(id: string): Observable<Operation>{
    console.log("getDetails() works");
    console.log(id);
    return this.http.get<Operation>(this.operationsUrl+`/${id}`)
  }

  public getColor(operationClass: string) {
    if (operationClass === 'DEBIT')
      return 'red';
    return 'green';
  }

}