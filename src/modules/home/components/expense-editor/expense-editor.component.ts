import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ExpenseService} from '../../../../core/services/expense.service';
import {Expense} from '../../classes/expense';

@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.css']
})
export class ExpenseEditorComponent implements OnInit {

  paymentDate : string;
  expenseType : string;
  cost : number;
  description : string;


  @Output()
  expenseEmitter: EventEmitter<any> = new EventEmitter<void>();

  expenseForm = new FormGroup({
    date: new FormControl(''),
    expenseType: new FormControl(''),
    cost: new FormControl(''),
    description: new FormControl('')
  });


  constructor(private service: ExpenseService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.paymentDate = this.expenseForm.get("date").value;
    this.expenseType = this.expenseForm.get("expenseType").value;
    this.cost = this.expenseForm.get("cost").value;
    this.description = this.expenseForm.get("description").value;
    this.service.save(new Expense (
      this.expenseType,
      this.cost,
      this.paymentDate,
      this.description,
    ));

    console.warn(this.expenseForm.get("date").value);
    console.warn(this.expenseForm.value);
  }


}
