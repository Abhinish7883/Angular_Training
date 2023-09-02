import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

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
  constructor(private activeRoute:ActivatedRoute ){}
  ngOnInit(): void {
      this.activeRoute.params.subscribe(params => { 
        this.getStudentDetail(params['id'])
    });
  }

  getStudentDetail(routeId:string){
   let findStudentDetail = this.studentDetails.find(studentDetail=> studentDetail.id==routeId)
   if(findStudentDetail!=undefined){
    this.studentDetail=findStudentDetail.data;
    this.showError=false
   }
   else{
    this.showError=true;
    // this.router.navigateByUrl('A');
   }
  }
}
