import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { field } from 'src/app/dataType';
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  @Input()numboxProperty!: field;
  @Input()reactiveFormGroup!: FormGroup;
  @Output()indexOfComponent= new EventEmitter<field>();
  numberBoxControl!:FormControl;
  numberBoxCount = 0;
  constructor(){
    this.numberBoxControl = new FormControl();
  }

  ngOnInit():void{
    
     this.reactiveFormGroup.addControl(`${this.numboxProperty.fieldName}`+`${this.numberBoxCount>0?this.numberBoxCount:''}`,this.numberBoxControl);

  }

  removeComp(){
    this.reactiveFormGroup.removeControl(`${this.numboxProperty.fieldName}`);
    this.indexOfComponent.emit(this.numboxProperty);
  }

}
