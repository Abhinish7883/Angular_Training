import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstInputBlurDirective } from './first-input-blur.directive';
import { DemoComponent } from './Component/demo/demo.component';
import { Demo2Component } from './Component/demo2/demo2.component';
import { CommonModule } from '@angular/common';
 

@NgModule({
    declarations: [
        AppComponent,
        FirstInputBlurDirective,
        DemoComponent,
        Demo2Component,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
    ],
    exports:[DemoComponent,
        Demo2Component]
})
export class AppModule { }
