import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Operation} from '../../domain/operation';
import {OperationService} from '../../services/operation.service';

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
    return this.service.getColor(operationClass);
  }

}
