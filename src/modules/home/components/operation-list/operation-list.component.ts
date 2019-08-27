import {Component, OnInit, Optional} from '@angular/core';

import {OperationService} from '../../../../core/services/operation.service';
import {FileService} from '../../../../core/services/backend/file.service';
import {Operation} from '../../classes/Operation';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

 /* operations: Operation[];
  selectedOperation: Operation;*/

  operations$: Operation[];
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService,
              private service: OperationService) {
  }

  ngOnInit() {

    this.service.findAll()
      .subscribe(data => {this.operations$ = data;});
  }

  getFilePath(event) {
    if (event.target.files.length > 0) {
      let filePath = event.target.files[0].name;
      this.fileService.getFilePath(filePath);
    }
  }

/*  getDetails(index: number): void {
    console.log(this.operations[index].id);
    this.operationService.getDetails(this.operations[index].id)
      .subscribe(data => {this.selectedOperation = data});
    console.log(this.selectedOperation);
   }*/


}
