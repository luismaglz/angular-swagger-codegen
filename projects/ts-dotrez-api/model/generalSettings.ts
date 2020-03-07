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
 * The booking general settings.
 */

    import { GeneralSettings<CAP>allowSeatAssignment</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>bookingAccessControl</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>viewBookingsByControl</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>editBookingsByControl</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>highlightFareOverride</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>highlightIrop</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>highlightScheduleChange</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>highlightStandby</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>highlightUpgrade</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>reassignSeatingBehavior</CAP> } from '../types/enums';
    import { GeneralSettings<CAP>timeDisplay</CAP> } from '../types/enums';

export interface GeneralSettings { 
    /**
     * The flag allowing adding and removing SSRs on a checked-in passenger.
     */
    allowChangeSsrOnCheckedInPassenger?: boolean;
    /**
     * The flag allowing blocked seat assignment.
     */
    allowBlockedSeatAssignment?: boolean;
    /**
     * The flag allowing changing the booking on a restricted flight.
     */
    allowChangeOnRestrictedFlight?: boolean;
    /**
     * The flag allowing promo codes.
     */
    allowPromoCodes?: boolean;
    /**
     * The flag allowing changes on a booking made through the API channel.
     */
    allowEditableApiChannel?: boolean;
    /**
     * The flag allowing changes on a booking made through the direct channel.
     */
    allowEditableDirectChannel?: boolean;
    /**
     * The flag allowing the current role to edit GDS bookings with TA payments.
     */
    allowEditableGdsBookingWithTaPayment?: boolean;
    /**
     * The flag allowing the current role to edit bookings created through GDS.
     */
    allowEditableGdsChannel?: boolean;
    /**
     * The flag allowing the current role to edit bookings created through the web channel.
     */
    allowEditableWebChannel?: boolean;
    /**
     * The flag allowing group names to be updated on non-GDS flights.
     */
    allowGroupNameUpdates?: boolean;
    /**
     * The flag allowing manifest retrieval on Unblocked flight lines
     */
    allowManifestRetrievalOnUnblockedFlightLines?: boolean;
    /**
     * The flag allowing overbooking SSRs on Move.
     */
    allowOverbookingSsrOnMove?: boolean;
    /**
     * The flag allowing queuing GDS booking with TA FOP for ETicket Reissues.
     */
    allowQueueingGdsBookingWithTaFopForETicketReissue?: boolean;
    /**
     * The flag allowing restricted seat assignments.
     */
    allowRestrictedSeatAssignment?: boolean;
    /**
     * The seat assignment rules for this role.
     */
    allowSeatAssignment?: <ENUM>'Never'|'OnlyOnUnheldBookings'|'Always'</ENUM>;
    /**
     * The booking access allowed on this role.
     */
    bookingAccessControl?: <ENUM>'None'|'ScheduleOnly'|'Availability'|'View'|'ModifyNoCommit'|'Create'|'Change'|'CreateAndChange'</ENUM>;
    /**
     * The highest organization that the role can view bookings for.
     */
    viewBookingsByControl?: <ENUM>'Agent'|'Organization'|'OrganizationGroup'|'All'</ENUM>;
    /**
     * The highest organization that the role can edit bookings for.
     */
    editBookingsByControl?: <ENUM>'Agent'|'Organization'|'OrganizationGroup'|'All'</ENUM>;
    /**
     * The mandatory booking comment.
     */
    defaultBookingComment?: string;
    /**
     * The flag to not include unit properties in notification itinerary.
     */
    doNotIncludeUnitProperties?: boolean;
    /**
     * The timespan where duplicate bookings are watched for on this role.
     */
    duplicateBookingDetectionTimeSpan?: string;
    /**
     * The flag allowing automatic seat assignment on this role.
     */
    enableAutomaticSeatAssignment?: boolean;
    /**
     * The option to highlight the fare override on this role.
     */
    highlightFareOverride?: <ENUM>'None'|'Highlight'</ENUM>;
    /**
     * The option to highlight IROP information on this role.
     */
    highlightIrop?: <ENUM>'None'|'Highlight'</ENUM>;
    /**
     * The option to highlight schedule changes on this role.
     */
    highlightScheduleChange?: <ENUM>'None'|'Highlight'</ENUM>;
    /**
     * The option to highlight standbys on this role.
     */
    highlightStandby?: <ENUM>'None'|'Highlight'</ENUM>;
    /**
     * The option to highlight upgrades on this role.
     */
    highlightUpgrade?: <ENUM>'None'|'Highlight'</ENUM>;
    /**
     * The flag to allow managing passive segments on this role.
     */
    managePassiveSegments?: boolean;
    /**
     * The reassign seat behavior for this role.
     */
    reassignSeatingBehavior?: <ENUM>'DropSeats'|'LikeForLike'|'Algorithm'</ENUM>;
    /**
     * Gets or sets a list of restricted external system codes for this role.
     */
    restrictedExternalSystemCodes?: Array<string>;
    /**
     * The time display style for this role.
     */
    timeDisplay?: <ENUM>'Default'|'AmPm'|'TwentyFourHour'</ENUM>;
    /**
     * The allow seat group restriction override flag.
     */
    allowSeatGroupRestrictionOverride?: boolean;
}
