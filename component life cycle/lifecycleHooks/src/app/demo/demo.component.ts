import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges ,OnInit,DoCheck{

  @Input()a=10;
  
  constroctor(){
    console.log('call constroctor');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log( changes);
    console.log('onchanges call');
    console.log(this.a);
    
    
  }
  ngOnInit(): void {
    console.log('onInit call ');
  }
  ngDoCheck(): void {
    console.log('docheck');
    
  }


}
