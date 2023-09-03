import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooleanComponent } from './Component/boolean/boolean.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { NumberComponent } from './Component/number/number.component';
import { TextBoxComponent } from './Component/text-box/text-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectTyoypeComponent } from './Component/select-tyoype/select-tyoype.component';
import { AddFormComponent } from './Component/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BooleanComponent,
    DropdownComponent,
    NumberComponent,
    TextBoxComponent,
    SelectTyoypeComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
