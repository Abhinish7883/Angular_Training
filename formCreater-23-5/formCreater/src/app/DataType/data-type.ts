export interface options {
    label: string, 
    value: string 
}
export interface fieldMeta{
    displayName: string, 
    fieldName: string, 
    type: string, 
    minLength: number, 
    maxLength: number, 
    isRequired?: boolean,
    showErrorMessage?:string,
    requiredMessage?:string,
    minLengthMessage?:string,
    maxLengthMessage?:string,
    emailRegexMessage?:string,
    phoneRegexMessage?:string
    options?:options[] 
}

