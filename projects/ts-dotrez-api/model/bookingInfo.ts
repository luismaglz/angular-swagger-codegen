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


/**
 * Describes general booking details.
 */

    import { BookingInfo<CAP>status</CAP> } from '../types/enums';
    import { BookingInfo<CAP>paidStatus</CAP> } from '../types/enums';
    import { BookingInfo<CAP>priceStatus</CAP> } from '../types/enums';
    import { BookingInfo<CAP>profileStatus</CAP> } from '../types/enums';
    import { BookingInfo<CAP>channelType</CAP> } from '../types/enums';

export interface BookingInfo { 
    /**
     * The status of the entire booking.
     */
    status?: <ENUM>'Default'|'Hold'|'Confirmed'|'Closed'|'HoldCanceled'|'PendingArchive'|'Archived'</ENUM>;
    /**
     * The status of the applied payments.
     */
    paidStatus?: <ENUM>'UnderPaid'|'PaidInFull'|'OverPaid'</ENUM>;
    /**
     * The pricing status of the booking.
     */
    priceStatus?: <ENUM>'Invalid'|'Override'|'Valid'</ENUM>;
    /**
     * The booking profiling status.
     */
    profileStatus?: <ENUM>'Default'|'KnownIndividual'|'ResolutionGroup'|'SelecteeGroup'|'NotUsed'|'FailureGroup'|'RandomSelectee'|'Exempt'</ENUM>;
    /**
     * Identifies the type (Default, GDS, CodeShare, ect) of the booking set during the commit process.
     */
    bookingType?: string;
    /**
     * The channel that is responsible for created the booking.
     */
    channelType?: <ENUM>'Default'|'Direct'|'Web'|'Gds'|'Api'</ENUM>;
    /**
     * The UTC date and time the booking was originally created.
     */
    bookedDate?: Date;
    /**
     * The UTC date and time of when the booking was created.
     */
    createdDate?: Date;
    /**
     * The UTC date and time indicating when the booking will not be returned when retrieved by a GDS/GRS.
     */
    expirationDate?: Date;
    /**
     * The UTC date and time when the booking was last updated on the server.
     */
    modifiedDate?: Date;
    /**
     * The last agent ID who modified the booking.
     */
    modifiedAgentId?: number;
    /**
     * The agent ID that created the booking.
     */
    createdAgentId?: number;
    /**
     * Identifies which carrier is financially responsible for the booking and payment.
     */
    owningCarrierCode?: string;
    /**
     * The flag indicating whether the booking can be changed.
     */
    changeAllowed?: boolean;
}
