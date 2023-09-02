import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckBoxComponent, DropdownComponent, InputComponent, RadioComponent } from 'src/app/app.module';
import { DataProcessingService } from 'src/app/data-processing.service';
import { field } from 'src/app/datatype';
import { TableFormComponent } from 'src/app/table-form/table-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class UserAppComponent {
  title = 'user';

  fieldProperties!: field[];
  reactiveFormContainer!: FormGroup;
  addFormGroup!: FormGroup;
  selectedOption: string = 'select form Control'; 

  @ViewChild('dynamicComp', { read: ViewContainerRef, static: true })componentRef!: ViewContainerRef;

  constructor(private dataProcess: DataProcessingService, private router:Router) {
    
    this.dataProcess.getCompPropertiesUser().subscribe((data) => {
      this.fieldProperties = data;
    });
    this.reactiveFormContainer = new FormGroup({});
  }

  ngOnInit(): void {
    localStorage.removeItem('UserComponent')
    this.fieldProperties.forEach((field: field) => {
      this.createComponent(field);
    });
  }

  createComponent(copmponentFieldProperties: field): void {
    switch (copmponentFieldProperties.type) {
      case 'input':
        const textBox = this.componentRef.createComponent(InputComponent);
        textBox.instance.inputBoxProperty = copmponentFieldProperties;
        textBox.instance.reactiveFormGroup = this.reactiveFormContainer;
        break;
      case 'checkBox':
        const numberBox = this.componentRef.createComponent(CheckBoxComponent);
        numberBox.instance.checkBoxProperty = copmponentFieldProperties;
        numberBox.instance.reactiveFormGroup = this.reactiveFormContainer;
        break;
      case 'radio':
        let radioBox = this.componentRef.createComponent(RadioComponent);
        radioBox.instance.radioProperty = copmponentFieldProperties;
        radioBox.instance.reactiveFormGroup = this.reactiveFormContainer;
        break;
      case 'dropdown':
        let dropdown = this.componentRef.createComponent(DropdownComponent);
        dropdown.instance.dropDownProperty = copmponentFieldProperties;
        dropdown.instance.reactiveFormGroup = this.reactiveFormContainer;
        break;

      default:
        break;
    }
  }

  submitForm() {
    let formValue = this.reactiveFormContainer.value;
    this.dataProcess.setDataTolocalStore('UserComponent',formValue);
    this.reactiveFormContainer.reset();
  }
  
  redirect(){
    this.router.navigate(['user','user','table']);
  }
  
}
