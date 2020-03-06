import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailModalComponent } from './expense-detail-modal.component';

describe('ExpenseDetailModalComponent', () => {
  let component: ExpenseDetailModalComponent;
  let fixture: ComponentFixture<ExpenseDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
