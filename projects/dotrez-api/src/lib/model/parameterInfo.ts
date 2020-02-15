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


export interface ParameterInfo { 
    readonly parameterType?: string;
    readonly name?: string;
    readonly hasDefaultValue?: boolean;
    readonly defaultValue?: any;
    readonly rawDefaultValue?: any;
    readonly position?: number;
    readonly attributes?: ParameterInfo.AttributesEnum;
    readonly member?: MemberInfo;
    readonly isIn?: boolean;
    readonly isOut?: boolean;
    readonly isLcid?: boolean;
    readonly isRetval?: boolean;
    readonly isOptional?: boolean;
    readonly metadataToken?: number;
    readonly customAttributes?: Array<CustomAttributeData>;
}
export namespace ParameterInfo {
    export type AttributesEnum = 'None' | 'In' | 'Out' | 'Lcid' | 'Retval' | 'Optional' | 'HasDefault' | 'HasFieldMarshal' | 'Reserved3' | 'Reserved4' | 'ReservedMask';
    export const AttributesEnum = {
        None: 'None' as AttributesEnum,
        In: 'In' as AttributesEnum,
        Out: 'Out' as AttributesEnum,
        Lcid: 'Lcid' as AttributesEnum,
        Retval: 'Retval' as AttributesEnum,
        Optional: 'Optional' as AttributesEnum,
        HasDefault: 'HasDefault' as AttributesEnum,
        HasFieldMarshal: 'HasFieldMarshal' as AttributesEnum,
        Reserved3: 'Reserved3' as AttributesEnum,
        Reserved4: 'Reserved4' as AttributesEnum,
        ReservedMask: 'ReservedMask' as AttributesEnum
    };
}
