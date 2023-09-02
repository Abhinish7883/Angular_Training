import { Component, OnInit } from '@angular/core';
import { DataProcessingService } from 'src/app/Servise/data-processing.service';
import { trackBy } from 'src/app/data-type';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  usersTrackByDetail!:trackBy[];
  constructor( private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    try{
      // this.usersTrackByDetail = JSON.parse(this.dataProcessing.getCookie('TrackBy')||'');
      this.usersTrackByDetail = this.activatedRoute.snapshot.data['TrackBy'];
    console.log(this.usersTrackByDetail);
    }
    catch(error){
      console.log(error);
    } 
  }

}
