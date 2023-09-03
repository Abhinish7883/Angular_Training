import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataProcessingService } from '../Servise/data-processing.service';

@Injectable()
export class ListGuardGuard implements CanActivate {

  constructor(private dataProcess:DataProcessingService,private router:Router,private activatedRoute:ActivatedRoute){ }

  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
    
    let checkuserInfo= this.dataProcess.getCookie('userDetail');
    console.log(checkuserInfo);
    console.log(this.activatedRoute);
    console.log(route);
    
    
    if(checkuserInfo){
      let userInfo = JSON.parse(checkuserInfo);
      console.log();
      
      console.log(userInfo.isAdmin);
      
      if(userInfo.isAdmin){
        return true;
      }else{
        // alert('You are not Admin....');
        this.router.navigateByUrl('dashboard');
        return false;
      }
    }else{
      // alert('please login...');
      this.router.navigateByUrl('/login');
      // this.router.navigateByUrl('');
      return false;
    }
  }
  
}
