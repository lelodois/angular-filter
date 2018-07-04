import {FilterType} from './types.filter';

export interface ITableFilter {
  onActiveEvent();

  filterWithEquals(): FilterType;

  filterWithContains(): FilterType;

  filter(searchValue: any, fieldName: String, filterType: FilterType);

  filterWithReset(searchValue: any, fieldName: String, filterType: FilterType);

  isFilterActive(): boolean;

  fullList(): any[];

  filterableList(): any[];

}

