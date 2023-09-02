import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputBoxTask1';
  storeInputBoxValue:string[]=[];
  inputvvv(e:string[]){
    this.storeInputBoxValue =e;
  }

  revInput(b:string){

    if(this.storeInputBoxValue.includes(b)){
      this.storeInputBoxValue.splice(this.storeInputBoxValue.indexOf(b),1);
    }
    
  }
}
