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
 * The person information type model.
 */
import * as Enums from '../enums';

export interface PersonInformationType { 
    /**
     * The person information type code.
     */
    personInformationTypeCode: string;
    /**
     * The name of the type.
     */
    name?: string;
    /**
     * Is in-active.
     */
    inActive?: boolean;
    /**
     * The data schema of person info type.
     */
    schema?: string;
}
