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
import { BindingSource } from './bindingSource';
import { FuncActionContextBoolean } from './funcActionContextBoolean';
import { IPropertyFilterProvider } from './iPropertyFilterProvider';



export interface BindingInfo { 
    bindingSource?: BindingSource;
    binderModelName?: string;
    binderType?: string;
    propertyFilterProvider?: IPropertyFilterProvider;
    requestPredicate?: FuncActionContextBoolean;
}
