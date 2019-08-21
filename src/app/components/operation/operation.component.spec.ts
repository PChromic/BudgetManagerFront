import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Operation } from './operation.component';

describe('Operation', () => {
  let component: Operation;
  let fixture: ComponentFixture<Operation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Operation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Operation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
