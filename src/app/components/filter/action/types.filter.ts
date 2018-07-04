export abstract class FilterType {

  abstract existsItem(valueItem: String, valueSearch: String): boolean;
}

export class ContainsFilterTable extends FilterType {

  existsItem(valueItem: String, valueSearch: String): boolean {
    return valueItem
      .toString()
      .trim()
      .toLowerCase()
      .indexOf(valueSearch
        .toString()
        .trim()
        .toLowerCase()) >= 0;
  }
}

export class EqualsFilterTable extends FilterType {

  existsItem(valueItem: String, valueSearch: String): boolean {
    return valueItem.toString().trim() == valueSearch.toString().trim();
  }

}
