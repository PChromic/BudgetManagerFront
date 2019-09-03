import {Component, OnInit, Optional, QueryList, ViewChildren} from '@angular/core';

import {OperationService} from '../../../../core/services/operation.service';
import {FileService} from '../../../../core/services/backend/file.service';
import {Operation} from '../../classes/operation';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  /* operations: Operation[];
   selectedOperation: Operation;*/

  operations$: Operation[];

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService,
    private service: OperationService) {
  }

  ngOnInit() {
    this.service.findAll()
      .subscribe(data => {
          this.operations$ = data;
        },
        err => console.error(err),
        () => console.log('done loading operations'));
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
