import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
  title = 'simpleApp';

  fieldProperties!: field[];
  reactiveFormContainer!: FormGroup;
  addFormGroup!: FormGroup;

  selectedOption: string = 'select form Control';
  count=0;
  @ViewChild('dynamicComp', { read: ViewContainerRef, static: true })
  componentRef!: ViewContainerRef;

  constructor(private dataProcess: DataProcessingService) {
    this.dataProcess.getCompProperties().subscribe((data) => {
      this.fieldProperties = data;
    });

    this.reactiveFormContainer = new FormGroup({});

    this.addFormGroup = new FormGroup({
      label: new FormControl('', Validators.required),
      // Options:new FormArray([new FormControl('', Validators.required)])
     
    });
  }

  ngOnInit(): void {
    this.fieldProperties.forEach((field: field) => {
      this.createComponent(field);
    });
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

  submitForm() {
    let a = this.reactiveFormContainer.value;
    console.log(a);
  }
  
  AddOptionControl(){
    console.log(this.addFormGroup);
    if(this.selectedOption=='dropdown'||this.selectedOption=='boolean'){
      this.addFormGroup.addControl('Options',new FormArray([new FormControl('', Validators.required)]));
    }
  }
  getAddFormValue(formValue: FormGroup) {
    
    
    let field: field = {
      type: this.selectedOption,
      fieldName: `Custom` + `${this.selectedOption}`+`${this.count++}`,
      label: formValue.value.label,
      options: formValue.value.Options,
      defaultValue: '',
    };

    this.createComponent(field);
    this.addFormGroup.reset();
    this.selectedOption = 'select form Control';

    if(this.selectedOption=='dropdown'||this.selectedOption=='boolean'){
          this.addFormGroup.removeControl('Options');
    }

  }

  getOptions(): any {
    return this.addFormGroup.controls['Options'];
  }

  addOption(): void {
    this.getOptions().push(new FormControl('', Validators.required));
  }

  deleteOption(index: number): void {
    this.getOptions().removeAt(index);
  }
}
