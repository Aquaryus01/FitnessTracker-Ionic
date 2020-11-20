import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from '../modules/dashboard/models/meal';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( arr: Meal[], textTo: string): any[] {
    if(textTo == "")
      return arr;

    return arr.filter(item => {
      return item.name.toLowerCase()
        .includes(textTo.toLowerCase())
    });
  }

}
