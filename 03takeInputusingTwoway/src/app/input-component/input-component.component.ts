import { Component ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {
  

  // --------task-1------
  inputBoxValue=0;
  func(v:string)
  {
    this.inputBoxValue=v.length; 
  }
  //-----------task-2-----

  listOfname=['Abhinish','Abhi','Parv','savan','soharab','vimal','shashank']
  inputBoxValue2=''
  pattern:any;
  takeInput(data:string){
    this.inputBoxValue2=data;
     this.pattern = new RegExp (this.inputBoxValue2,"gi")
    
  }
}
