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
import { InfantBase } from './infantBase';
import { Name } from './name';
import { Program } from './program';


/**
 * The passenger detail model.
 */
import * as Enums from '../enums';

export interface PassengerDetail { 
    /**
     * The current status of the booking.
     */
    status?: Enums.BookingStatus;
    /**
     * The record locator.
     */
    recordLocator?: string;
    /**
     * The initial date and time of the booking.
     */
    createdDate?: Date;
    /**
     * The passenger name.
     */
    name?: Name;
    /**
     * The profile status on the booking.
     */
    profileStatus?: Enums.BookingProfileStatus;
    /**
     * The ticket number of the infant with the passenger.
     */
    infantTicketNumber?: string;
    /**
     * The unique passenger ID.
     */
    passengerId?: number;
    /**
     * The ticket number of the passenger.
     */
    ticketNumber?: string;
    /**
     * The weight category assigned to this passenger.
     */
    weightCategory?: Enums.WeightCategory;
    /**
     * The ticket type of the passenger.
     */
    ticketIndicator?: string;
    /**
     * The departure station code.
     */
    origin?: string;
    /**
     * The list of SSR codes associated with this passenger.
     */
    ssrCodes?: Array<string>;
    /**
     * The arrival station code.
     */
    destination?: string;
    /**
     * The current assigned trip type.
     */
    tripType?: Enums.TripType;
    /**
     * The passenger segment booking status.
     */
    segmentBookingStatus?: string;
    /**
     * The connecting flight number if appropriate.
     */
    connectingFlight?: string;
    /**
     * The connecting station code if appropriate.
     */
    connectingStation?: string;
    /**
     * The final destination station code.
     */
    finalDestination?: string;
    /**
     * The list of payment codes for the booking.
     */
    paymentMethods?: Array<string>;
    /**
     * The list of the manifest comments.
     */
    comments?: Array<string>;
    /**
     * The infant associated with the passenger.
     */
    infant?: InfantBase;
    /**
     * The customer program associated with the passenger.
     */
    customerProgram?: Program;
    /**
     * The reference of who or what verified the passenger's documents.
     */
    verifiedReference?: string;
    /**
     * The passenger guest value level.
     */
    guestValueLevel?: string;
    /**
     * The paid status for the passenger.
     */
    paidStatus?: Enums.PaidStatus;
}
