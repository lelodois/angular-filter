import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonSelectedComponent } from './filter-button-selected.component';

describe('FilterButtonSelectedComponent', () => {
  let component: FilterButtonSelectedComponent;
  let fixture: ComponentFixture<FilterButtonSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterButtonSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterButtonSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
