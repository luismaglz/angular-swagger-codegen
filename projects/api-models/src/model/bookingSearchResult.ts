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
import { Name } from './name';


/**
 * Booking model data.
 */
import * as Enums from '../enums';

export interface BookingSearchResult { 
    /**
     * The booking key.
     */
    bookingKey?: string;
    /**
     * Indicates whether it is allowed to modify GDS booking.
     */
    allowedToModifyGdsBooking?: boolean;
    /**
     * The booking status.
     */
    bookingStatus?: Enums.BookingStatus;
    /**
     * The type of the channel.
     */
    channelType?: Enums.ChannelType;
    /**
     * Indicates whether this is editable.
     */
    editable?: boolean;
    /**
     * The expired date.
     */
    expiredDate?: Date;
    /**
     * Flight date.
     */
    flightDate?: Date;
    /**
     * The flight number.
     */
    flightNumber?: string;
    /**
     * Origin.
     */
    origin?: string;
    /**
     * The passenger id.
     */
    passengerId?: number;
    /**
     * The record locator.
     */
    recordLocator?: string;
    /**
     * The source agent code.
     */
    sourceAgentCode?: string;
    /**
     * The source domain code.
     */
    sourceDomainCode?: string;
    /**
     * The source organization code.
     */
    sourceOrganizationCode?: string;
    /**
     * The system code.
     */
    systemCode?: string;
    /**
     * Destination.
     */
    destination?: string;
    /**
     * The name on the booking.
     */
    name?: Name;
}
