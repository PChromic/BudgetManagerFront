import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http/http.service';
import {Operation} from '../../modules/home/classes/Operation';
import {HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private operationsUrl: string;
  private selectedOperation : Operation;

  constructor(private httpService: HttpService) {
    this.operationsUrl = environment.baseUrl+'/operations';

  }

  public findAll(): Observable<Operation[]> {
    return this.httpService.http.get<Operation[]>(this.operationsUrl);
  }

  public save(operation: Operation) {
    return this.httpService.http.post<Operation>(this.operationsUrl, operation);
  }

  public getDetails(id: string): Observable<Operation>{
    console.log("getDetails() works");
    console.log(id);
    return this.httpService.http.get<Operation>(this.operationsUrl+`/${id}`)
  }


}
