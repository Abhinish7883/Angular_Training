import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckBoxComponent } from 'src/app/app.module';
import { DropdownComponent } from 'src/app/app.module'
import { InputComponent } from 'src/app/app.module';
import { RadioComponent } from 'src/app/app.module'
import { DataProcessingService } from 'src/app/data-processing.service';
import { field } from 'src/app/datatype';

@Component({
  selector: 'account-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AccountAppComponent {

  title = 'account';

  fieldProperties!: field[];
  reactiveFormContainer!: FormGroup;
  addFormGroup!: FormGroup;
  selectedOption: string = 'select form Control';


  @ViewChild('dynamicComp', { read: ViewContainerRef, static: true }) componentRef!: ViewContainerRef;

  constructor(private dataProcess: DataProcessingService, private router:Router ) {
    
    this.dataProcess.getCompPropertiesAccount().subscribe((data) => {
      this.fieldProperties = data;
    });
    this.reactiveFormContainer = new FormGroup({});
  }

  ngOnInit(): void {
    localStorage.removeItem('AccountComponent');
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
    this.dataProcess.setDataTolocalStore('AccountComponent',formValue)
    this.reactiveFormContainer.reset();
  }
  
  redirect(){
    this.router.navigate(['account','account1','table']);
  }
}
