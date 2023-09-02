import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  defaultValue = 'Male';
  genderDetail = [
    {
      id: 1,
      value: 'Male',
    },
    {
      id: 2,
      value: 'Female',
    },
    {
      id: 3,
      value: 'other',
    },
  ];
  defaultCountry = 'IND';
  countryDetail = ['IND', 'PAK', 'AUS', 'USA', 'UAE', 'JAPAN'];
hobbiesDetail = [
  {
    id:1,
    value:'cricket',
    isSelected:false,
  },
  {
    id:2,
    value:'football',
    isSelected:false,
  },
  {
    id:3,
    value:'hockey',
    isSelected:false,
  }
]
  formData1: any;
  formSummit(formsData: NgForm) {
    this.formData1 = formsData.value;
    formsData.reset();
  }
  editForm(formData: NgForm) {
    formData.setValue({ ...this.formData1 });
  }
  editnameDetail(formData: NgForm) {
    formData.form.patchValue({
      nameDetail: {
        fname: this.formData1['nameDetail'].fname,
        lname: this.formData1['nameDetail'].lname,
      },
    });
  }
  onChangeHobbies(){
    
  }
}
