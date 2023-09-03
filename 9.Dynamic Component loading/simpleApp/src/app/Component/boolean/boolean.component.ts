import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { field } from 'src/app/dataType';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent {

  @Input()radioProperty!: field;
  @Input()reactiveFormGroup!:FormGroup;
  @Output()indexOfComponent= new EventEmitter<field>();

  radioBoxControl!:FormControl;
  radionBoxCount = 0;
  constructor(){
    this.radioBoxControl = new FormControl();
  }
  ngOnInit():void{
     
    this.reactiveFormGroup.addControl(`${this.radioProperty.fieldName}`,this.radioBoxControl);
    
  }
 
  removeComp(){
    this.reactiveFormGroup.removeControl(`${this.radioProperty.fieldName}`);
    this.indexOfComponent.emit(this.radioProperty);
  }
}
