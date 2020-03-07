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
 * The data for a simple organization record.
 */
import * as Enums from '../types/enums';

export interface OrganizationRecordMinimum { 
    /**
     * The organization group code.
     */
    organizationCode: string;
    /**
     * The organization company name.
     */
    name?: string;
}
