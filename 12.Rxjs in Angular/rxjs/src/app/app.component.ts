import { Component, OnInit } from '@angular/core';
import {
  catchError,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  subscribeOn,
  take,
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';

  // obserable = new Observable((seb) => {
  //   seb.next('hiiiii...');
  //   seb.add();
  //   // seb.
  // });

  // of = of('abh', 'er');

  // constructor() {
  //   this.obserable.subscribe((data) => {
  //     console.log(data);
  //   });
  //   this.of.subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  ngOnInit(): void {
    //exam - 1
  //   const source = of(1, 2, 3);
  //   source.pipe(mergeMap((val) => of(val * 10))).subscribe(console.log);

  //   const source$ = of(1, 2, 3, 4, 5);

  //   source$
  //     .pipe(
  //       mergeMap(
  //         (val) =>
  //           interval(1000).pipe(
  //             map((innerVal: number) => val * innerVal),
  //             take(3)
  //           ),
  //         2
  //       ) // concurrency limit of 2
  //     )
  //     .subscribe(console.log);

  const source$ = of('hello', 2, 'world').pipe(
    map((value: any) => value.toUpperCase()), // this will throw an error for value 2
    catchError((error: any) => of('ERROR CAUGHT')) // handle the error by returning a new observable
  );
  
  source$.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log('Complete'),
  });
  }
}