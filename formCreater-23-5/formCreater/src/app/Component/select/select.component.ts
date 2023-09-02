import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { log } from 'console';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SelectComponent extends BaseComponent implements OnInit {

  multiple = false;


  ngOnInit(): void {

    this.addControl();
    this.multiple = this.isMultiselect()

  }


  isMultiselect(): boolean {

    if (this.fieldmeta.type == "MultiSelect") {
      return true;
    }
    return false;
  }







}
