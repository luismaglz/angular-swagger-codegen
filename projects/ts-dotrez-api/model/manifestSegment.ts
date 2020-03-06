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
import { ManifestLeg } from './manifestLeg';
import { ManifestSeatProperty } from './manifestSeatProperty';
import { MarketInformation } from './marketInformation';
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * Manifest Segment.
 */

    import { ManifestSegmentBaggageAllowanceWeightType } from '../types/enums';

export interface ManifestSegment { 
    /**
     * The unique identifier for the segment.
     */
    segmentKey?: string;
    /**
     * Represents data relating to the manifest segment market.
     */
    market?: MarketInformation;
    /**
     * Baggage Allowance Used.
     */
    baggageAllowanceUsed?: boolean;
    /**
     * Baggage Allowance Weight.
     */
    baggageAllowanceWeight?: number;
    /**
     * Weight Type.
     */
    baggageAllowanceWeightType?: ManifestSegmentBaggageAllowanceWeightType;
    /**
     * The BookingStatus property.
     */
    bookingStatus?: string;
    /**
     * The CabinOfService property.
     */
    cabinOfService?: string;
    /**
     * The ChangeReasonCode property.
     */
    changeReasonCode?: string;
    /**
     * The ClassOfService property.
     */
    classOfService?: string;
    /**
     * The FareBasisCode.
     */
    fareBasisCode?: string;
    /**
     * The infant ticket number.
     */
    infantTicketNumber?: string;
    /**
     * The International property.
     */
    international?: boolean;
    /**
     * The Legs property.
     */
    legs?: Array<ManifestLeg>;
    /**
     * The product class code.
     */
    productClassCode?: string;
    /**
     * The Legs property.
     */
    seatProperties?: Array<ManifestSeatProperty>;
    /**
     * The SegmentType.
     */
    segmentType?: string;
    /**
     * The date the segment was sold.
     */
    soldDate?: Date;
    /**
     * The SSRCodes property.
     */
    ssrCodes?: string;
    /**
     * The ticket indicator.
     */
    ticketIndicator?: string;
    /**
     * The ticket number.
     */
    ticketNumber?: string;
    /**
     * The upgrade indicator property.
     */
    upgradeIndicator?: boolean;
    /**
     * The VerifiedTravelDocs property.
     */
    verifiedTravelDocs?: string;
    /**
     * The travel cross reference identifier information.
     */
    xRefIdentifier?: TransportationIdentifier;
}
