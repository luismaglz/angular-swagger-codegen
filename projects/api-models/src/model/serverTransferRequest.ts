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


/**
 * Represents a server transfer request.
 */
import * as Enums from '../enums';

export interface ServerTransferRequest { 
    /**
     * The NewSkies server context token to transfer.
     */
    serverContextToken: string;
    /**
     * The optional application name.
     */
    applicationName?: string;
    /**
     * The transferred server's channel type.
     */
    channel?: Enums.<ENUM>'Default'|'Direct'|'Web'|'Gds'|'Api'</ENUM>;
}
