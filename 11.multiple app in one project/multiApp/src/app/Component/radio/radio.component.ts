import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { field } from 'src/app/datatype';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Input()radioProperty!: field;
  @Input()reactiveFormGroup!:FormGroup;
  @Output()indexOfComponent= new EventEmitter<field>();
   
  radioFormControl!:FormControl;
  constructor(){
    
    this.radioFormControl = new FormControl();
  }
  ngOnInit():void{
    this.reactiveFormGroup.addControl(`${this.radioProperty.fieldName}`,this.radioFormControl);
  }
}
