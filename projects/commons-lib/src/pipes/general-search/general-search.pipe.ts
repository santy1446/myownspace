import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalSearch'
})
export class GeneralSearchPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    if (!value) return null;
    if (!arg) return value;

    arg = arg.toLowerCase();
    return value.filter((item: any) => {
      return JSON.stringify(item)
      .toLowerCase()
      .includes(arg)
    })
  }

}
