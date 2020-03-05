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
import { Leg } from './leg';
import { TransportationDesignator } from './transportationDesignator';
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * Available segment represents an available segment on a available journey.
 */

    import { AvailableSegment<CAP>segmentType<CAP> } from '../models/enums';

export interface AvailableSegment { 
    /**
     * Flag indicating if the segment is a change of gauge.
     */
    readonly isChangeOfGauge?: boolean;
    /**
     * Flag indicating if the segment is blocked.
     */
    readonly isBlocked?: boolean;
    /**
     * Flag indicating if the segment is hosted.
     */
    readonly isHosted?: boolean;
    /**
     * The segments transportation designator.
     */
    readonly designator?: TransportationDesignator;
    /**
     * Indicates if the seatmaps associated with the segment are viewable.
     */
    readonly isSeatmapViewable?: boolean;
    /**
     * The unique segment key.
     */
    segmentKey?: string;
    /**
     * The transportation identifier.
     */
    identifier?: TransportationIdentifier;
    /**
     * The segments cabin of service.
     */
    cabinOfService?: string;
    /**
     * The external transportation identifier.
     */
    externalIdentifier?: TransportationIdentifier;
    /**
     * Flag indicating if the segment is international.
     */
    international?: boolean;
    /**
     * The type of the segment.
     */
    segmentType?: AvailableSegment<CAP>segmentType<CAP>;
    /**
     * The collection of legs on the segment.
     */
    legs?: Array<Leg>;
}
