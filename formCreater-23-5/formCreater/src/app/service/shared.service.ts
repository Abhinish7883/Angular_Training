import { Injectable } from '@angular/core';
import { fieldMeta } from '../DataType /data-type';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  fieldMetaData: fieldMeta[] = [
    {
      displayName: 'Name',
      fieldName: 'name',
      type: 'Text',
      minLength: 5,
      maxLength: 255,
      isRequired: true,
      requiredMessage: 'this is required field',
      minLengthMessage: 'MinLength Error message...',
      maxLengthMessage: 'MaxLength Error message...',
    },
    {
      displayName: 'Email',
      fieldName: 'email',
      type: 'Email',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      minLengthMessage: 'MinLength Error message...',
      maxLengthMessage: 'MaxLength Error message...',
      emailRegexMessage: 'invalid Email........',
    },
    {
      displayName: 'Mobile',
      fieldName: 'mobile',
      type: 'Phone',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      phoneRegexMessage: 'invalid Phone number',
    },
    {
      displayName: 'Textarea',
      fieldName: 'Description',
      type: 'TextArea',
      minLength: 0,
      maxLength: 2000,
      isRequired: true,
    },
    {
      displayName: 'Country',
      fieldName: 'country',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'India', value: 'India' },
        { label: 'US', value: 'US' },
      ],
    },
    {
      displayName: 'State',
      fieldName: 'state',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
      options: [
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'UP', value: 'UP' },
      ],
    },
    {
      displayName: 'City',
      fieldName: 'city',
      type: 'MultiSelect',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [
        { label: 'Ahmedabad', value: 'Ahmedabad' },
        { label: 'Baroda', value: 'Baroda' },
        { label: 'Rajkot', value: 'Rajkot' },
      ],
    },
  ];

  addNewField: fieldMeta[] = [
    {
      displayName: 'Display Name',
      fieldName: 'displayName',
      type: 'Text',
      minLength: 5,
      maxLength: 255,
      isRequired: true,
    },
    {
      displayName: 'Field Name',
      fieldName: 'fieldName',
      type: 'Text',
      minLength: 5,
      maxLength: 255,
      isRequired: true,
    },
    {
      displayName: 'Type',
      fieldName: 'type',
      type: 'Select',
      minLength: 0,
      maxLength: 0,
      isRequired: true,
      options: [],
    },
    {
      displayName: 'MinLength',
      fieldName: 'minLength',
      type: 'number',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    },
    {
      displayName: 'MaxLenght',
      fieldName: 'maxLength',
      type: 'number',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    },
    {
      displayName: 'isRequired',
      fieldName: 'isRequired',
      type: 'checkbox',
      minLength: 0,
      maxLength: 0,
      isRequired: false,
    },
    {
      displayName: 'Show Error Massage',
      fieldName: 'showErrorMessage',
      type: 'Text',
      minLength: 5,
      maxLength: 255,
      isRequired: false,
    },
  ];
}
