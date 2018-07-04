import {Input} from '@angular/core';
import {FilterType} from './action/types.filter';
import {ITableFilter} from './action/table.filter.';

export abstract class FilterColumnBaseComponent {

  @Input()
  columnName: String;

  @Input()
  width = '100px%';

  @Input()
  filterInstance: ITableFilter;

  @Input()
  filterType: FilterType;

}
