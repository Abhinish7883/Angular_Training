import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class InputTextComponent extends BaseComponent implements OnInit {

  inputType!:string;
  ngOnInit(): void {
     this.addControl();
    if (Array.isArray(this.fieldmeta.type)) {
      this.inputType = this.fieldmeta.type[0];
    }
    else{
      this.inputType = this.fieldmeta.type;
    }
  }



}

