import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

 
import { AppComponent } from './app.component';
import { ClassAComponent } from './Component/class-a/class-a.component';
import { ClassBComponent } from './Component/class-b/class-b.component';
import { ClassCComponent } from './Component/class-c/class-c.component';
import { ClassDComponent } from './Component/class-d/class-d.component';
import { ClassEComponent } from './Component/class-e/class-e.component';
import { ClassFComponent } from './Component/class-f/class-f.component';
import { ClassErrorComponent } from './Component/class-error/class-error.component';
import { JavaComponent } from './Component/java/java.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassAComponent,
    ClassBComponent,
    ClassCComponent,
    ClassDComponent,
    ClassEComponent,
    ClassFComponent,
    ClassErrorComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",
        component:ClassAComponent
      },
      {
        path:"A",
        component:ClassAComponent,
        
      },
      {
        path:"B",
        children:[
          {
            path:"",
            component:ClassBComponent
          },
          {
            path:"C",
            children:[
              {
                path:"",
                component:ClassCComponent
  
              },
              {
                path:"E",
                
                children:[
                  {
                    path:"",
                    component:ClassEComponent,
                  },
                  {
                    path:'C',
                    component:ClassCComponent
                  }
                ]
              },
              {
                path:"F",
                component:ClassFComponent
              },
            ]
          },
          {
            path:"D",
            component:ClassDComponent
          }  
      ]
      },
      {
        path:"C",
        children:[
            {
              path:"",
              component:ClassCComponent

            },
            {
              path:"D",
              component:ClassDComponent
            },
            {
              path:"E",
              children:[
                {
                  path:"",
                  component:ClassDComponent
                },
                {
                  path:"Java",
                  component:JavaComponent
                }
              ]
            },
            {
              path:"F",
              component:ClassFComponent
            },
        ]
      },
      {
        path:"D",
        children:[
          {
            path:":id",
            component:ClassDComponent
          }
        ], 
      },{
        path:"**",
        component:ClassErrorComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
