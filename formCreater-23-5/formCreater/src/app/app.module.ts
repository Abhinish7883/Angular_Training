import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './Component/input-text/input-text.component';
import { SelectComponent } from './Component/select/select.component';
import { TextAreaComponent } from './Component/text-area/text-area.component';
import { BaseComponent } from './Component/base/base.component';
import { FormCreatorComponent } from './Component/form-creator/form-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckBoxComponent } from './Component/check-box/check-box.component';
 

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    SelectComponent,
    TextAreaComponent,
    BaseComponent,
    FormCreatorComponent,
    CheckBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  