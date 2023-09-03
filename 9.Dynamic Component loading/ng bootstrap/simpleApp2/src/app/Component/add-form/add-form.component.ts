import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { base } from 'src/app/class/container';
import { field } from 'src/app/dataType';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent extends base {


  selectedOption3!: string;
  constructor(public activeModel:NgbActiveModal){
    super();
  }

   
  ngOnInit():void{
    this.selectedOption3=super.selectedOption;   
  }
  getAddFormValue(formValue: FormGroup) {
    console.log(this.addFormGroup);
    
  let field: field = {
    type: this.selectedOption,
    fieldName: `Custom` + `${this.selectedOption3}`+`${this.count++}`,
    label: formValue.value.label,
    options: formValue.value.Options,
    defaultValue: '',
  };

  this.createComponent(field);
  this.addFormGroup.reset();
  
  console.log(this.selectedOption3);

  if(this.selectedOption3=='dropdown'||this.selectedOption3=='boolean'){
        this.addFormGroup.removeControl('Options');
        console.log('okkkkkkkk');
        
  }
  this.selectedOption = 'select form Control';

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
