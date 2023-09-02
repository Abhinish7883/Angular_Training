import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { CookieService } from 'ngx-cookie-service';
import { userData} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {

  constructor(private router:Router, private cookies:CookieService) { }

  setDataTosessionStorage(userDataStorage:userData[]):void{
    sessionStorage.setItem('userData',JSON.stringify(userDataStorage)); 
  }

  getDataTosessionStorage():string|null{
    return sessionStorage.getItem('userData')
  }

  getCookie(name:string):string|null{
     return this.cookies.get(name)
  }

  setcookie(name:string,value:string):void{
    this.cookies.set(name,value);
  }

  deleteCookie(name:string){
    this.cookies.delete(name, '/', 'localhost', false, 'Lax');
  }

  redirectTo(route:string){
    this.router.navigateByUrl(`/${route}`);
  }
}
