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
 * Defines the user role create request.
 */
import * as Enums from '../types/enums';

export interface UserRoleCreateRequest { 
    /**
     * The unique role code.
     */
    roleCode: string;
    /**
     * The days the role is effective.
     */
    effectiveDays?: Enums.DayOfWeek;
    /**
     * The date the role is effective after.
     */
    effectiveAfter: Date;
    /**
     * The date the role is effective before.
     */
    effectiveBefore?: Date;
}
