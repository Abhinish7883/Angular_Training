import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { field } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {

  constructor() { }
  appComp:field[] = 
  [
    {
      type:"input",
      fieldName:'inputBox',
      label:'username',
      defaultValue:'Abhi',
    },
    {
      type:"checkBox",
      fieldName:'checkBox',
      label:'hobbies',
      options:['cricket', 'badminton','song'],
      defaultValue:'cricket',
    },
    {
      type:"radio",
      fieldName:'RadioBox',
      label:'Gender',
      options:['male','female','other'],
      defaultValue:'male',
    },
    {
      type:"dropdown",
      fieldName:'Dropdown',
      label:'Country',
      options:['IND','PAK','BAN','USA'],
      defaultValue:'IND',
    }
  ]

  accountComp:field[] = 
  [
    {
      type:"input",
      fieldName:'inputBox-AccountComp',
      label:'username',
      defaultValue:'Abhi',
    },
    {
      type:"checkBox",
      fieldName:'NumberBox-AccountComp',
      label:'hobbies',
      options:['cricket', 'badminton','song'],
      defaultValue:18,
    },
    {
      type:"radio",
      fieldName:'RadioBox-AccountComp',
      label:'Gender',
      options:['male','female','other'],
      defaultValue:'male',
    },
    {
      type:"dropdown",
      fieldName:'Dropdown-AccountComp',
      label:'Country',
      options:['IND','PAK','BAN','USA'],
      defaultValue:'IND',
    }
  ]

  userComp:field[] = 
  [
    {
      type:"input",
      fieldName:'inputBox-UserComp',
      label:'username',
      defaultValue:'Abhi',
    },
    {
      type:"checkBox",
      fieldName:'NumberBox-UserComp',
      label:'hobbies',
      options:['cricket', 'badminton','song'],
      defaultValue:18,
    },
    {
      type:"radio",
      fieldName:'RadioBox-UserComp',
      label:'Gender',
      options:['male','female','other'],
      defaultValue:'male',
    },
    {
      type:"dropdown",
      fieldName:'Dropdown-UserComp',
      label:'Country',
      options:['IND','PAK','BAN','USA'],
      defaultValue:'IND',
    }
  ]

  getCompPropertiesApp():Observable<field[]>{
    return of(this.appComp)
  }
  getCompPropertiesAccount():Observable<field[]>{
    return of(this.accountComp)
  }
  getCompPropertiesUser():Observable<field[]>{
    return of(this.userComp)
  }

  setDataTolocalStore(keyname:string,value:any){

    localStorage.setItem(`${keyname}`,JSON.stringify(value));
  }

  getDataTolocalStore(compName:string):string{

   let formData =  localStorage.getItem(`${compName}`)
    if(formData){
      return JSON.parse(formData);
    }else{
      return 'data not found......';
    }
  }

  
}
