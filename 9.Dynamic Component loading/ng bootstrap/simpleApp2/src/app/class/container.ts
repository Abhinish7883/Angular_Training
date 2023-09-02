import { ViewRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooleanComponent } from 'src/app/Component/boolean/boolean.component';
import { DropdownComponent } from 'src/app/Component/dropdown/dropdown.component';
import { NumberComponent } from 'src/app/Component/number/number.component';
import { TextBoxComponent } from 'src/app/Component/text-box/text-box.component';
import { field } from '../dataType';

export class base{

    fieldProperties!: field[];
    reactiveFormContainer!: FormGroup;
    componentRef!:any;
    addFormGroup!: FormGroup;
    selectedOption!:string;
    count=0

    constructor(){
    
        this.reactiveFormContainer = new FormGroup({});
        this.addFormGroup = new FormGroup({
          label: new FormControl('', Validators.required),     
        });

        console.log(this.selectedOption);
        
    }
    onInit():void{
      console.log(this.selectedOption);
      
    }
    createComponent(copmponentFieldProperties: field): void {
      switch (copmponentFieldProperties.type) {
        case 'text':
          const textBox = this.componentRef.createComponent(TextBoxComponent);
          textBox.instance.textBoxProperty = copmponentFieldProperties;
          textBox.instance.reactiveFormGroup = this.reactiveFormContainer;
          textBox.instance.indexOfComponent.subscribe(() => {
            this.removeComponent(textBox.hostView);
          });
  
          break;
        case 'number':
          const numberBox = this.componentRef.createComponent(NumberComponent);
          numberBox.instance.numboxProperty = copmponentFieldProperties;
          numberBox.instance.reactiveFormGroup = this.reactiveFormContainer;
          numberBox.instance.indexOfComponent.subscribe(() => {
            this.removeComponent(numberBox.hostView);
          });
          break;
        case 'boolean':
          let radioBox = this.componentRef.createComponent(BooleanComponent);
          radioBox.instance.radioProperty = copmponentFieldProperties;
          radioBox.instance.reactiveFormGroup = this.reactiveFormContainer;
          radioBox.instance.indexOfComponent.subscribe(() => {
            this.removeComponent(radioBox.hostView);
          });
          break;
        case 'dropdown':
          let dropdown = this.componentRef.createComponent(DropdownComponent);
          dropdown.instance.dropDownProperty = copmponentFieldProperties;
          dropdown.instance.reactiveFormGroup = this.reactiveFormContainer;
          dropdown.instance.indexOfComponent.subscribe(() => {
            this.removeComponent(dropdown.hostView);
          });
          break;
  
        default:
          break;
      }
    }
    
      
      removeComponent(componentType: ViewRef): void {
        this.componentRef.remove(this.componentRef.indexOf(componentType));
      }
}


