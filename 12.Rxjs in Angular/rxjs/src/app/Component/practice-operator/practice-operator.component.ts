import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, interval, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-practice-operator',
  templateUrl: './practice-operator.component.html',
  styleUrls: ['./practice-operator.component.css']
})
export class PracticeOperatorComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {
    
    // pipe
    console.log("use of pipe :-");

    const usePipe = from([1,2,3,4,5,6,7,8]);

    usePipe
    .pipe(
      filter((val:any)=>{
        return val%2==0;
      }),
      map((value:any)=>{
        return value*10;
      })
    )
    .subscribe(
      val =>{
        console.log(val);
      }
    )

    // switchMap 
     

    console.log("switch map:-");
    
    const  btnclick = fromEvent(document,'click');
    const interVal = interval(1000);

    // problem 
    // btnclick.subscribe(

    //   val => interVal.subscribe(
    //     IntervalVal=>{
    //       console.log(IntervalVal);
    //     }
    //   )  
    // )

    // solution of above problem

    btnclick
    .pipe(
      switchMap(event=>{
        return interVal 
      })
    )
    .subscribe(
      val=>{
        console.log(val);
      }
    )
  }


}
