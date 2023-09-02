import { Component, OnInit } from '@angular/core';
import { orderProduct, product } from './Interface/data-type';
import { SharedService } from './Service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Product_Order';

  product!:product[];
  orderProduct!:orderProduct[];
  constructor(private shared: SharedService) { }
  ngOnInit(): void {
     
  }

 


}
