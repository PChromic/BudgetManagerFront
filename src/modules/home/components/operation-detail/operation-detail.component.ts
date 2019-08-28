import {Component, Input, OnInit, Output} from '@angular/core';
import {Operation} from '../../classes/Operation';
import {OperationService} from '../../../../core/services/operation.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {

  operation$: Observable<Operation>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly service: OperationService) {
  }

  ngOnInit() {
    this.operation$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getDetails(params.get('id'))));
  }

  getColor(operationClass: string) {
    if (operationClass === 'DEBIT')
      return 'red';
    return 'green';
  }
}
