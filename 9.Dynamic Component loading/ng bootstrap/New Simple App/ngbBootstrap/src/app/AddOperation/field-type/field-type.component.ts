import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataProcessingService } from 'src/app/Service/data-processing.service';
import { AddFieldComponent } from '../add-field/add-field.component';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.css']
})
export class FieldTypeComponent {

  dropdewnValue = 'select form Control';

  constructor(public activeModel:NgbActiveModal){ }

}
