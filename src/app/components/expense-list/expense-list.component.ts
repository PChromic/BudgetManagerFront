import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpenseType} from '../../domain/expense-type';
import {Expense} from '../../domain/expense';
import {ExpenseService} from '../../services/expense.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Operation} from '../../domain/operation';
import {ExpenseEditModalComponent} from './expense-edit-modal/expense-edit-modal.component';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  keys: any[];
  types = ExpenseType;
  selected: Expense;
  expenses$: Expense[];

  @ViewChild('editModal', {static:false}) expenseModal: ExpenseEditModalComponent;

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
}
