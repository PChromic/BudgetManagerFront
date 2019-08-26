import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //public http: HttpClient;

  constructor(public http: HttpClient) {
  }

}
