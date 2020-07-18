import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeUserId',
})
export class CommonPipe implements PipeTransform {
  transform(val: any): any {
    if (val) {
      console.log(val);
      return val;
    }
    return val;
  }
}
