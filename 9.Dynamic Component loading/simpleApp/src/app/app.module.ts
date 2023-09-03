import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextBoxComponent } from './Component/text-box/text-box.component';
import { NumberComponent } from './Component/number/number.component';
import { BooleanComponent } from './Component/boolean/boolean.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    NumberComponent,
    BooleanComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
