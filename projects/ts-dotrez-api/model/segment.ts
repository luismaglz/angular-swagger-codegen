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
import { Fare } from './fare';
import { Leg } from './leg';
import { SegmentPassengerSegment } from './segmentPassengerSegment';
import { TransportationDesignator } from './transportationDesignator';
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * Segment model for an already booked flight.
 */

    import { SegmentChannelType } from '../types/enums';
    import { SegmentChangeReasonCode } from '../types/enums';
    import { SegmentSegmentType } from '../types/enums';

export interface Segment { 
    /**
     * Represents the stand by status of the segment.
     */
    readonly isStandby?: boolean;
    /**
     * Represents the confirmed status of the segment.
     */
    readonly isConfirming?: boolean;
    /**
     * Represents the blocked status of the segment.
     */
    readonly isBlocked?: boolean;
    /**
     * Represents the hosted status of the segment.
     */
    readonly isHosted?: boolean;
    /**
     * Represents the change of gauge status of the segment.
     */
    readonly isChangeOfGauge?: boolean;
    /**
     * This is a summarry of all the legs on the segment. It will contain the details  of the transportation from the first and last leg.
     */
    readonly designator?: TransportationDesignator;
    /**
     * Indicates if the seatmaps associated with the segment are viewable.
     */
    readonly isSeatmapViewable?: boolean;
    /**
     * The fares.
     */
    fares?: Array<Fare>;
    /**
     * The unique identifier for this segment sell information.
     */
    segmentKey?: string;
    /**
     * The transportation identifier.
     */
    identifier?: TransportationIdentifier;
    passengerSegment?: SegmentPassengerSegment;
    /**
     * The type of the channel from the user that added the segment.
     */
    channelType?: SegmentChannelType;
    /**
     * The cabin of service.
     */
    cabinOfService?: string;
    /**
     * The external transportation identifier.
     */
    externalIdentifier?: TransportationIdentifier;
    /**
     * The priority code.
     */
    priorityCode?: string;
    /**
     * The change reason code.
     */
    changeReasonCode?: SegmentChangeReasonCode;
    /**
     * The type of the segment.
     */
    segmentType?: SegmentSegmentType;
    /**
     * The segment sales date.
     */
    salesDate?: Date;
    /**
     * The value indicating if this segment is international.
     */
    international?: boolean;
    /**
     * The flight reference which signifies a link to a segment and or leg.
     */
    flightReference?: string;
    /**
     * The legs.
     */
    legs?: Array<Leg>;
}