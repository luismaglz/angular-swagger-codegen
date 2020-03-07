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
 * Defines the person email create address.
 */
import * as Enums from '../types/enums';

export interface PersonEmailCreateRequest { 
    /**
     * The type code of the email address.
     */
    type: string;
    /**
     * The email address value.
     */
    email: string;
    /**
     * Flag indicating if the email is the default.
     */
    _default?: boolean;
}
