import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {


  counter!: Subject<any>;
  constructor() {
    this.counter = new Subject();
     
   }

  setCounter(value:number[]){
    this.counter.next(value);
  }
}
