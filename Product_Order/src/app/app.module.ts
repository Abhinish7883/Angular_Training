import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductOrderComponent } from './Component/product-order/product-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { EditProductComponent } from './Component/edit-product/edit-product.component';
import { DeleteProductComponent } from './Component/delete-product/delete-product.component';
import { ProductComponent } from './Component/product/product.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './Component/add-product/add-product.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ProductOrderComponent,
    EditProductComponent,
    DeleteProductComponent,
    ProductComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
