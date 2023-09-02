import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { field } from 'src/app/dataType';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit{

  @Input()textBoxProperty!: field;
  @Output()indexOfComponent= new EventEmitter<field>();
  @Input()reactiveFormGroup!:FormGroup;
  textBoxControl!:FormControl;
  textBoxCount = 0;

  constructor(){
    this.textBoxControl = new FormControl();
   }

  ngOnInit():void{

    this.reactiveFormGroup.addControl(`${this.textBoxProperty.fieldName}`+`${this.textBoxCount>0?this.textBoxCount:''}`,this.textBoxControl);
  }

  removeComp(){
    this.reactiveFormGroup.removeControl(`${this.textBoxProperty.fieldName}`);
    this.indexOfComponent.emit(this.textBoxProperty);
  }

}
