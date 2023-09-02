import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { AttributeDircetiveDirective } from './attribute-dircetive.directive';
import {CreateAttributeDirective} from './Create-Attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    AttributeDircetiveDirective,
    CreateAttributeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
