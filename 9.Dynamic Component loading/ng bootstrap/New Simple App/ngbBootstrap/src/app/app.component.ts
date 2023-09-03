import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddFieldComponent } from './AddOperation/add-field/add-field.component';
import { FieldTypeComponent } from './AddOperation/field-type/field-type.component';
import { BooleanComponent } from './Component/boolean/boolean.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { NumberComponent } from './Component/number/number.component';
import { TextBoxComponent } from './Component/text-box/text-box.component';

import { field } from './dataType';
import { DataProcessingService } from './Service/data-processing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngbBootstrap';

  fieldProperties!: field[];
  reactiveFormContainer!: FormGroup;
  @ViewChild('dynamicComp', { read: ViewContainerRef, static: true })
  componentRef!: ViewContainerRef;
  count = 0;
  constructor(
    private dataProcess: DataProcessingService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.reactiveFormContainer = new FormGroup({});
    this.dataProcess.getCompProperties().subscribe((data) => {
      this.fieldProperties = data;
    });
  }

  ngOnInit(): void {
    this.fieldProperties.forEach((field: field) => {
      this.createComponent(field);
    });
  }

  submitForm() {
    console.log(this.reactiveFormContainer.value);
    this.reactiveFormContainer.reset();
  }

  open() {
    let fieldType = this.modalService.open(FieldTypeComponent);
    fieldType.result.then(
      (data) => {
        // console.log(data);
        let addField = this.modalService.open(AddFieldComponent);
        addField.componentInstance.fieldType = data;
        addField.result.then(
          (addFormGroup) => {
            console.log(data);
            this.createComponent({
              type: data,
              fieldName: `Custom` + `${data}` + `${this.count++}`,
              label: addFormGroup.value.label,
              options: addFormGroup.value.Options,
              defaultValue: '',
            });
          },
          (reason) => {
            console.log('addfield Rejected : ' + reason); // when rejected.....
          }
        );
      },
      (reason) => {
        console.log('fieldType Rejected : ' + reason); // when rejected.....
      }
    );
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
