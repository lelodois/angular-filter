import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterColumnInputComponent } from './filter-column-input.component';

describe('FilterColumnBaseComponent', () => {
  let component: FilterColumnInputComponent;
  let fixture: ComponentFixture<FilterColumnInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterColumnInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterColumnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
