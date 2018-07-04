import {Component} from '@angular/core';
import {ItemExample} from '../model/item.model';
import {ItemExampleService} from '../service/item-example.service';
import {FilterTable} from '../../components/filter/action/table-impl.filter';
import {ITableFilter} from '../../components/filter/action/table.filter.';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent {

  filterTable: ITableFilter;

  constructor(private service: ItemExampleService) {

    this.filterTable = new FilterTable(this.service.getAllItens());
  }

  onSelectAll($event) {
    this.filterTable.fullList().forEach(
      item => item.selected = $event.target.checked
    );
  }

  onSelectFiltereds($event) {
    this.filterTable.filterableList().forEach(
      item => item.selected = $event.target.checked
    );
  }

  onPaintItem(item: ItemExample): string {
    return item.selected ? 'info ' : '';
  }
}
