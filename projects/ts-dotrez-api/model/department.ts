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
 * The department model.
 */
import * as Enums from '../types/enums';

export interface Department { 
    /**
     * The department code.
     */
    departmentCode?: string;
    /**
     * The department name.
     */
    name?: string;
    /**
     * The in active.
     */
    inActive?: boolean;
}
