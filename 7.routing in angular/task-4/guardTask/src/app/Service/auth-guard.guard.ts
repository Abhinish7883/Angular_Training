import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { DataProcessingService } from '../Servise/data-processing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private dataProcess:DataProcessingService,private router:Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean  {
      console.log(route);

      if(this.dataProcess.getCookie('userDetail')){
        return true;
      }else{
        alert('please complate login process');
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  
}
