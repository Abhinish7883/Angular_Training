import { Component } from '@angular/core';
import { DataProcessingService } from 'src/app/Service/data-processing.service';

@Component({
  selector: 'app-class-b',
  templateUrl: './class-b.component.html',
  styleUrls: ['./class-b.component.css']
})
export class ClassBComponent {

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
      this.dataProcessing.setCounter([0,1,0,0]); 
    }
    else{
      this.counterValue[1]++;
      this.dataProcessing.setCounter(this.counterValue);
    } 
  }
}
