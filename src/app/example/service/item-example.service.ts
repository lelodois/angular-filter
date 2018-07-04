import {Injectable} from '@angular/core';
import {ItemExample} from '../model/item.model';
import {TitleCasePipe} from '@angular/common';

@Injectable()
export class ItemExampleService {

  getAllItens(): ItemExample[] {
    const itens: ItemExample[] = [];

    for (let index = 10000; index <= 11000; index++) {

      let name =
        'Item position '
          .concat(index.toString())
          .concat(' name is ')
          .concat(new TitleCasePipe().transform(Math.random().toString(36).substring(7)))
          .concat(' ');
      name = name.concat(' length ').concat(name.length.toString());
      itens.push(new ItemExample(index, false, name));
    }

    return itens;
  }

}
