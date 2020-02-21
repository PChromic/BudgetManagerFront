import {Component, Input, OnInit} from '@angular/core';
import {Expense} from '../../../domain/expense';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExpenseType} from '../../../domain/expense-type';

@Component({
  selector: 'expense-edit-modal',
  templateUrl: './expense-edit-modal.component.html',
  styleUrls: ['./expense-edit-modal.component.css']
})
export class ExpenseEditModalComponent {

  @Input() ex: Expense;
  closeResult: string;
  keys: any[];
  types = ExpenseType;

  constructor(private modalService: NgbModal) {
    this.keys = Object.keys(this.types).filter(String);
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
}
