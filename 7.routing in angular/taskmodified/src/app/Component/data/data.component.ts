import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  studentDetails=[
    {
      id:"A",
      data:[
        {
          roll:1,
          name:'Abhinish'
        },
        {
          roll:2,
          name:'Abhi'
        },
        {
          roll:3,
          name:'Parv'
        },
        {
          roll:4,
          name:'Shashank'
        }
      ]
    },
    {
      id:"B",
      data:[
        {
          roll:1,
          name:'samrat'
        },
        {
          roll:2,
          name:'shidhant'
        },
        {
          roll:3,
          name:'aayush'
        },
        {
          roll:4,
          name:'Shashank'
        }
      ]
    },{
      id:"C",
      data:[
        {
          roll:1,
          name:'yesh'
        },
        {
          roll:2,
          name:'Abhi'
        },
        {
          roll:3,
          name:'jenish'
        },
        {
          roll:4,
          name:'gita'
        }
      ]
    },{
      id:"D",
      data:[
        {
          roll:1,
          name:'ritesh'
        },
        {
          roll:2,
          name:'shivani'
        },
        {
          roll:3,
          name:'pawan'
        },
        {
          roll:4,
          name:'nitin'
        }
      ]
    }
  ]
 studentDetail:any;
 showError=false;
  constructor(private activeRoute:ActivatedRoute,private router:Router ){}
  ngOnInit(): void {
      // console.log(this.activeRoute.snapshot.paramMap.get('id'))
      this.activeRoute.params.subscribe(params => { 
        this.getStudentDetail(params['id'])
    });
  }

  getStudentDetail(routeId:string){
   let a = this.studentDetails.find(studentDetail=> studentDetail.id==routeId)
   if(a!=undefined){
    this.studentDetail=a.data;
    this.showError=false
   }
   else{
    this.showError=true;
    // this.router.navigateByUrl('A');
   }
  }
}
