import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Service/share.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{

  data!:any;

  constructor(private share:ShareService){ }

  ngOnInit(): void {
    this.share.data.subscribe({
      next:(val:any)=>this.data= val
    })
  }
}
