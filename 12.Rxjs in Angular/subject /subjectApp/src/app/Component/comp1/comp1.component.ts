import { Component } from '@angular/core';
import { ShareService } from 'src/app/Service/share.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {


  constructor(private share:ShareService){

  }
  click(val:string){
    console.log(val);
    this.share.EmitValue(val);
  }
}
