import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customDate';

  todayDate = new Date()

  ngOnInit(): void {
    
  }

  inputDateFunc(inputDate1:string):void
  {
    console.log(inputDate1);
    
  }
  
 
  

}
