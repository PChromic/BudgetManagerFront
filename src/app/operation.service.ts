import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Operation} from './components/operation/operation.component';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private operationsUrl: string;
  private fileUrl: string;
  private filePath: string;


  constructor(private http: HttpClient) {
    this.operationsUrl = 'http://localhost:8080/operations';
    this.fileUrl = 'http://localhost:8080/file';
  }
  public findAll(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationsUrl);
  }

  public save(operation: Operation) {
    return this.http.post<Operation>(this.operationsUrl, operation);
  }

  public openFile(filePath: string) {
    console.log("openFile() works");
    let url = this.fileUrl + "/open";
    const params = new HttpParams()
      .set('path', filePath);

    this.http.get(url,{params}).subscribe();

  }

  public readFile() {
    console.log("readFile() works");
    let url = this.fileUrl+"/read";
    this.http.get(url).subscribe();
  }

}
