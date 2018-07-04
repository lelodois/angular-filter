import {Component, Input} from '@angular/core';
import {FilterColumnBaseComponent} from '../filter-column-base';

@Component({
  selector: 'app-filter-column-input',
  templateUrl: './filter-column-input.component.html',
  styleUrls: ['./filter-column-input.component.css']
})
export class FilterColumnInputComponent extends FilterColumnBaseComponent {

  @Input()
  placeHolder: String;

}
