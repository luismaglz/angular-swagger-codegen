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



    import { Message<CAP>status</CAP> } from '../types/enums';

export interface Message { 
    code?: string;
    type?: string;
    value?: string;
    status?: <ENUM>'General'|'Warning'|'Critical'</ENUM>;
}
