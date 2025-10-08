import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
})
export class FilterTasksPipe implements PipeTransform {
  transform(items: any[], propertyName: string, filterValue: string): any[] {
    if (!items || !propertyName || !filterValue || filterValue === '') {
      return items; 
    }

    return items.filter((item) => {
      return item[propertyName]
        ?.toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    });
  }
}
