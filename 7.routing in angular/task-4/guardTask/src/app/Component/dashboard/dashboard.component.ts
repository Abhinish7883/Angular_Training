import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataProcessingService } from 'src/app/Servise/data-processing.service';
import { trackBy , userData} from '../../data-type';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  userName!:string;
  userType!:string;
  email!:string
  trackByList=false;
  constructor(private router:Router,
              private dataProcessing:DataProcessingService,
              private activateRoute:ActivatedRoute
            ){ }

   ngOnInit(): void {
    
    try{
      let userInfo:userData = JSON.parse( this.dataProcessing.getCookie('userDetail')||'');
      this.setUserInfo(userInfo.username,userInfo.isAdmin,userInfo.email);
      this.updateTrackByRecord('A',this.email);
    }catch(error){
      console.log(error);
    }    
   }
   
  setUserInfo(username:string,isAdmin:boolean,userID:string):void{

    this.userName = username;
    this.email= userID;
    if(isAdmin){
      this.userType='Admin';
      this.trackByList=true;
    }else{
      this.userType='User';
      this.trackByList=false;
    } 

  }

  logout():void{

    this.dataProcessing.deleteCookie('userDetail');
    this.dataProcessing.redirectTo('login');

  }

  changeRoute(route:string):void{
    this.updateTrackByRecord(route,this.email);
    this.router.navigate([`${route}`], {relativeTo: this.activateRoute});
  }
  
  updateTrackByRecord(route:string,userID:string):void{

    let checkcookies = this. dataProcessing.getCookie('TrackBy')
 
    if(checkcookies){

      let trackByRecourdOfUsers:trackBy[] = JSON.parse(checkcookies);
      let findUserId = trackByRecourdOfUsers.findIndex(user => user.email==userID);

      if(findUserId>=0){
          trackByRecourdOfUsers[findUserId].trackBy.push(route)
       }else{
          trackByRecourdOfUsers.push({email:userID,trackBy:[route]});
       }
       this.dataProcessing.setcookie('TrackBy',JSON.stringify(trackByRecourdOfUsers));
       console.log('okkk4');
       

    }
    else{
      this.dataProcessing.setcookie('TrackBy',JSON.stringify([{email:userID,trackBy:['A']}] ))
      console.log('okk');
      
    }
  }
}
