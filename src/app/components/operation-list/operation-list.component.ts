import { Component, OnInit } from '@angular/core';
import {Operation} from '../operation/operation.component';
import {OperationService} from '../../operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations: Operation[];
  private filePath: string;

  constructor(private service: OperationService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.operations = data;
    })
  }

  public getFilePath(event) {
    // var x = document.getElementById("myFile").value;

    if (event.target.files.length > 0){
      this.filePath = event.target.files[0].name;
      console.log(this.filePath);
      this.service.openFile(this.filePath);
      this.service.readFile();
    }

  }

}
