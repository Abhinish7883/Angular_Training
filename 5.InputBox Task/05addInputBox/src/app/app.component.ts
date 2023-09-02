import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05addInputBox';
  inputValue:string='';
  inputValues:string[]=[];
  addRemovBbtntagle:boolean = false;
  takeInputValueFromChild(inputValuefromClild:string[]){
    this.inputValue=inputValuefromClild.join()
    this.addRemovBbtntagle=true;
  }

  takeInputFromTextBox(){
    if(this.inputValue){
      this.inputValues = this.inputValue.split(',');
    }  
    this.inputValue=''
    this.addRemovBbtntagle=true;
  }
  enableInputTextBox(){
    this.addRemovBbtntagle=false 
  }
}
