import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpenseType} from '../../domain/expense-type';
import {Expense} from '../../domain/expense';
import {ExpenseService} from '../../services/expense.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Operation} from '../../domain/operation';


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
  deleteClicked: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private service: ExpenseService,
    private modalService: NgbModal) {
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
  onEdit(ex: Expense) {
    console.log("Selected ID: " + this.selected.value);
    this.selected = ex;
  }
  onDetails(ex: Expense) {
    console.log("Selected ID: " + this.selected.value);
    this.selected = ex;
  }


}
