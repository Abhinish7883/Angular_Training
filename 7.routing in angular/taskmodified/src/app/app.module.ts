import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './Component/main/main.component';
import { ErrorMessageComponent } from './Component/error-message/error-message.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { DataComponent } from './Component/data/data.component';

const routers:Routes=[
  
  {
    path:"",
    redirectTo:"main",
    pathMatch:"full"
    
    
     
  }, 
  {
    path:"main",
    component:MainComponent,
    children:[
      {
        path:"",
        redirectTo:"A",
        pathMatch:"full"
        
      },
      {
        path:":id",
        component:DataComponent
      },
    ]
  },
  {
    path:"**",
    component:ErrorMessageComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ErrorMessageComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
