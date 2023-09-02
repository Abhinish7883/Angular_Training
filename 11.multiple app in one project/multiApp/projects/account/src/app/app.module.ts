import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';

import { TableFormComponent } from 'src/app/table-form/table-form.component';

import { AccountAppComponent } from './app.component';

@NgModule({
  declarations: [
    AccountAppComponent
  ],
  imports: [
    // AppModule,
    // BrowserModule,
    CommonModule,
    RouterModule.forChild([

      {
        path:'',
        pathMatch:"full",
        redirectTo:"account1"
      },
      {
        path:'account1',
        component:AccountAppComponent,
        children:[
          {
            path:"table",
            data:{some_data:'AccountComponent'},
            component:TableFormComponent
          }
        ]
      },
     
    ]),
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AccountAppComponent]
})
export class AccountAppModule { }
