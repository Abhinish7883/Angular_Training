import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { field } from 'src/app/datatype';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {

  @Input()checkBoxProperty!: field;
  @Input()reactiveFormGroup!:FormGroup;
  @Output()indexOfComponent= new EventEmitter<field>();
   
  checkBoxFormControl!:FormControl;
  constructor(){
    
    this.checkBoxFormControl = new FormControl();
  }
  ngOnInit():void{
    this.reactiveFormGroup.addControl(`${this.checkBoxProperty.fieldName}`,this.checkBoxFormControl);
  }
}
