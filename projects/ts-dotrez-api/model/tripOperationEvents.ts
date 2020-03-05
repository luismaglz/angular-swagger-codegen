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
 * Represents the flight operation time events for an estimated,  actual, and forced time event.
 */

export interface TripOperationEvents { 
    /**
     * Represents the forced time for this event type.
     */
    forced?: Date;
    /**
     * Represents the actual time for this event type.
     */
    actual?: Date;
    /**
     * Represents the estimated time for this event type.
     */
    estimated?: Date;
}
