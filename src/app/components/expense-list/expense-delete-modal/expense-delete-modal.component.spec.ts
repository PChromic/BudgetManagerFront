import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDeleteModalComponent } from './expense-delete-modal.component';

describe('ExpenseDeleteModalComponent', () => {
  let component: ExpenseDeleteModalComponent;
  let fixture: ComponentFixture<ExpenseDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
