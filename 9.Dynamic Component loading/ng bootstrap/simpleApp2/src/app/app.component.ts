import {
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { field } from 'src/app/dataType';
import { DataProcessingService } from './Service/data-processing.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormComponent } from './Component/add-form/add-form.component';
import { SelectTyoypeComponent } from './Component/select-tyoype/select-tyoype.component';
import { expand } from 'rxjs';
import { base } from './class/container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [NgbModalConfig, NgbModal]
})
export class AppComponent extends base {
  title = 'simpleApp2';


 
  @ViewChild('dynamicComp', { read: ViewContainerRef, static: true })
  componentRef2!: ViewContainerRef;

  constructor(private dataProcess: DataProcessingService, config: NgbModalConfig, private modalService: NgbModal) {
    super();
    config.backdrop = 'static';
		config.keyboard = false;

    this.dataProcess.getCompProperties().subscribe((data) => {
      this.fieldProperties = data;
    });
    
    
  }

  ngOnInit(): void {
    this.componentRef = this.componentRef2;
    this.fieldProperties.forEach((field: field) => {
      this.createComponent(field);
    });
    
  }

   submitForm() {
    let a = this.reactiveFormContainer.value;
    console.log(a);
  }
  
	open() {
		let a = this.modalService.open(SelectTyoypeComponent)
    console.log(a);
    
	}
}
