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
 * Describes the booking queue info.
 */
export interface BookingQueueInfo { 
    /**
     * The segment key.
     */
    segmentKey?: string;
    /**
     * The identifier for the queue where the booking is placed.
     */
    code?: string;
    /**
     * The identifier for the sub queue where the booking is placed.
     */
    subCode?: string;
    /**
     * The name for the queue where the booking is placed.
     */
    name?: string;
    /**
     * The unique ID of the booking queue entry.
     */
    queueId?: number;
    /**
     * The unique identifier of a passenger on the booking.
     */
    passengerId?: number;
    /**
     * Unique identifier of the watchlist where a match was found for the booking or passenger.
     */
    watchListId?: number;
    /**
     * A summary on why the booking was placed in the queue.
     */
    note?: string;
    /**
     * The type of event that triggered placement of the booking in the queue.
     */
    type?: BookingQueueInfo.TypeEnum;
    /**
     * The action that will be taken as a result of the placement in the queue.
     */
    action?: BookingQueueInfo.ActionEnum;
    /**
     * The indicator if this entry was added or removed from the queue.
     */
    mode?: BookingQueueInfo.ModeEnum;
    /**
     * The flight reference.
     */
    flightReference?: string;
}
export namespace BookingQueueInfo {
    export type TypeEnum = 'Default' | 'BookingBalanceDue' | 'BookingNegativeBalance' | 'BookingCustomerComment' | 'DeclinedPaymentInitial' | 'DeclinedPaymentChange' | 'FareOverride' | 'ScheduleTimeChange' | 'ScheduleTimeChangeMisconnect' | 'ScheduleCancellation' | 'FlightDesignatorChange' | 'ReaccommodationMove' | 'GdsCancelWithPendingPayment' | 'InvalidPriceStatusOverride' | 'FareRestrictionOverride' | 'HeldBookings' | 'InvalidPriceStatus' | 'Watchlist' | 'NonFlightServiceFee' | 'NotAllTicketNumbersReceived' | 'BookingSegmentOversold' | 'ReaccommodationCancel' | 'ExternalSsrAutoConfirmed' | 'OpCarrierSegUpdate' | 'OpCarrierSsrUpdate' | 'OpCarrierOtherUpdate' | 'NameChangeNotAllowed' | 'InboundAscNotProcessed' | 'OpCarrierInformationChange' | 'BookingComponentUpdate' | 'GroupBookings' | 'BankDirectPnrOutOfBalance' | 'NoSeatAssigned' | 'SeatNumberChange' | 'SsrNotSupportedOnNewSeat' | 'FewerSeatPreferencesMetOnNewSeat' | 'AosUnableToConfirmCancel' | 'ETicketIssue' | 'ETicketFollowup' | 'InvoluntaryFlyAhead' | 'ManualClearanceOnOutage' | 'UnbalancedPoints' | 'OpCarrierTimeChange' | 'OaCarrierTimeChange' | 'VoluntaryFlightChange' | 'InvoluntaryFlightChange' | 'HoldCancellationFailed' | 'ScheduleTimeChangeWithDynamicQueueCode' | 'ReaccommodationMoveWithDynamicQueueCode' | 'ItineraryIntegrity' | 'ReducePartyNotProcessed' | 'CheckedPassengerUpdate' | 'NameChangeWithinRule' | 'IncompletePassengerEMDCoupon' | 'ASVCUpdateFailed' | 'ScheduleTimeChangeMisconnectBelowMinimum' | 'ScheduleTimeChangeMisconnectAboveMaximum' | 'OpCarrierMisconnect' | 'InventoryQueuing' | 'SelfServiceAsm' | 'SelfServiceDelay' | 'SelfServiceFlightCancellation' | 'SelfServiceIrop' | 'SelfServiceScheduleChange' | 'SelfServiceTimeChange' | 'AosAddOrCancelNotSuccessful' | 'MissingGdsFareFamily' | 'ChangeCabinQueue';
    export type ActionEnum = 'Default' | 'Warning' | 'Lock' | 'DefaultAndNotify' | 'WarningAndNotify' | 'LockAndNotify';
    export type ModeEnum = 'EnQueued' | 'DeQueued';
}
