import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(dateValue: string | Date, formate: string = ''): string {
    if (!formate) {
      return getDate(dateValue, 'DD MMM YYYY'); //DEFAULT
    } else if (formate === 'dateDifference') {
      return getDateDifference(dateValue); // difference
    } else {
      return coustomFoumate(formate); // coustom
    }

    function getDate(dateValue: any, formate: string): string {
      return moment(dateValue).format(formate);
    }

    function coustomFoumate(formate: string): string {
      let matchedFormates = formate?.match(/([DMY])+/gi);
      matchedFormates?.forEach((formates) => {
        formate = formate.replace(formates, getDate(dateValue, formates));
      });
      return formate;
    }
    function getDateDifference(dateValue: string | Date): string {
      let currentDate = moment();
      let givenDate = moment(dateValue, ['DD-MM-YYYY', 'YYYY-MM-DD']);
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
}
