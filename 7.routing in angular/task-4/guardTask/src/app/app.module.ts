import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ListComponent } from './Component/list/list.component';
import { ShowErrorComponent } from './Component/show-error/show-error.component';

import {DataProcessingService} from './Servise/data-processing.service';
import { ShowDataComponent } from './Component/show-data/show-data.component'
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardGuard } from './Service/auth-guard.guard';
import { ResolveGuardGuard } from './Service/resolve-guard.guard';
import { ListGuardGuard } from './Service/list-guard.guard';
import { LoginGuard } from './Service/login.guard';

 const routes:Routes=[
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardGuard],
    children:[
      {
        path:"",
        redirectTo:"A",
        pathMatch:"full"
        
      },
      {
        path:":id",
        component:ShowDataComponent
      },
    ]
  },
  {
    path:"list",
    component:ListComponent,
    resolve:{TrackBy:ResolveGuardGuard},
    canActivate:[ListGuardGuard]
  },
  {
    path:"signUp",
    component:SignUpComponent,
    canActivate:[LoginGuard]
  },
  {
    path:"**",
    component:ShowErrorComponent
  }
 ]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    ListComponent,
    ShowErrorComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [DataProcessingService,CookieService,AuthGuardGuard,ResolveGuardGuard,ListGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
