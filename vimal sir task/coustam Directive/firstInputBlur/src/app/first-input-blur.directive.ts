import {  Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Directive({
  selector: '[firstInputBlur]'
})
export class FirstInputBlurDirective implements OnInit {

  constructor(private divRef:ElementRef) {   
  }
  // count=0;
  ngOnInit():void{   
    this.divRef.nativeElement.querySelector("Input").focus();
    
    // console.log(this.divRef.nativeElement.querySelector("Input"));
    // this.findInputBox(this.divRef.nativeElement.childNodes);

  }

  // findInputBox(HtmlEle:NodeList){    
  //   if(HtmlEle.length>=1){
  //     console.log('e');
      
  //     this.focusInput(HtmlEle[this.count])
  //   }else{
  //     this.focusInput(HtmlEle[this.count++]);
  //     console.log('runnn');
      
  //   }
  // }

  // focusInput(Element:any):void{
 
  //     if(Element.type== 'text')
  //     {
  //       Element.focus();
  //     }
  //     else{
               
  //       this.findInputBox(Element.childNodes);
  //     }
    
  // }

}
