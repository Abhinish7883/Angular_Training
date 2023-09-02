import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { SharedService } from 'src/app/Service/shared.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements ICellRendererAngularComp {

  iCellRendererParams!:ICellRendererParams;
  rowDataType!:string;

  constructor(private shared:SharedService){ }

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.iCellRendererParams = params;

    try {

      this.rowDataType = params.colDef?.cellRendererParams.rowDataType;
      console.log(this.rowDataType);

    } catch (erroe) {
      console.log('error');
    }
  
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  deleteRow(){

    const rowId = this.iCellRendererParams.rowIndex;    
    const rowNode = this.iCellRendererParams.api.getRowNode(`${rowId}`);
    if (rowNode) {
      this.iCellRendererParams.api.applyTransaction({ remove: [rowNode.data] });
      this.iCellRendererParams.api.refreshCells();
    }

    this.shared.deleteRowData(rowNode?.data,this.rowDataType);

  }

}
