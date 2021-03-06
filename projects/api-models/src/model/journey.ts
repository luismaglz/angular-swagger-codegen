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
import { JourneyMove } from './journeyMove';
import { Segment } from './segment';
import { TransportationDesignator } from './transportationDesignator';


/**
 * Data about the journey which represents the collection of segments and their legs on the journey.
 */
import * as Enums from '../enums';

export interface Journey { 
    /**
     * Returns a flight type enumeration. (NonStop, Thru, etc.)
     */
    readonly flightType?: Enums.FlightType;
    /**
     * The total number of stops this flight takes.
     */
    readonly stops?: number;
    /**
     * This is a summary of all the segments. It will contain the details  of the transportation from the first and last segment.
     */
    readonly designator?: TransportationDesignator;
    /**
     * The information regarding the journey move restrictions.
     */
    readonly move?: JourneyMove;
    /**
     * The collection of segments.
     */
    segments?: Array<Segment>;
    /**
     * The unique identifier for this journey sell information.
     */
    journeyKey?: string;
    /**
     * A value indicating whether the journey is for a general user.
     */
    notForGeneralUser?: boolean;
}
