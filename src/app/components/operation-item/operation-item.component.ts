import {Component, Input, OnInit} from '@angular/core';
import {Operation} from '../../domain/operation';


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
