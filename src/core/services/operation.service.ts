import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http/http.service';
import {Operation} from '../../modules/home/classes/Operation';
import {HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private operationsUrl: string;


  constructor(private httpService: HttpService) {
    this.operationsUrl = 'http://localhost:8080/operations';

  }

  public findAll(): Observable<Operation[]> {
    return this.httpService.http.get<Operation[]>(this.operationsUrl);
  }

  public save(operation: Operation) {
    return this.httpService.http.post<Operation>(this.operationsUrl, operation);
  }

  public getDetails(id: number): Observable<Operation>{
    console.log("getDetails() works");
    let url = this.operationsUrl+id;
    console.log(url);

    return this.httpService.http.get<Operation>(url);
  }

}
