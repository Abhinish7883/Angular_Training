import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnChanges,OnInit {
  title = 'stangalone';

  @Input()akkkk = 78;

  constructor(){
    console.log("call constractor");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('call onchanges');
  }

  ngOnInit(): void {
    console.log('onInit');
    
  }

  okk(a:any){
    console.log(a);
    
  }

}
