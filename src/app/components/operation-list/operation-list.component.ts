import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FileService} from '../../services/backend/file.service';
import {OperationService} from '../../services/operation.service';
import {Operation} from '../../domain/operation';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-operation-list',
  templateUrl: 'operation-list.component.html',
  styleUrls: ['./operation-list.component.css'],
  providers: [DatePipe]
})
export class OperationListComponent implements OnInit {

  p: number = 1;
  private size: number = 10;
  selected: Operation;
  operations$: Operation[];
  itemVisible: boolean;

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService,
    private service: OperationService,
    private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.service.findAll()
      .subscribe(data => {
          this.operations$ = data;
        },
        err => console.error(err),
        () => console.log('done loading operations'));

  }

  onDetails(op: Operation) {
    this.selected = op;
    console.log("Selected ID: " + this.selected.id);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      let filePath = event.target.files[0].name;
      let test = event.target.value;
      console.log(test);
      console.log(filePath);
      this.fileService.getFilePath(filePath);
    }
  }

  openFileDialog(event: any) {
    let element: HTMLElement = document.getElementById('fileLoader') as HTMLElement;
    element.click();
  }

  getFilePath(event) {
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
        () => console.log('done loading overall operations'));
  }

  getColor(operationClass: string) {
    return this.service.getColor(operationClass);
  }

  toggleDetails() {
    return this.itemVisible = !this.itemVisible;
  }

  setSearchPeriod(month: number): string {
    return this.datePipe.transform(
      new Date(new Date()
        .setMonth(new Date().getMonth() - month))
      , 'yyy-MM-dd');
  }

  onQuarter() {
    // reset the current page variable used in pagination
    this.p = 1;
    let fromDate = this.setSearchPeriod(3);

    this.service.findByOperationDateAfter(fromDate)
      .subscribe(data => {
          this.operations$ = data;
        },
        err => console.error(err),
        () => console.log('done loading quarter operations'));

  }

  onMonth() {
    // reset the current page variable used in pagination
    this.p = 1;
    let fromDate = this.setSearchPeriod(1);
    console.log(fromDate)
    this.service.findByOperationDateAfter(fromDate)
      .subscribe(data => {
          this.operations$ = data;
        },
        err => console.error(err),
        () => console.log('done loading monthly operations'));

  }

  onOverall() {
    this.getBalance();
    this.service.findAll()
      .subscribe(data => {
          this.operations$ = data;
        },
        err => console.error(err),
        () => console.log('done loading overall operations'));
  }

  getSummary() {

  }
  getIncome() {
    let op = this.operations$
      .filter(s=> s.operationClass == "CREDIT")
      .map(b => b.amount)
      .reduce((acc, cur) => acc + cur, 0);
    return op;
  }
  getOutcome() {
    let op = this.operations$
      .filter(s=> s.operationClass == "DEBIT")
      .map(b => b.amount)
      .reduce((acc, cur) => acc + cur, 0);
    return op;
  }
  getBalance() {
    let op = this.operations$.map(b => b.amount).reduce((acc, cur) => acc + cur, 0);
    console.log(this.getIncome() - this.getOutcome())
  }
}

