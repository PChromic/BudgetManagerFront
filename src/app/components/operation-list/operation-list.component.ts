import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {FileService} from '../../services/backend/file.service';
import {OperationService} from '../../services/operation.service';
import {Operation} from '../../domain/operation';


@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations$: Operation[];
  itemVisible: boolean;

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

  onFileChange(event:any){
    if (event.target.files.length > 0) {
      let filePath = event.target.files[0].name;
      this.fileService.getFilePath(filePath);
      console.log(filePath);
    }
  }

  openFileDialog(event:any) {
    let element: HTMLElement = document.getElementById('fileLoader') as HTMLElement;
    element.click();
  }

  getFilePath(event) {
/*    if (event.target.files.length > 0) {
      let filePath = event.target.files[0].name;
      this.fileService.getFilePath(filePath);
      console.log(filePath);
    }*/

    if (event.target.files.length > 0) {
      let filePath = event.target.files[0].name;
      this.fileService.getFilePath(filePath);
      console.log(filePath);
    }
    this.service.findAll()
      .subscribe(data => {
          this.operations$ = data;
        },
        err => console.error(err),
        () => console.log('done loading operations'));
  }

  getColor(operationClass: string) {
    return this.service.getColor(operationClass);
  }
  toggleDetails(){
   return this.itemVisible = !this.itemVisible;
  }
}

