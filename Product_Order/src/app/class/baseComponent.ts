import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgGridAngular } from "ag-grid-angular";

import { AddProductComponent } from "../Component/add-product/add-product.component";

import { orderProduct, product } from "../Interface/data-type";

@Component({
  template: "",
})
export class BaseComponent {
  title!: string;
  ngbModelRef!: NgbModal;
  gridApi!: AgGridAngular;
  rowData: orderProduct[] | product[] = [];

  constructor() {}

  onAddbtn() {
    let addProduct = this.ngbModelRef.open(AddProductComponent);
    addProduct.componentInstance.isOrderProduct = this.isOrderProduct();
    this.addProduct(addProduct);
  }

  isOrderProduct(): boolean {
    if (this.title === "Product Order") {
      return true;
    } else {
      return false;
    }
  }

  addProduct(addCompRef: any) {
    addCompRef.result.then(
      (result: any) => {
        this.setRowDataForGrid(this.setRowData(result));
      },
      (reason: any) => console.log("model Rejected.......")
    );
  }

  setRowData(newRowData: any) {
  
    if (this.isOrderProduct()) {
      this.rowData.push({
        name: newRowData.name,
        quantity: newRowData.quantity,
      });
    } else {
      this.rowData.push({ name: newRowData.name });
    }
    return this.rowData;
  }

  onSearchProduct(searchValue: string) {
    this.setRowDataForGrid(this.filterData(searchValue));
  }


  filterData(searchValue: any) {

    return this.rowData.filter((data: any) => {
      if (data.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return data;
      }
    });
    
  }

  setRowDataForGrid(rowData: any[]): void {
    this.gridApi.api.setRowData(rowData);
  }
}
