import { ValidatorFn, Validators } from "@angular/forms";
import { fieldMeta } from "../DataType /data-type";

 

export class BaseField {

    displayName!: string;
    fieldName!: string;
    type!: string;
    minLength!: number;
    maxLength!: number;
    isRequired?: boolean ;
    requiredMessage?:string
    minLengthMessage?:string
    maxLengthMessage?:string
    emailRegexMessage?:string
    phoneRegexMessage?:string
    showErrorMassage?: string;

    validators:ValidatorFn[]=[];

    constructor(commonFieldProperty: fieldMeta) {

        this.displayName = commonFieldProperty.displayName;
        this.fieldName = commonFieldProperty.fieldName;
        this.type = commonFieldProperty.type;
        this.minLength = commonFieldProperty.minLength;
        this.maxLength = commonFieldProperty.maxLength;
        this.isRequired = commonFieldProperty.isRequired;
        this.requiredMessage = commonFieldProperty.requiredMessage;
        this.minLengthMessage = commonFieldProperty.minLengthMessage;
        this.maxLengthMessage= commonFieldProperty.maxLengthMessage;
        this.emailRegexMessage = commonFieldProperty.requiredMessage;
        this.phoneRegexMessage = commonFieldProperty.phoneRegexMessage;
        this.showErrorMassage = commonFieldProperty.showErrorMessage;
        this.setvalidation();
        
    }

    setvalidation():void{

    if(this.isRequired==true){      
      this.validators.push(Validators.required);
    }
    if(Number(this.minLength) > 0){
      this.validators.push(Validators.minLength(this.minLength));
    }
    if(Number(this.maxLength)>0){
      this.validators.push(Validators.maxLength(this.maxLength));
    }
  }


}
