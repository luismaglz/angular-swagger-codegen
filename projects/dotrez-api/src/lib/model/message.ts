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


export interface Message { 
    code?: string;
    type?: string;
    value?: string;
    status?: Message.StatusEnum;
}
export namespace Message {
    export type StatusEnum = 'General' | 'Warning' | 'Critical';
}
