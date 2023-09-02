import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02TakeInput';
  boxValue:string='DefaulTestValue'
  inputBoxValue(value:string){
    this.boxValue = value;
  }
}
