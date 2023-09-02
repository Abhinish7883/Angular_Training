import { Component, EventEmitter, Output, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ItemValue} from'../item-value'
 @Component({
   selector: 'app-child',
   templateUrl: './child.component.html',
   styleUrls: ['./child.component.css'],
 })
 export class ChildComponent implements OnInit, OnChanges {
   @Output() inputValueEvent = new EventEmitter<string[]>();
   @Output() removeInputValue = new EventEmitter<string>();
   @Input() takeInputFromParent: string[] = [];
   inputBoxContainer: ItemValue[] = [];
   constructor() {}
   ngOnInit(): void {
     this.createBox();
   }

   ngOnChanges(changes: SimpleChanges): void {
     this.updateInputBoxContainer();
   }

   createBox(inputBoxValue: string = ''): void {
     let createdBoxValue: ItemValue = {
       value: inputBoxValue,
     };
     this.inputBoxContainer.push(createdBoxValue);
   }

   remove(indexOfremovedElement: number): void {
     this.inputBoxContainer.splice(indexOfremovedElement, 1);
   }

   submit(): void {
     let setInputBoxToParent = this.extractInputBoxValueFromInputBoxContainer();
     this.inputValueEvent.emit(setInputBoxToParent);
     this.inputBoxContainer = [];
     this.createBox();
   }

   updateInputBoxContainer(): void {
     this.takeInputFromParent.forEach((parentInputValue: string) => {
       if (
         this.inputBoxContainer.length === 1 &&
         this.inputBoxContainer[0].value === ''
       ) {
         this.inputBoxContainer[0].value = parentInputValue.trimStart();
       } else {
         if (parentInputValue.trimStart()) {
           this.createBox(parentInputValue.trim());
         }
       }
     });
   }

   extractInputBoxValueFromInputBoxContainer(): string[] {
     let extractInputBoxValue: string[] = []
     this.inputBoxContainer.forEach((inputBoxValue) => {
       if (inputBoxValue.value) {
         extractInputBoxValue.push(inputBoxValue.value);
       }
     });
     console.log(extractInputBoxValue);

     return extractInputBoxValue;
   }
 }
