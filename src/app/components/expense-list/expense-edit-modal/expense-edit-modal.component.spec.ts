import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEditModalComponent } from './expense-edit-modal.component';

describe('ExpenseEditModalComponent', () => {
  let component: ExpenseEditModalComponent;
  let fixture: ComponentFixture<ExpenseEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
