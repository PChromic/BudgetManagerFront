import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Expense} from '../../../domain/expense';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExpenseType} from '../../../domain/expense-type';
import {ExpenseService} from '../../../services/expense.service';
import {NgForm, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'expense-edit-modal',
  templateUrl: './expense-edit-modal.component.html',
  styleUrls: ['./expense-edit-modal.component.css']
})

export class ExpenseEditModalComponent {
  @ViewChild('exForm', {static: false}) exForm : NgForm;
  @Input() expense: Expense;
  closeResult: string;
  keyCount: number = 0;

  //* keys: any[];
  //* mapping of expense type enum
  keys = Object.keys;
  types = ExpenseType;
  //*

  constructor(private modalService: NgbModal, private service: ExpenseService) {
    //*this.keys = Object.keys(this.types).filter(String);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  private onDescription(event: any) {
    this.keyCount = event.target.value.length;
    console.log(this.keyCount)
  }
  private onSubmit() {
    console.log(this.expense.expenseType);
    this.service.save(this.expense)
      .subscribe(
        (data: Expense) =>
          console.log(data)
      );
  }
}
