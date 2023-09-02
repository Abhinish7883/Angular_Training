import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'lifecycleHooks';

  okk = 10;
  
  okkk(){
    this.okk++;
  }
  constroctor(){
    console.log('call constroctor');
    console.log(this.okk);
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('call onchangees');
    
  }

}
