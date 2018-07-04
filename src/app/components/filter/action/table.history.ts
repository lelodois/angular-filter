import {FilterType} from './types.filter';

export class TableHistoryItem {

  constructor(private _fieldName: String,
              private _searchText: String,
              private _type: FilterType) {
  }

  get fieldName(): String {
    return this._fieldName;
  }

  get searchText(): String {
    return this._searchText;
  }

  get type(): FilterType {
    return this._type;
  }
}
