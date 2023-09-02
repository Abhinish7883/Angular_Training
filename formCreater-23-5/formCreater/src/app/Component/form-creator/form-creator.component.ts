import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class FormCreatorComponent implements OnInit,OnChanges{

  @Input()fields:any[] = [];
  @Input()myForm!: FormGroup;
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  componentContainer!: ViewContainerRef;
  constructor(private changeDetectorRef: ChangeDetectorRef) { 
    
  }

  ngOnInit(): void {
    
  }
 

  ngOnChanges(changes: SimpleChanges): void {   
    console.log(this.fields);
    this.createFormField(this.fields)    
  }
 
 
  createFormField(fields:any[]):void{
    fields.forEach(field =>{
      const componentRef = this.componentContainer.createComponent<any>(field.componentToRender);
      componentRef.instance.componentInput = field.componentInput;
    })
     
  

  }

}
