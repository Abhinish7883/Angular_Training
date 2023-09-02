import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-base',
  template: ``,
})
export class BaseComponent {
  componentInput: any;
  fieldmeta!: any;
  fieldControl!: FormControl;

  showError!: string;
  isShowError = false;
  constructor() {}

  addControl(): void {
    this.fieldmeta = this.componentInput.fieldmeta;
    this.fieldControl = new FormControl(null, this.fieldmeta.validators);
    this.componentInput.formGroup.addControl(
      `${this.fieldmeta.fieldName}`,
      this.fieldControl
    );
  }
  //

  validateForm() {
    let formControl = this.componentInput.formGroup.controls;

    if (formControl[this.fieldmeta.fieldName].hasError('required')) {
      if (this.fieldmeta.showErrorMassage) {
        console.log(this.fieldmeta.showErrorMassage);

        this.showError = this.fieldmeta.showErrorMassage;
      } else {
        if (this.fieldmeta.requiredMessage) {
          this.showError = this.fieldmeta.requiredMessage;
        } else {
          this.showError = `${this.fieldmeta.fieldName} is required `;
        }
      }

      this.isShowError = true;
      return false;
    } else if (formControl[this.fieldmeta.fieldName].hasError('minlength')) {
      if (this.fieldmeta.minLengthMessage) {
        this.showError = this.fieldmeta.minLengthMessage;
      } else {
        this.showError = `${this.fieldmeta.fieldName} should be greater then ${this.fieldmeta.minLength} `;
      }
      this.isShowError = true;
      return false;
    } else if (formControl[this.fieldmeta.fieldName].hasError('maxlength')) {
      if (this.fieldmeta.maxLengthMessage) {
        this.showError = this.fieldmeta.maxLengthMessage;
      } else {
        this.showError = `${this.fieldmeta.fieldName} should be less then ${this.fieldmeta.maxLength} `;
      }
      this.isShowError = true;
      return false;
    } else if (formControl[this.fieldmeta.fieldName].hasError('pattern')) {
      if (this.fieldmeta.phoneRegexMessage) {
        this.showError = this.fieldmeta.phoneRegexMessage;
      } else {
        this.showError = `${this.fieldmeta.fieldName} number must be 10 digit.`;
      }
      this.isShowError = true;
      return false;
    } else if (formControl[this.fieldmeta.fieldName].hasError('email')) {
      if (this.fieldmeta.emailRegexMessage) {
        this.showError = this.fieldmeta.emailRegexMessage;
      } else {
        this.showError = `${this.fieldmeta.fieldName} is invalid.`;
      }
      this.isShowError = true;
      return false;
    }
    this.isShowError = false;
    return false;
  }
}
