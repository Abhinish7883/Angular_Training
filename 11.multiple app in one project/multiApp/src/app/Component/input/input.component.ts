import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { field } from 'src/app/datatype';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()inputBoxProperty!: field;
  @Output()indexOfComponent= new EventEmitter<field>();
  @Input()reactiveFormGroup!:FormGroup;
  inputBoxControl!:FormControl;
  textBoxCount = 0;

  constructor(){
    this.inputBoxControl = new FormControl();
   }

  ngOnInit():void{

    this.reactiveFormGroup.addControl(`${this.inputBoxProperty.fieldName}`,this.inputBoxControl);
  }

   

}
