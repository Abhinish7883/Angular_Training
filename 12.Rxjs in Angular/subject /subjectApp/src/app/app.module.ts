import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './Component/comp1/comp1.component';
import { Comp2Component } from './Component/comp2/comp2.component';
import { Comp3Component } from './Component/comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
