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
 * Defines a user role.
 */
import * as Enums from '../enums';

export interface UserRole { 
    /**
     * The user role key.
     */
    userRoleKey?: string;
    /**
     * The role's name.
     */
    roleName?: string;
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
     * The parents role code.
     */
    parentRoleCode?: string;
    /**
     * The date the role is effective before.
     */
    effectiveBefore?: Date;
}
