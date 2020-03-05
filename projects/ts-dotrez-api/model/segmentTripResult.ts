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
import { LegTripResult } from './legTripResult';
import { TransportationDesignator } from './transportationDesignator';
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * Model data.
 */
export interface SegmentTripResult { 
    /**
     * This is a summarry of all the legs on the segment. It will contain the details  of the transportation from the first and last leg.
     */
    readonly designator?: TransportationDesignator;
    /**
     * The class of service.
     */
    classOfService?: string;
    /**
     * The activity date.
     */
    activityDate?: Date;
    /**
     * The transportation identifier.
     */
    identifier?: TransportationIdentifier;
    /**
     * The external transportation identifier.
     */
    externalIdentifier?: TransportationIdentifier;
    /**
     * The associated leg information.
     */
    legs?: Array<LegTripResult>;
}
