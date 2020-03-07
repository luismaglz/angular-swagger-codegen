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
 * Defines a passengers restriction for the current segment trying to be checked into.
 */
import * as Enums from '../types/enums';

export interface CheckinPassengerRestriction { 
    /**
     * The passenger restriction type.
     */
    restriction?: Enums.CheckinPassengerRestrictionType;
    /**
     * The description of the restriction.
     */
    description?: string;
}
