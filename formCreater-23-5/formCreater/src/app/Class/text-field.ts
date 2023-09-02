import { Validators } from "@angular/forms";
import { fieldMeta } from "../DataType /data-type";
import { BaseField } from "./base-field";

export class TextField extends BaseField {
    
    constructor(fieldProperties:fieldMeta){
        super(fieldProperties);
        this.setEmailPhoneValidation();
    }

    setEmailPhoneValidation():void{
        if (this.type=='Email') {
            this.validators.push(Validators.email);
        }

        if(this.type == "Phone"){
            this.validators.push(Validators.pattern('^\\d{10}$'))
        }
    }
}
