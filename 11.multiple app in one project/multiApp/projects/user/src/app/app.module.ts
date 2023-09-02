import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TableFormComponent } from 'src/app/table-form/table-form.component';

import { UserAppComponent } from './app.component';

@NgModule({
  declarations: [
    UserAppComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableFormComponent,
    RouterModule.forChild(
      [
        {
          path:'',
          pathMatch:"full",
          redirectTo:"user"
        },
        {
          path:'user',
          component:UserAppComponent,
          children:[
            {
              path:"table",
              data:{some_data:'UserComponent'},
              component:TableFormComponent
            }
          ]
        },
      ]
    )
  ],
  providers: [],
  bootstrap: [UserAppComponent]
})
export class AppModule { }
