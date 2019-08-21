import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class Operation implements OnInit {

  id : number;
  operationDate : string;
  operationClass : string;
  transactionType : string;
  amount : number;
  currency : string;
  endingBalance : number;
  description : string;

  constructor() { }

  ngOnInit() {
  }

}
