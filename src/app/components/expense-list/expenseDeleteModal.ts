import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Operation} from '../../domain/operation';

@Component({
  selector: 'expense-delete-modal',
  templateUrl: './expenseDeleteModal.html'
})
export class ExpenseDeleteModal {

  closeResult: string;
  test = "asd";

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {
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
      return `with: ${reason}`;
    }
  }

  passBack() {
    this.activeModal.close(this.test);
  }
}
