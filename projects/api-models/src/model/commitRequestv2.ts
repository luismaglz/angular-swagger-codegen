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
import { BookingCommentRequest } from './bookingCommentRequest';
import { BookingHold } from './bookingHold';


/**
 * Represents version two of the booking commit request.
 */
import * as Enums from '../enums';

export interface CommitRequestv2 { 
    /**
     * The received by name.
     */
    receivedBy?: string;
    /**
     * If set to true, booking will be committed even if Price is not valid, granted that agent's role  has permission to override.
     */
    restrictionOverride?: boolean;
    /**
     * The booking hold date.
     */
    hold?: BookingHold;
    /**
     * The notify contacts flag.
     */
    notifyContacts?: boolean;
    /**
     * The optional comments to add.
     */
    comments?: Array<BookingCommentRequest>;
}
