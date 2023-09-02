import { AfterViewChecked,Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProcessingService } from '../data-processing.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table-form',
  standalone: true,
  imports: [CommonModule],
  providers:[DataProcessingService],
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit, AfterViewChecked{


  formData!:any;
  keys!:any;
  values:any;
  localStoreName!:string
 
  constructor(private dataprocessing:DataProcessingService,private activateRoute:ActivatedRoute){ }
  
  ngOnInit(): void {
    this.activateRoute.data.subscribe(data=>{
      this.localStoreName=data['some_data'];
    });
    this.getData();
  }

  ngAfterViewChecked(): void {
    this.getData();
  }
  
  getData(){
    this.formData=this.dataprocessing.getDataTolocalStore(`${this.localStoreName}`);
    this.keys = Object.keys(this.formData);
    this.values = Object.values(this.formData);
  }
}