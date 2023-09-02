import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { BaseComponent } from "src/app/class/baseComponent";

import { SharedService } from "src/app/Service/shared.service";

import { DeleteProductComponent } from "../delete-product/delete-product.component";
import { EditProductComponent } from "../edit-product/edit-product.component";

@Component({
  selector: "app-product-order",
  templateUrl: "../../class/baseComponent.html",
  styleUrls: ["./product-order.component.css"],
})
export class ProductOrderComponent
  extends BaseComponent
  implements OnInit
{

  override title = "Product Order";
  @ViewChild("productGrid") override gridApi!: AgGridAngular;

  constructor(
    public override ngbModelRef: NgbModal,
    private shared: SharedService
  ) {
    super();
  }
  ngOnInit(): void {
    super.rowData = this.shared.orderProduct;
  }

  columnDefs: ColDef[] = [
    
    { field: "name", editable: true },
    { field: "quantity", editable: true },
    {
      field: "edit",
      cellRenderer: EditProductComponent,
      cellRendererParams: {
        isProductOrder: "true",
      },
    },
    {
      field: "delete",
      cellRenderer: DeleteProductComponent,
      cellRendererParams: {
        rowDataType : "Product Order",
      },
    },
  ];
}
