import {Component, Input} from '@angular/core';
import {ITableFilter} from '../action/table.filter.';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css']
})
export class FilterButtonComponent {

  @Input()
  filterInstance: ITableFilter = undefined;

}
