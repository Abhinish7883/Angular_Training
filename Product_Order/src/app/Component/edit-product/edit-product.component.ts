import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { orderProduct, product } from "src/app/Interface/data-type";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements ICellRendererAngularComp {
  iCellRenderarParams!: any;

  isOrderProduct = false;

  constructor(private ngbModel: NgbModal) {}

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.iCellRenderarParams = params;
    try {
      this.isOrderProduct = params.colDef?.cellRendererParams.isProductOrder;

      console.log(this.isOrderProduct);
      
    } catch (error) {
      console.log("error");
    }
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw false;
  }

  editRow(content: any) {
    let updatedValue = this.ngbModel.open(content);

    updatedValue.result.then(
      (result) => {
        this.updateValue(result);
      },
      (reason) => console.log("model Rejected.......")
    );
  }

  updateValue(productDetail: orderProduct) {
    if (productDetail.quantity) {
      this.setRowValue("name", productDetail.name);
      this.setRowValue("quantity", productDetail.quantity);
    } else {
      this.setRowValue("name", productDetail.name);
    }
    this.iCellRenderarParams.api.refreshCells();
  }

  setRowValue(colName: string, value: any) {
    this.iCellRenderarParams.node.setDataValue(`${colName}`, value);
  }
}
