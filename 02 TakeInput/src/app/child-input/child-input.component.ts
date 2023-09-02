import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent {

  
  @Output() inputValueEvent = new EventEmitter<string>;
   @Input() inputValue:string ='';
   
  func(event:any)
  {
    this.inputValue = event.target.value;
    this.inputValueEvent.emit(this.inputValue);
      
  }
}
