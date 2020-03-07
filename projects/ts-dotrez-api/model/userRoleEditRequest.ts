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
 * Defines the user role edit request.
 */

    import { UserRoleEditRequest<CAP>effectiveDays</CAP> } from '../types/enums';

export interface UserRoleEditRequest { 
    /**
     * The days the role is effective.
     */
    effectiveDays?: <ENUM>'None'|'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'|'Sunday'</ENUM>;
    /**
     * The date the role is effective after.
     */
    effectiveAfter: Date;
    /**
     * The date the role is effective before.
     */
    effectiveBefore?: Date;
}
