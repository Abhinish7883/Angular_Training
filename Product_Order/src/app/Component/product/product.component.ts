import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { BaseComponent } from 'src/app/class/baseComponent';
 
import { SharedService } from 'src/app/Service/shared.service';
 
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product',
  templateUrl: "../../class/baseComponent.html",
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {

  override title= "Product"

  @ViewChild("productGrid") override gridApi!: AgGridAngular;

  constructor(
    public override ngbModelRef: NgbModal,
    private shared: SharedService
  ) {
    super();
  }
  ngOnInit(): void {
    super.rowData = this.shared.product;
  }

  columnDefs: ColDef[] = [
    
    { field: "name", editable: true },
    {
      field: "edit",
      cellRenderer: EditProductComponent,
    },
    {
      field: "delete",
      cellRenderer: DeleteProductComponent,
    },
  ];

 

}
