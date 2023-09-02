import { fieldMeta } from "../DataType /data-type";
import { BaseField } from "./base-field";
import { options } from "../DataType /data-type"

export class SelectField extends BaseField {

    options!: options[] | undefined;
    constructor(fieldProperties: fieldMeta) {
        super(fieldProperties);
        this.options = fieldProperties.options;
    }
}