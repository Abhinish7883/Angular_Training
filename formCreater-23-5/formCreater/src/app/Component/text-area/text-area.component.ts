import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextAreaComponent extends BaseComponent implements OnInit {

 
ngOnInit(): void {
  this.addControl()
}

  
}
