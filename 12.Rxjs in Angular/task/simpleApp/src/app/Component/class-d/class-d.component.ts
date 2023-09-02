import { Component } from '@angular/core';
import { DataProcessingService } from 'src/app/Service/data-processing.service';

@Component({
  selector: 'app-class-d',
  templateUrl: './class-d.component.html',
  styleUrls: ['./class-d.component.css']
})
export class ClassDComponent {

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
      this.dataProcessing.setCounter([0,0,0,1]); 
    }
    else{
      this.counterValue[3]++;
      this.dataProcessing.setCounter(this.counterValue);
    } 
  }
}
