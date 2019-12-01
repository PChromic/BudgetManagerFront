import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpenseType} from '../../domain/expense-type';
import {Expense} from '../../domain/expense';
import {ExpenseService} from '../../services/expense.service';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  keys: any[];
  types = ExpenseType;
  expenses$: Expense[];
  detailShown: boolean = false;
   //expenses$: any;
  constructor(
    private route: ActivatedRoute,
    private service: ExpenseService) {
    this.keys = Object.keys(this.types).filter(String);
  }

  ngOnInit() {
    this.service.findAll()
    .subscribe(data => {
        this.expenses$ = data;
       },
      err => console.error(err),
      () => console.log('done loading expenses'));

  }

  showDetail()  {
    this.detailShown = !this.detailShown;
    if (this.detailShown)
    console.log("Detail shown");
    else
    console.log("Detail hidden");

  }

}
