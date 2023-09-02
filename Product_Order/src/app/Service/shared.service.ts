import { ElementRef, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../Component/add-product/add-product.component';
import { orderProduct, product } from '../Interface/data-type';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private ngbModelRef: NgbModal) { }

  product:product[] = [

    {
      name:'Shelf Expert'
    },
    {
      name:'Rocking Chair'
    },
    {
      name:'Fantastic Furniture'
    },
    {
      name:'Woods Screws'
    },
    {
      name:'SofaSoGood'
    },
    {
      name:'Kitchen Assistant'
    },
    {
      name:'No More Chores'
    },
    {
      name:'Chop Bot'
    },
    {
      name:'Kitchen Magic'
    },
    {
      name:'Kitchen Magic'
    },
    {
      name:'Kitchen Magic'
    }
  ]


  orderProduct:orderProduct[] = [
    
    {
      name:'WeCare',
      quantity:13
    },
    {
      name:'Rocking Chair',
      quantity:13
    },
    {
      name:'Soapy',
      quantity:13
    },
    {
      name:'Woods Screws',
      quantity:13
    },
    {
      name:'SofaSoGood',
      quantity:13
    },
    {
      name:'Kitchen Assistant',
      quantity:13
    },
    {
      name:'No More Chores',
      quantity:13
    },
    {
      name:'Beauty Bay',
      quantity:13
    },
    {
      name:'Kitchen Magic',
      quantity:13
    },
    {
      name:'Kitchen Magic',
      quantity:13
    },
    {
      name:'Simple Needs',
      quantity:13
    }
  ]

  deleteRowData(data:any,rowDataType:string){
     
    if(rowDataType==='Product Order'){
      this.deleteData(this.orderProduct,data)
    }else {
      this.deleteData(this.product,data)
    }
    
  }

  deleteData(productType:any[],data:any){

    productType.splice(productType.findIndex(find=> find.name===data.name),1);  
  }

 
}
