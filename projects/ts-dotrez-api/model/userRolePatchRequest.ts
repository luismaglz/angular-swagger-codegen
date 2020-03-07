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
 * Defines the user role patch request.
 */
import * as Enums from '../types/enums';

export interface UserRolePatchRequest { 
    /**
     * The date the role is effective after.
     */
    effectiveAfter: Date;
    /**
     * The date the role is effective before.
     */
    effectiveBefore?: Date;
}
