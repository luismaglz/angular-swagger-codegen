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
import { CustomAttributeTypedArgument } from './customAttributeTypedArgument';
import { MemberInfo } from './memberInfo';


import * as Enums from '../enums';

export interface CustomAttributeNamedArgument { 
    readonly memberInfo?: MemberInfo;
    readonly typedValue?: CustomAttributeTypedArgument;
    readonly memberName?: string;
    readonly isField?: boolean;
}
