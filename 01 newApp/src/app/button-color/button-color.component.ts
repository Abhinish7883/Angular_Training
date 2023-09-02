import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-color',
  templateUrl: './button-color.component.html',
  styleUrls: ['./button-color.component.css']
})
export class ButtonColorComponent implements OnInit {

  constructor(){

  }
  colorName:string='';
  @Output() colorNameEvent = new EventEmitter<string>;

  ngOnInit(): void {
    
  }
  changeColorName(event:any)
  {
    this.colorName=event.target.name;
    console.log(this.colorName);
    this.colorNameEvent.emit(this.colorName);   

  }

}
