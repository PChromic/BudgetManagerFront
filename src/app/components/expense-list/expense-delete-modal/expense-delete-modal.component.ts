import { Component, Input} from '@angular/core';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Expense} from '../../../domain/expense';
import {ExpenseService} from '../../../services/expense.service';

@Component({
  selector: 'expense-delete-modal',
  templateUrl: './expense-delete-modal.component.html',
  styleUrls: ['./expense-delete-modal.component.css']
})
export class ExpenseDeleteModalComponent {

  @Input() expense: Expense;
  closeResult: string;

  constructor(private modalService: NgbModal, private service: ExpenseService) {

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
  onDelete(){
    this.service.delete(this.expense.id);
  }
}
