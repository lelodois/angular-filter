import {Component, Input} from '@angular/core';
import {FilterType} from '../action/types.filter';
import {ITableFilter} from '../action/table.filter.';

@Component({
  selector: 'app-filter-button-selected',
  templateUrl: './filter-button-selected.component.html',
  styleUrls: ['./filter-button-selected.component.css']
})
export class FilterButtonSelectedComponent {

  @Input()
  columnName: String;

  @Input()
  filterInstance: ITableFilter;

  @Input()
  filterType: FilterType;
}
