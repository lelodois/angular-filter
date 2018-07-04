import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FilterColumnInputComponent} from './components/filter/filter-column/filter-column-input.component';
import {FilterButtonComponent} from './components/filter/filter-button/filter-button.component';
import {FilterColumnNumberComponent} from './components/filter/filter-column-number/filter-column-number.component';
import {FilterButtonSelectedComponent} from './components/filter/filter-button-selected/filter-button-selected.component';
import {TableExampleComponent} from './example/component/table-example.component';
import {ItemExampleService} from './example/service/item-example.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    TableExampleComponent,
    FilterColumnInputComponent,
    FilterButtonComponent,
    FilterColumnNumberComponent,
    FilterButtonSelectedComponent
  ],
  providers: [
    ItemExampleService
  ],
  exports: [
    FilterColumnInputComponent,
    FilterButtonComponent,
    FilterColumnNumberComponent,
    FilterButtonSelectedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
