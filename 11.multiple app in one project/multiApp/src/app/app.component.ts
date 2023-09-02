import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckBoxComponent } from './Component/check-box/check-box.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { InputComponent } from './Component/input/input.component';
import { RadioComponent } from './Component/radio/radio.component';
import { DataProcessingService } from './data-processing.service';
import { field } from './datatype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multiApp';

  fieldProperties!: field[];
  reactiveFormContainer!: FormGroup;
  addFormGroup!: FormGroup;

  selectedOption: string = 'select form Control';
  count = 0;
  @ViewChild('dynamicComp', { read: ViewContainerRef, static: true })
  componentRef!: ViewContainerRef;

  constructor(
    private dataProcess: DataProcessingService,
    private router: Router
  ) {
    this.dataProcess.getCompPropertiesApp().subscribe((data) => {
      this.fieldProperties = data;
    });
    this.reactiveFormContainer = new FormGroup({});
  }

  ngOnInit(): void {
    localStorage.removeItem('AppComponent');
    this.fieldProperties.forEach((field: field) => {
      this.createComponent(field);
    });
  }

  createComponent(copmponentFieldProperties: field): void {
    console.log(copmponentFieldProperties);

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
    console.log(formValue);
    this.dataProcess.setDataTolocalStore('AppComponent', formValue);
    this.reactiveFormContainer.reset();
  }

  redirect() {
    this.router.navigate(['app', 'table']);
  }
}
