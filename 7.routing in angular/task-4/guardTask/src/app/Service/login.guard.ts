import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataProcessingService } from '../Servise/data-processing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private dataProcessing:DataProcessingService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      if(this.dataProcessing.getCookie('userDetail')){
        console.log('okkkkkkk');
        this.route.navigateByUrl('dashboard');
        return false
      }
     return true;
  }
  
}
