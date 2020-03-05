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
import { BookingAddOns } from './bookingAddOns';
import { BookingComment } from './bookingComment';
import { BookingContacts } from './bookingContacts';
import { BookingHistory } from './bookingHistory';
import { BookingHold } from './bookingHold';
import { BookingInfo } from './bookingInfo';
import { BookingPassengers } from './bookingPassengers';
import { BookingPriceBreakdown } from './bookingPriceBreakdown';
import { BookingQueueInfo } from './bookingQueueInfo';
import { BookingRecordLocators } from './bookingRecordLocators';
import { BookingSales } from './bookingSales';
import { Journey } from './journey';
import { Payment } from './payment';
import { ReceivedByInfo } from './receivedByInfo';
import { TypeOfSale } from './typeOfSale';


/**
 * Represents a full booking object.
 */

export interface Booking { 
    /**
     * The flag indicating whether self-service move is allowed.
     */
    readonly selfServiceMoveAvailable?: boolean;
    /**
     * The unique identifier.
     */
    bookingKey?: string;
    /**
     * The alphanumeric identifier assigned to a reservation when the record is created (created means when the booking  was submitted to the database).
     */
    recordLocator?: string;
    /**
     * The currency in which the booking is priced and created in.
     */
    currencyCode?: string;
    /**
     * The GDS/CRS code that requested the booking.
     */
    systemCode?: string;
    /**
     * The group name of the booking.
     */
    groupName?: string;
    /**
     * Booking locators used to define a booking.
     */
    locators?: BookingRecordLocators;
    /**
     * Informational about the booking.
     */
    info?: BookingInfo;
    /**
     * Details about the point of sales.
     */
    sales?: BookingSales;
    /**
     * Information about the type of sale the booking was.
     */
    typeOfSale?: TypeOfSale;
    /**
     * Defines the hold expiration.
     */
    hold?: BookingHold;
    /**
     * The booking pricing breakdown.
     */
    breakdown?: BookingPriceBreakdown;
    /**
     * Details about what received the booking commit.
     */
    receivedBy?: ReceivedByInfo;
    contacts?: BookingContacts;
    passengers?: BookingPassengers;
    /**
     * The list of journeys and information.
     */
    journeys?: Array<Journey>;
    /**
     * The list of associated comments.
     */
    comments?: Array<BookingComment>;
    /**
     * The list of information indicating which queue the booking is present in.
     */
    queues?: Array<BookingQueueInfo>;
    /**
     * The history of the booking since it was loaded into state.
     */
    history?: Array<BookingHistory>;
    /**
     * The list of applied payments.
     */
    payments?: Array<Payment>;
    addOns?: BookingAddOns;
}
