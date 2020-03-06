import {Component, Input, OnInit} from '@angular/core';
import {Expense} from '../../../domain/expense';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExpenseService} from '../../../services/expense.service';

@Component({
  selector: 'expense-detail-modal',
  templateUrl: './expense-detail-modal.component.html',
  styleUrls: ['./expense-detail-modal.component.css']
})
export class ExpenseDetailModalComponent {

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
}
