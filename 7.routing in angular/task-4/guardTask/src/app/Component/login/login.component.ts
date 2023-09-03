import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 
import { CookieService } from 'ngx-cookie-service';
import {DataProcessingService} from '../../Servise/data-processing.service';
import { trackBy , userData} from '../../data-type';


 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm!:FormGroup;
  constructor(private dataProcessing:DataProcessingService,private cookies:CookieService){

    this.loginForm = new FormGroup({ 

      email:new FormControl(''),
      password:new FormControl(''),
    })
  }

   

  onSubmit(loginForm:FormGroup){
    console.log(loginForm); 
    this.loginProcess(loginForm.value);
    console.log("okkkk");
    
  }
  
  loginProcess(loginFormValue:userData){
    
    let usesRecordJSON = this.dataProcessing.getDataTosessionStorage()
    if(usesRecordJSON){

      let usersRecord:userData[] = JSON.parse(usesRecordJSON);
      let loginUserRecord = usersRecord.find(user=> user.email==loginFormValue.email);
      console.log(loginUserRecord);
      
      if(loginUserRecord){

        if(loginUserRecord.password==loginFormValue.password){
          
          // alert('welcome to Dashboard');
          this.cookies.set('userDetail',JSON.stringify(loginUserRecord));
          this.dataProcessing.redirectTo('dashboard');

        }else{
          alert("invalid password");
        }
      }else{
         
        alert("not registered");
        
      }
    }else{
       
      alert("your current Datatase is Empty...");
       
    }

  }

   

}
