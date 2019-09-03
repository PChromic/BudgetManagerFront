import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpenseService} from '../../../../core/services/expense.service';
import {Expense} from '../../classes/expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses$: Expense[];

  constructor(
    private route: ActivatedRoute,
    private service: ExpenseService) {
  }

  ngOnInit() {
    this.service.findAll()
    .subscribe(data => {
        this.expenses$ = data;
      },
      err => console.error(err),
      () => console.log('done loading expenses'));
  }

}
