import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassAComponent } from './Component/class-a/class-a.component';
import { ClassBComponent } from './Component/class-b/class-b.component';
import { ClassCComponent } from './Component/class-c/class-c.component';
import { ClassDComponent } from './Component/class-d/class-d.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassAComponent,
    ClassBComponent,
    ClassCComponent,
    ClassDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
