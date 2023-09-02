import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooleanComponent } from './Component/boolean/boolean.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { NumberComponent } from './Component/number/number.component';
import { TextBoxComponent } from './Component/text-box/text-box.component';

import { FieldTypeComponent } from './AddOperation/field-type/field-type.component';
import { AddFieldComponent } from './AddOperation/add-field/add-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BooleanComponent,
    DropdownComponent,
    NumberComponent,
    TextBoxComponent,
    FieldTypeComponent,
    AddFieldComponent,    
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
