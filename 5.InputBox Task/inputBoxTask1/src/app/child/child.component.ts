import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Itemvalue} from'../itemvalue'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  Value: Itemvalue={
    value:'',
  };
  storeItem :Itemvalue[]= [];
  
  @Output() inputValueEvent = new EventEmitter<string[]>;
  @Output() removeInputValue = new  EventEmitter<string>;

  constructor(){}
  ngOnInit(): void {
    this.storeItem.push(this.Value)
  }

  createBox(){
   let createdBoxValue:Itemvalue={
    value:'',
   }
    this.storeItem.push(createdBoxValue);        
  }
  remove(indexOfremovedElement:number,valueOfremovedElement:any){  
   this.storeItem.splice(indexOfremovedElement,1); 
    this.removeInputValue.emit(valueOfremovedElement);
  }

  submit(){
     
      let b:string[]=[]
      this.storeItem.forEach(ele=>{
        if(ele.value){
          b.push(ele.value);
        }
      })
      this.inputValueEvent.emit(b);  
  }  
}
