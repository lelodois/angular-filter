import {ContainsFilterTable, EqualsFilterTable, FilterType} from './types.filter';
import {ITableFilter} from './table.filter.';
import {TableHistory} from './filter.history';

export class FilterTable implements ITableFilter {

  private _isActive = false;
  private _filterableList: any[] = [];
  private _history = new TableHistory();

  constructor(private _allItensList: any[] = []) {
    this.resetFilters();
  }

  onActiveEvent() {
    this._isActive = !this._isActive;
    if (this._isActive == false) {
      this.resetFilters();
    }
  }

  filterWithEquals(): FilterType {
    return new EqualsFilterTable();
  }

  filterWithContains(): FilterType {
    return new ContainsFilterTable();
  }

  filterWithReset(searchValue: any, fieldName: String, filterType: FilterType) {
    this.resetFilters();
    this.filter(searchValue, fieldName, filterType);
    this._isActive = true;
  }

  filter(searchValue: any, fieldName: String, filterType: FilterType) {

    if (searchValue.toString() == '') {

      if (this._history.deleteHistory(fieldName) == true) {
        this.resetFilters();

        this._history.itens.forEach(history => {
          this.filter(history.searchText, history.fieldName, history.type);
        });
      }
    }

    if (this._filterableList.length == 0) return;

    if (searchValue.toString() != '') {
      this._history.addItemHistory(fieldName, searchValue, filterType);

      const fieldIndex = this.getFieldIndex(this._filterableList[0], fieldName);
      this._filterableList = this.doFilter(searchValue, fieldIndex, filterType);
    }
  }

  isFilterActive(): boolean {
    return this._isActive;
  }

  fullList(): any[] {
    return this._allItensList;
  }

  filterableList(): any[] {
    return this._filterableList;
  }

  private doFilter(searchValue: any, fieldIndex: number, filterType: FilterType) {
    const resultList = [];
    this._filterableList.forEach((item) => {
      const itemValue: String = String((Object.values(item)[fieldIndex]));
      if (filterType.existsItem(itemValue, searchValue)) {
        resultList.push(item);
      }
    });
    return resultList;
  }

  private getFieldIndex(item: any, field): number {
    let resultIndex = -1;
    Object.keys(item).forEach((keyItem, index) => {
        if (keyItem == field || '_'.concat(field) == keyItem) {
          resultIndex = index;
        }
      }
    );

    if (resultIndex == -1)
      throw Error('Field: [' + field + '] not found in object, properties exists: '
        + Object.getOwnPropertyNames(item).toString());

    return resultIndex;
  }

  private resetFilters() {
    this._filterableList.splice(0, this._filterableList.length);
    this._allItensList.forEach(_ => this._filterableList.push(_));
  }

}


