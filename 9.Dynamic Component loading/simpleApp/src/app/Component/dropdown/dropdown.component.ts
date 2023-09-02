import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { field } from 'src/app/dataType';

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
  dropDownCount = 0;
  constructor(){
    
    this.dropDownFormControl = new FormControl();
  }
  ngOnInit():void{
    
    this.reactiveFormGroup.addControl(`${this.dropDownProperty.fieldName}`+`${this.dropDownCount>0?this.dropDownCount:''}`,this.dropDownFormControl);

  }
  removeComp(){
    this.reactiveFormGroup.removeControl(`${this.dropDownProperty.fieldName}`);
    this.indexOfComponent.emit(this.dropDownProperty);
    
  }
}
