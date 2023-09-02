import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { base } from 'src/app/class/container';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-select-tyoype',
  templateUrl: './select-tyoype.component.html',
  styleUrls: ['./select-tyoype.component.css']
})
export class SelectTyoypeComponent extends base {


  selectedOption1 = 'select form Control';

  constructor(public activeModel:NgbActiveModal,private modal:NgbModal ){
    super();
  }

  AddOptionControl(){
    super.selectedOption=this.selectedOption1
        console.log(this.selectedOption);
        console.log(this.addFormGroup);
        
    if(this.selectedOption1=='dropdown'||this.selectedOption1=='boolean'){
      this.addFormGroup.addControl('Options',new FormArray([new FormControl('', Validators.required)]));
    }

    console.log(this.addFormGroup);
    
  }
  open(){
    this.modal.open(AddFormComponent);
  }
}
