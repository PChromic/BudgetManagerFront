import {Component, OnInit} from '@angular/core';

import {OperationService} from '../../../../core/services/operation.service';
import {FileService} from '../../../../core/services/backend/file.service';
import {Operation} from '../../classes/Operation';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations: Operation[];

  constructor(private fileService: FileService, private operationService: OperationService) {
  }

  ngOnInit() {
    this.operationService.findAll()
      .subscribe(data => {this.operations = data;
      });
  }

  getFilePath(event) {
    if (event.target.files.length > 0) {
      let filePath = event.target.files[0].name;
      this.fileService.getFilePath(filePath);
    }
  }


}
