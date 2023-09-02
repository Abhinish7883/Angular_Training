import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDatePipe } from './pipe/custom-date.pipe';
import { CustomDateComponent } from './component/custom-date/custom-date.component';
import { DateDifferencePipe } from './pipe/date-difference.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomDatePipe,
    CustomDateComponent,
    DateDifferencePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
