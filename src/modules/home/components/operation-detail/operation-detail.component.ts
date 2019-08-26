import {Component, Input, OnInit} from '@angular/core';
import {Operation} from '../../classes/Operation';
import {OperationService} from '../../../../core/services/operation.service';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {
  operation: Operation;
  id: number;
  constructor(private operationService: OperationService) {}

  ngOnInit() {
    this.operationService.getDetails(this.id)
      .subscribe(data => this.operation = data);
  }

  getColor(operationClass: string) {
    if(operationClass === "DEBIT")
      return 'red';
    return 'green';
  }
}
