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
 * The available journey fare details represents a journeys fare availability.
 */

    import { AvailableJourneyFareDetailStatus } from '../types/enums';

export interface AvailableJourneyFareDetail { 
    /**
     * The availability left.
     */
    availableCount?: number;
    /**
     * The classes status.
     */
    status?: AvailableJourneyFareDetailStatus;
    /**
     * The reference to the fare in the master fare collection.
     */
    reference?: string;
}