import {Component, Input, OnInit} from '@angular/core';
import {Operation} from '../../classes/operation';
import {OperationService} from '../../../../core/services/operation.service';

@Component({
  selector: 'app-operation-item',
  templateUrl: './operation-item.component.html',
  styleUrls: ['./operation-item.component.css']
})
export class OperationItemComponent implements OnInit {

  @Input() operation: Operation;

  constructor() { }

  ngOnInit() {
    console.log(this.operation.transType);
  }


}
