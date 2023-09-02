import { BaseComponent } from "../Component/base/base.component";
import { fieldMeta } from "../DataType /data-type";
import { BaseField } from "./base-field";

export class CheckBoxfield extends BaseField{

    constructor(fieldProperties:fieldMeta){
        super(fieldProperties)
    }
}
