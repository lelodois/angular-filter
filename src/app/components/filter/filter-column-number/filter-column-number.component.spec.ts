import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterColumnNumberComponent } from './filter-column-number.component';

describe('FilterColumnBaseComponent', () => {
  let component: FilterColumnNumberComponent;
  let fixture: ComponentFixture<FilterColumnNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterColumnNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterColumnNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
