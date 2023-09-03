import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { field } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {


  constructor() { }

  copmponentProperties:field[] = [
    {
      type:"text",
      fieldName:'TextBox',
      label:'username',
      defaultValue:'Abhi',
      isRemove:true,
    },
    {
      type:"number",
      fieldName:'NumberBox',
      label:'Age',
      defaultValue:18,
      isRemove:true,
    },
    {
      type:"boolean",
      fieldName:'RadioBox',
      label:'Gender',
      options:['male','female','other'],
      defaultValue:'male',
      isRemove:true,
    },
    {
      type:"dropdown",
      fieldName:'Dropdown',
      label:'Country',
      options:['IND','PAK','BAN','USA'],
      defaultValue:'IND',
      isRemove:true,
    }
  ]

  getCompProperties():Observable<field[]>{
    return of(this.copmponentProperties)
  }

}
