import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-e',
  templateUrl: './class-e.component.html',
  styleUrls: ['./class-e.component.css']
})
export class ClassEComponent {

  constructor(private route:Router,private activeRoute:ActivatedRoute){}
  navigateRouteProgramatically(){
    // this.route.navigate(['C'],{relativeTo:this.activeRoute,skipLocationChange: false});
    this.route.navigateByUrl('C');
  }
}
