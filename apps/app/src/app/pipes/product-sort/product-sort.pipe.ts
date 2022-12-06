import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure: true,
  name: 'productSortPipe',
})
export class ProductSortPipe implements PipeTransform {
  transform(items: any[] | null = [], direction: 'asc' | 'desc', column: string, type: string): any[] {
    return direction === 'desc'
      ? this.sortByDescending(items || [], column, type)
      : this.sortByAscending(items || [], column, type);
  }

  sortByAscending(items: any[], column: string, type: string): any[] {
    return items.sort((a: any, b: any) => {
      if (type === "string") {
        if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
      }
      return a[column]-b[column];
    });
  }

  sortByDescending(items: any[], column: string, type: string): any[] {
    return items.sort((a: any, b: any) => {
      if (type === "string") {
        if (a[column].toUpperCase() > b[column].toUpperCase()) return -1;
      }
      return b[column] - a[column];
    });
  }
}
