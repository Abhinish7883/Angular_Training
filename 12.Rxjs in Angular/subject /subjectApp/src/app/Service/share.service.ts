import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {


  // EventEmmiter 
  // data!: EventEmitter<string>;

  // subject 
  data!:Subject<string>

  constructor() {

    //EventEmiter
    // this.data = new EventEmitter();
    // subject
    this.data = new Subject<string>();



    // behaviorSubject 

    const bsubject = new BehaviorSubject<string>('Abhinish');

    bsubject.subscribe({
      next(value) {
        console.log(value);
      },
    })

    bsubject.next('tiwari');


    bsubject.subscribe({ // if subject not return any things 
      next:(val:any)=>{
        console.log(val);
      }
    })
  






  }
  EmitValue(val: string) {
    console.log(val);
    // this.data.emit(val);
    this.data.next(val);
  }
}
