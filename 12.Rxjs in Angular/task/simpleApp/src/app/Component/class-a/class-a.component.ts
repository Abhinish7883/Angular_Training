import { Component, OnInit } from '@angular/core';
import { DataProcessingService } from 'src/app/Service/data-processing.service';

@Component({
  selector: 'app-class-a',
  templateUrl: './class-a.component.html',
  styleUrls: ['./class-a.component.css']
})
export class ClassAComponent implements OnInit {


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
      this.dataProcessing.setCounter([1,0,0,0]); 
    }
    else{
      this.counterValue[0]++;
      this.dataProcessing.setCounter(this.counterValue);
    } 
  }
}
 

