import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { gelleryComponent } from './Component/gellery/gellery.component';
import { ContactUSComponent } from './Component/contact-us/contact-us.component';
import { AboutComponent } from './Component/about/about.component';
import { NotFoundErrorComponent } from './Component/not-found-error/not-found-error.component';
import { MainComponent } from './Component/main/main.component';

const router:Routes=[
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:"",
        redirectTo:"/home",
        pathMatch: 'full'
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"gellery",
        component:gelleryComponent
      },
      {
        path:"contact-us",
        component:ContactUSComponent
      },
      {
        path:"about",
        component:AboutComponent
      }
    ]
  },
  
  {
    path:"**",
    component:NotFoundErrorComponent
    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    gelleryComponent,
    ContactUSComponent,
    AboutComponent,
    NotFoundErrorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
