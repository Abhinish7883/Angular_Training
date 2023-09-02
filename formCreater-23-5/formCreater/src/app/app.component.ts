import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { fieldMeta } from './DataType /data-type';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from './service/shared.service';

import { TextAreaComponent } from './Component/text-area/text-area.component';
import { InputTextComponent } from './Component/input-text/input-text.component';
import { SelectComponent } from './Component/select/select.component';
import { TextField } from './Class/text-field';
import { TextAreaField } from './Class/text-area-field';
import { SelectField } from './Class/select-field';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckBoxComponent } from './Component/check-box/check-box.component';
import { CheckBoxfield } from './Class/check-boxfield';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnChanges {
  title = 'formCreater';

  fields: any[] = [];
  addNewField: any[] = [];
  fieldMetaData!: fieldMeta[];
  myForm!: FormGroup;
  popUpForm!: FormGroup;
  isSelect = false;
  @ViewChild('addFieldPopUp', { read: TemplateRef })
  addFieldPopUp!: TemplateRef<any>;
  constructor(
    private sharedservice: SharedService,
    private modalService: NgbModal,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({});
    this.fieldMetaData = this.sharedservice.fieldMetaData;
    this.fields = this.createRenderCompmetaData(
      this.fieldMetaData,
      this.myForm
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('run parents.....');
  }

  createRenderCompmetaData(
    fieldMetaData: fieldMeta[],
    formGroupName: FormGroup
  ): any {
    let renderCompmetaData: any[] = [];

    fieldMetaData.forEach((field) => {
      console.log(field.type);
      if (
        field.type == 'Text' ||
        field.type == 'Email' ||
        field.type == 'Phone' ||
        field.type == 'number'
      ) {
        renderCompmetaData.push(
          this.createFieldObj(
            field,
            InputTextComponent,
            TextField,
            formGroupName
          )
        );
      } else if (field.type == 'checkbox') {
        renderCompmetaData.push(
          this.createFieldObj(
            field,
            CheckBoxComponent,
            CheckBoxfield,
            formGroupName
          )
        );
      } else if (field.type == 'TextArea') {
        renderCompmetaData.push(
          this.createFieldObj(
            field,
            TextAreaComponent,
            TextAreaField,
            formGroupName
          )
        );
      } else if (field.type == 'Select' || field.type == 'MultiSelect') {
        renderCompmetaData.push(
          this.createFieldObj(
            field,
            SelectComponent,
            SelectField,
            formGroupName
          )
        );
      } else {
        console.log('Invalid......');
      }
    });

    return renderCompmetaData;
  }

  createFieldObj(
    field: fieldMeta,
    component: any,
    classField: any,
    formGroupName: FormGroup
  ): any {
    return {
      componentToRender: component,
      componentInput: {
        formGroup: formGroupName,
        fieldmeta: new classField(field),
      },
    };
  }

  submitForm() {
    console.log(this.myForm);
  }

  open(fieldType: string) {
    this.popUpForm = new FormGroup({});
    this.checkPopUpFormType(fieldType);
    this.addNewField = this.createRenderCompmetaData(
      this.sharedservice.addNewField,
      this.popUpForm
    );
    console.log(this.addNewField);
    this.modalService.open(this.addFieldPopUp).result.then(
      (data) => {
        this.fields = [
          ...this.createRenderCompmetaData([data.value], this.myForm),
        ];

        this.isSelect = false;
      },
      (reject) => {
        this.isSelect = false;
        if (this.isSelect) {
          this.resetFormArray();
        }
      }
    );
  }

  checkPopUpFormType(fieldType: string) {
    if (fieldType == 'text') {
      this.sharedservice.addNewField[2].options = [
        { label: 'email', value: 'Email' },
        { label: 'phone', value: 'Phone' },
        { label: 'text', value: 'Text' },
      ];
    } else if (fieldType == 'select') {
      this.sharedservice.addNewField[2].options = [
        { label: 'select', value: 'Select' },
        { label: 'MultiSelect', value: 'MultiSelect' },
      ];
      this.isSelect = true;
      this.addSelectBox();
    } else {
      this.sharedservice.addNewField[2].options = [
        { label: 'textarea', value: 'TextArea' },
      ];
    }
  }

  addSelectBox() {
    this.popUpForm.addControl(
      'options',
      new FormArray([
        new FormGroup({
          label: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
      ])
    );
  }

  getOptions(): any {
    return this.popUpForm.controls['options'];
  }

  addOption(): void {
    this.getOptions().push(
      new FormGroup({
        label: new FormControl('', Validators.required),
        value: new FormControl('', Validators.required),
      })
    );
  }

  deleteOption(index: number): void {
    if (this.getOptions().controls.length > 1) {
      this.getOptions().removeAt(index);
    }
  }
  resetFormArray() {
    this.getOptions().controls.splice(1);
  }
}
