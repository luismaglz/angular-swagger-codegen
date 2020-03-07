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
 * The booking contact type.
 */
import * as Enums from '../enums';

export interface ContactType { 
    /**
     * The type code.
     */
    contactTypeCode: string;
    /**
     * The in active.
     */
    inActive?: boolean;
    /**
     * The name of the type.
     */
    name?: string;
}
