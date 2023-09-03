import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { field } from 'src/app/dataType';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css'],
})
export class AddFieldComponent implements OnInit {
  fieldType!: string;
  addFormGroup!: FormGroup;
  
  constructor(public activeModel: NgbActiveModal) {
    this.addFormGroup = new FormGroup({
      label: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.addControl();
  }

  addControl() {
    if (this.fieldType == 'boolean' || this.fieldType == 'dropdown') {
      this.addFormGroup.addControl(
        'Options',
        new FormArray([new FormControl('', Validators.required)])
      );
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
