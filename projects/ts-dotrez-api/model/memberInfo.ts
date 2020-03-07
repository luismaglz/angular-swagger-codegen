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



    import { MemberInfo<CAP>memberType</CAP> } from '../types/enums';

export interface MemberInfo { 
    readonly memberType?: <ENUM>'Constructor'|'Event'|'Field'|'Method'|'Property'|'TypeInfo'|'Custom'|'NestedType'|'All'</ENUM>;
    readonly name?: string;
    readonly declaringType?: string;
    readonly reflectedType?: string;
    readonly customAttributes?: Array<CustomAttributeData>;
    readonly metadataToken?: number;
    readonly module?: any;
}
