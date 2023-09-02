import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
interface formControlformat {
  name?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  minlength?:number;
  maxlength?:number;
  min?:number
  max?:number
  pattern?:RegExp
  email?:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactiveFormTask';
  showError = false;
  timeoutID: any;
  registrationForm!: FormGroup;
  formControlsProperties!: formControlformat[];
  formControlsCount = 0;
  registrationFormControlsArray!: FormArray;

  constructor() {
    this.registrationForm = new FormGroup({
      registrationFormControlsArray: new FormArray([] as FormControl[]),
    });
    this.registrationFormControlsArray = this.registrationForm.get(
      'registrationFormControlsArray'
    ) as FormArray;
  }

  generateJSON(textAreaValueInJSON: string): void {
    this.showError = false;
    try {
      let textAreaValue = JSON.parse(textAreaValueInJSON);
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => {
        this.createNewControls(textAreaValue);
      }, 1000);
    } catch (errors) {
      console.log('errors');
      this.showError = true;
    }
  }

  createNewControls(textAreaValue: any[]): void {
    this.formControlsProperties = textAreaValue;
    for (
      let formControls = this.formControlsCount;
      formControls < this.formControlsProperties.length;
      formControls++
    ) {
      this.registrationFormControlsArray.push(new FormControl(null));
      this.formControlsCount++;
    }
  }

  formSubmit(formData: any): void {
    console.log(formData.value);
  }
}
