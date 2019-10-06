import {Component, EventEmitter, OnInit, Output, ViewChild,} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ExpenseService} from '../../../../core/services/expense.service';
import {Expense} from '../../classes/expense';
import {ExpenseType} from '../../classes/expense-type';

@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.css']
})
export class ExpenseEditorComponent implements OnInit {

  @ViewChild('exForm', {static: false}) exForm : NgForm;
  keys: any[];
  types = ExpenseType;
  expense : Expense = new Expense();
  expenseCreated: boolean = false;

  @Output()
  expenseEmitter: EventEmitter<any> = new EventEmitter<void>();


  constructor(private service: ExpenseService) {
    this.keys = Object.keys(this.types).filter(String);

  }

  ngOnInit() {
  }

  onSubmit() {
    this.exForm.reset();
    this.expenseCreated = true;
    this.service.save(this.expense)
      .subscribe(
      (data: Expense) =>
        console.log(data)
    );
  }

  onBack() {
    this.expenseCreated = false;
  }


}
