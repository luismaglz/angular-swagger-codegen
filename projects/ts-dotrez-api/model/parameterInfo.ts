/**
 * API - Current Routes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: trunk
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CustomAttributeData } from './customAttributeData';
import { MemberInfo } from './memberInfo';


import * as Enums from '../types/enums';

export interface ParameterInfo { 
    readonly parameterType?: string;
    readonly name?: string;
    readonly hasDefaultValue?: boolean;
    readonly defaultValue?: any;
    readonly rawDefaultValue?: any;
    readonly position?: number;
    readonly attributes?: Enums.<ENUM>'None'|'In'|'Out'|'Lcid'|'Retval'|'Optional'|'HasDefault'|'HasFieldMarshal'|'Reserved3'|'Reserved4'|'ReservedMask'</ENUM>;
    readonly member?: MemberInfo;
    readonly isIn?: boolean;
    readonly isOut?: boolean;
    readonly isLcid?: boolean;
    readonly isRetval?: boolean;
    readonly isOptional?: boolean;
    readonly metadataToken?: number;
    readonly customAttributes?: Array<CustomAttributeData>;
}
