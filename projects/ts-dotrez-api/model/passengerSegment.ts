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
import { PassengerBoardingPassDetail } from './passengerBoardingPassDetail';
import { PassengerScore } from './passengerScore';
import { PassengerSeat } from './passengerSeat';
import { PassengerSegmentBag } from './passengerSegmentBag';
import { PassengerSsr } from './passengerSsr';
import { PointOfSale } from './pointOfSale';
import { SeatPreferences } from './seatPreferences';
import { Ticket } from './ticket';


/**
 * Model data for the passenger on the booking for the specific segment.
 */

    import { PassengerSegmentBaggageAllowanceWeightType } from '../types/enums';
    import { PassengerSegmentLiftStatus } from '../types/enums';
    import { PassengerSegmentOverBookIndicator } from '../types/enums';

export interface PassengerSegment { 
    /**
     * The seat details.
     */
    seats?: Array<PassengerSeat>;
    /**
     * The unique key of the passenger on the segment
     */
    passengerKey?: string;
    /**
     * The activity date.
     */
    activityDate?: Date;
    /**
     * A value indicating whether the passenger segment baggage allowance is used.
     */
    baggageAllowanceUsed?: boolean;
    /**
     * The passenger segment baggage allowance weight.
     */
    baggageAllowanceWeight?: number;
    /**
     * The type of passenger segment baggage allowance weight.
     */
    baggageAllowanceWeightType?: PassengerSegmentBaggageAllowanceWeightType;
    /**
     * The passenger segment boarding sequence.
     */
    boardingSequence?: string;
    /**
     * The created date.
     */
    createdDate?: Date;
    /**
     * The lift status.
     */
    liftStatus?: PassengerSegmentLiftStatus;
    /**
     * The modified date.
     */
    modifiedDate?: Date;
    /**
     * The over book indicator.
     */
    overBookIndicator?: PassengerSegmentOverBookIndicator;
    /**
     * The priority date.
     */
    priorityDate?: Date;
    /**
     * Gets or sets a value indicating whether the passenger segment time has changed.
     */
    timeChanged?: boolean;
    /**
     * The verified travel docs. Please use VerifiedTravelDocuments instead.
     */
    verifiedTravelDocs?: string;
    /**
     * The source point of sale.
     */
    sourcePointOfSale?: PointOfSale;
    /**
     * The point of sale.
     */
    pointOfSale?: PointOfSale;
    /**
     * The Ssr information for both the leg and segment.
     */
    ssrs?: Array<PassengerSsr>;
    /**
     * The ticket information.
     */
    tickets?: Array<Ticket>;
    /**
     * The baggage information.
     */
    bags?: Array<PassengerSegmentBag>;
    /**
     * The collection of passenger scores.
     */
    scores?: Array<PassengerScore>;
    /**
     * The passengers boardin pass details.
     */
    boardingPassDetail?: PassengerBoardingPassDetail;
    /**
     * Flag indicating if the passenger has an infant for the specific segment.
     */
    hasInfant?: boolean;
    /**
     * The passenger seat preferences.
     */
    seatPreferences?: SeatPreferences;
    /**
     * The bundle code associated with the passenger segment.
     */
    bundleCode?: string;
    /**
     * The travel document keys that have been verified at checkin.
     */
    verifiedTravelDocuments?: Array<string>;
}
