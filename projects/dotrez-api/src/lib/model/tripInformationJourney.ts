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
import { ItinerarySegment } from './itinerarySegment';
import { TransportationDesignator } from './transportationDesignator';


/**
 * Represents the trip information journey.
 */
export interface TripInformationJourney { 
    /**
     * This is a summary of all the segments on the journey. It will contain the details  of the transportation from the first and last segment.
     */
    readonly designator?: TransportationDesignator;
    /**
     * Represents the journey key.
     */
    journeyKey?: string;
    /**
     * Represents the collection of itinerary segments for this journey.
     */
    segments?: Array<ItinerarySegment>;
}
