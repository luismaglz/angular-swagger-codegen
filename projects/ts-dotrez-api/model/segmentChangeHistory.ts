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
import { MarketInformation } from './marketInformation';
import { PointOfSale } from './pointOfSale';


/**
 * Defines a segment change history log entry.
 */
export interface SegmentChangeHistory { 
    /**
     * The days of the week of the operation.
     */
    daysOfWeek?: Array<SegmentChangeHistory.DaysOfWeekEnum>;
    /**
     * The segment number.
     */
    segmentNumber?: number;
    /**
     * The point of sale.
     */
    pointOfSale?: PointOfSale;
    /**
     * The class of service.
     */
    classOfService?: string;
    /**
     * The source point of sale.
     */
    sourcePointOfSale?: PointOfSale;
    /**
     * The market information.
     */
    market?: MarketInformation;
    /**
     * The received by name.
     */
    receivedBy?: string;
    /**
     * The number of stops in the reservation.
     */
    stopCount?: number;
    /**
     * The received by reference number.
     */
    receivedByReference?: string;
    /**
     * The connection indicator.
     */
    connectionIndicator?: string;
    /**
     * The the history entry was created.
     */
    createdDate?: Date;
    /**
     * The number of passengers on the booking.
     */
    passengerCount?: number;
    /**
     * The scheduled time of arrival local to the arrival station.
     */
    scheduledArrivalTime?: Date;
    /**
     * The scheduled time of departure local to the arrival station.
     */
    scheduledDepartureTime?: Date;
    /**
     * An alphanumeric identifier assigned to a fare.
     */
    fareBasis?: string;
    /**
     * The cash value of the fare.
     */
    fareAmount?: number;
}
export namespace SegmentChangeHistory {
    export type DaysOfWeekEnum = 'None' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    export const DaysOfWeekEnum = {
        None: 'None' as DaysOfWeekEnum,
        Monday: 'Monday' as DaysOfWeekEnum,
        Tuesday: 'Tuesday' as DaysOfWeekEnum,
        Wednesday: 'Wednesday' as DaysOfWeekEnum,
        Thursday: 'Thursday' as DaysOfWeekEnum,
        Friday: 'Friday' as DaysOfWeekEnum,
        Saturday: 'Saturday' as DaysOfWeekEnum,
        Sunday: 'Sunday' as DaysOfWeekEnum
    }
}
