import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-d',
  templateUrl: './class-d.component.html',
  styleUrls: ['./class-d.component.css']
})
export class ClassDComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute){  }

  id!:number;

  studentDetails=[
    {
      id:1,
      name:"Abhi"
    },
    {
      id:2,
      name:"parv"
    },
    {
      id:3,
      name:"shashank"
    },
    {
      id:4,
      name:"Abhinish"
    }
]
studentDetail:any;
  // to get value
  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.getDtail(this.id)
  }

  // get Dtail of student
  getDtail(id:number){
    this.studentDetails.forEach(data=>{
      if(id==data.id)
      this.studentDetail=data
    })
  }

}
