import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './Component/input/input.component';
import { RadioComponent } from './Component/radio/radio.component';
import { CheckBoxComponent } from './Component/check-box/check-box.component';
import { DropdownComponent } from './Component/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from './Component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RadioComponent,
    CheckBoxComponent,
    DropdownComponent,
    MainComponent
  ],
  exports:[
    InputComponent,
    RadioComponent,
    CheckBoxComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
       
      {
        path:'',
        pathMatch:'full',
        redirectTo:'app'
      },
      {
        path:'app',
        component:AppComponent,
        children:[
          {
            path:'table',
            data:{some_data: 'AppComponent'},
            loadComponent: () => import('./table-form/table-form.component').then(mod => mod.TableFormComponent)
          }
        ]
      }
      ,
       {
        path:"account",
        loadChildren: ()=>import('../../projects/account/src/app/app.module').then(mod =>mod.AccountAppModule)
      },
      {
        path:'user',
        loadChildren:() => import('../../projects/user/src/app/app.module').then(mod => mod.AppModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

export { RadioComponent, InputComponent, DropdownComponent, CheckBoxComponent };
