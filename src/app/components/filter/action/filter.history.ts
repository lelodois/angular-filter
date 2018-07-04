import {TableHistoryItem} from './table.history';
import {FilterType} from './types.filter';

export class TableHistory {

  private _itens: TableHistoryItem[] = [];

  deleteHistory(fieldName: String): boolean {
    let deleted = false;
    this._itens.forEach((history, index) => {
      if (history.fieldName == fieldName) {
        this._itens.splice(index, 1);
        deleted = true;
      }
    });
    return deleted;
  }

  getItemHistory(fieldName: String): TableHistoryItem[] {
    return this._itens.filter(item => item.fieldName == fieldName);
  }

  addItemHistory(fieldName: String, searchValue: String, filterType: FilterType) {
    if (this.getItemHistory(fieldName).length == 0) {
      this._itens.push(new TableHistoryItem(fieldName, searchValue, filterType));
    }
  }

  get itens(): TableHistoryItem[] {
    return this._itens;
  }
}
