import {Component, EventEmitter, OnInit, Output, ViewChild,} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExpenseType} from '../../domain/expense-type';
import {Expense} from '../../domain/expense';
import {ExpenseService} from '../../services/expense.service';


@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.css']
})
export class ExpenseEditorComponent implements OnInit {

  @ViewChild('exForm', {static: false}) exForm : NgForm;
  keys: any[];
  keyCount: number = 0;
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
    this.expenseCreated = true;
    this.service.save(this.expense)
      .subscribe(
      (data: Expense) =>
        console.log(data)
    );
    this.exForm.reset();
  }

  onBack() {
    this.expenseCreated = false;
  }

  onDescription(event: any) {
    this.keyCount = event.target.value.length;
    console.log(this.keyCount)
  }

}
