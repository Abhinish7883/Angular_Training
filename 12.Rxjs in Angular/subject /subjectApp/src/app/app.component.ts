import { Component, OnInit } from '@angular/core';
import { ShareService } from './Service/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subjectApp';
  constructor(private share:ShareService){ }

  ngOnInit(): void { 
    
    console.log(this.share.data);
    this.share.data
    
    
  }
  
}
