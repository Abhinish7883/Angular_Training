import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { field } from 'src/app/datatype';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()dropDownProperty!: field;
  @Input()reactiveFormGroup!:FormGroup;
  @Output()indexOfComponent= new EventEmitter<field>();
   
  dropDownFormControl!:FormControl;
  constructor(){
    
    this.dropDownFormControl = new FormControl();
  }
  ngOnInit():void{
    this.reactiveFormGroup.addControl(`${this.dropDownProperty.fieldName}`,this.dropDownFormControl);
  }
}
