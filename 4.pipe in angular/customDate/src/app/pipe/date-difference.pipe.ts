import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateDifference',
})
export class DateDifferencePipe implements PipeTransform {
  transform(value: Date | string): string {
    let currentDate = moment();
    let givenDate = moment(value, ['DD-MM-YYYY', 'YYYY-MM-DD']);
    let dateDifference = currentDate.diff(givenDate, 'days');
    switch (dateDifference) {
      case 0:
        return 'From Now';
      case 1:
        return 'one Day ago';
      case 2:
        return 'Two Day ago';
      default:
        return givenDate.format('DD MMM YYYY').toString();
    }
  }
}
