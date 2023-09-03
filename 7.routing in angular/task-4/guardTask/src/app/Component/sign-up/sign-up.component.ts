import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {DataProcessingService} from '../../Servise/data-processing.service';
import { trackBy , userData} from '../../data-type';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm!:FormGroup;

  constructor(private dataProcessing:DataProcessingService,private router:Router){
     this.signUpForm = new FormGroup({
        username:new FormControl(''),
        email:new FormControl(''),
        password:new FormControl(''),
        isAdmin:new FormControl('' ),
     })
  }

  onSubmit(signUpForm:FormGroup){
    console.log(signUpForm);
    this.signUpProcess(signUpForm.value);
    console.log("sucessfull....."); 
  }

  signUpProcess(userData:userData):void{
    let sessionStorageUserData=this.dataProcessing.getDataTosessionStorage();
    if(!sessionStorageUserData)
    {
      let userDataStorage=[userData];
      this.dataProcessing.setDataTosessionStorage(userDataStorage);
      this.dataProcessing.redirectTo('login');
      console.log('runnn1');
    }
    else{

      JSON.parse(sessionStorageUserData)//**
      let userDataStorage=JSON.parse(sessionStorageUserData)

      if(this.duplicateUserValidate(userDataStorage,userData)){

        userDataStorage.push(userData);
        this.dataProcessing.setDataTosessionStorage(userDataStorage)
        this.dataProcessing.redirectTo('login');

      }else{
        alert("user Already have Account..");
      }
    } 
  }

  duplicateUserValidate(userDataStorage:userData[],userData:userData):boolean{

    if(!userDataStorage.find(data=> data.email==userData.email)){
      return true; 
    }else{
      return false;
    }
  }
   
}
