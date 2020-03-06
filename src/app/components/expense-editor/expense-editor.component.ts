import {Component, EventEmitter, OnInit, Output, ViewChild,} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExpenseType} from '../../domain/expense-type';
import {Expense} from '../../domain/expense';
import {ExpenseService} from '../../services/expense.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.css']
})
export class ExpenseEditorComponent implements OnInit {

  @ViewChild('exForm', {static: false}) exForm : NgForm;

  keyCount: number = 0;
  keys = Object.keys;
  types = ExpenseType;
  expense : Expense = new Expense();
  expenseCreated: boolean = false;

  @Output()
  expenseEmitter: EventEmitter<any> = new EventEmitter<void>();


  constructor(private service: ExpenseService, private router: Router) {

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
    setTimeout(() => {
      this.router.navigate(["/expenses"]);
    }, 4000);
  }

  onBack() {
    this.expenseCreated = false;
  }

  onDescription(event: any) {
    this.keyCount = event.target.value.length;
    console.log(this.keyCount)
  }

}
