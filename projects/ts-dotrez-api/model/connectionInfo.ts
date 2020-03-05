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
import { IPAddress } from './iPAddress';



export interface ConnectionInfo { 
    id?: string;
    remoteIpAddress?: IPAddress;
    remotePort?: number;
    localIpAddress?: IPAddress;
    localPort?: number;
    clientCertificate?: any;
}
