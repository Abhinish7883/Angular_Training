import { Component } from '@angular/core';
import { DataProcessingService } from 'src/app/Service/data-processing.service';

@Component({
  selector: 'app-class-c',
  templateUrl: './class-c.component.html',
  styleUrls: ['./class-c.component.css']
})
export class ClassCComponent {

  counterValue=[0,0,0,0];
  constructor(private dataProcessing:DataProcessingService){}


  ngOnInit(): void {
     this.dataProcessing.counter.subscribe({
      next:(data)=>{
        this.counterValue=data;       
      }
     })
  }

  updateCounter(){
    if(!this.counterValue){
      this.dataProcessing.setCounter([0,0,1,0]); 
    }
    else{
      this.counterValue[2]++;
      this.dataProcessing.setCounter(this.counterValue);
    } 
  }
}
