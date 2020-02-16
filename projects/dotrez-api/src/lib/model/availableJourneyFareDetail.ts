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
export interface AvailableJourneyFareDetail { 
    /**
     * The availability left.
     */
    availableCount?: number;
    /**
     * The classes status.
     */
    status?: AvailableJourneyFareDetail.StatusEnum;
    /**
     * The reference to the fare in the master fare collection.
     */
    reference?: string;
}
export namespace AvailableJourneyFareDetail {
    export type StatusEnum = 'Active' | 'InActive' | 'AvsOpen' | 'AvsOnRequest' | 'AvsClosed';
}
