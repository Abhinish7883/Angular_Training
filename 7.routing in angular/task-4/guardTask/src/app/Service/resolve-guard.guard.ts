import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  Resolve,  RouterStateSnapshot,  } from '@angular/router';

import { trackBy } from '../data-type';
import { DataProcessingService } from '../Servise/data-processing.service';
@Injectable()
export class ResolveGuardGuard implements Resolve<trackBy> {
   
  constructor(private  dataProcessing:DataProcessingService){

  }
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):trackBy  {

    return JSON.parse(this.dataProcessing.getCookie('TrackBy')||'');
    
    }
}
  

