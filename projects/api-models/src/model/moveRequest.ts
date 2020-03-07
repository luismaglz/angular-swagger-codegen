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
 * Defines the move journey request for a booking in state.
 */
import * as Enums from '../enums';

export interface MoveRequest { 
    /**
     * The journey key to move from.
     */
    fromJourneyKey: string;
    /**
     * The journey key to move to.
     */
    journeyKey: string;
    /**
     * The fare key to move to.
     */
    fareKey: string;
    /**
     * The type of move that is requested.
     */
    moveType?: Enums.<ENUM>'None'|'Irop'|'Diversion'|'FlightClose'|'FlyAhead'|'SplitJourney'|'SelfServiceRebooking'</ENUM>;
    /**
     * If true and the FromJourney is waitlisted, then the newly moved-to journey will  also be waitlisted.  This interacts with ChangeStatus.  See documentation for  ChangeStatus for further details.
     */
    keepWaitListStatus?: boolean;
    /**
     * If true then the move will be allowed even if the legs of FromJourney have been  marked as Closed.  If false, the move will be disallowed if any one of the legs  of FromJourney has been marked as Closed.
     */
    ignoreClosedFlightStatus?: boolean;
    /**
     * Controls whether the Move is allowed to ignore boarded and/or  checked-in statuses.
     */
    ignoreLiftStatus?: Enums.<ENUM>'IgnoreNotAllowed'|'IgnoreCheckin'|'IgnoreBoarded'</ENUM>;
    /**
     * Set ChangeStatus to false and KeepWaitListStatus to false if you wish the  status of the new segments to be set based upon the ActionStatusCodes  specified in the ToJourney.  Set ChangeStatus to false and KeepWaitListStatus to true if you wish the  status of the new segments to be set based upon the ActionStatusCodes  specified in the ToJourney EXCEPT when the original segments (being moved  from) are waitlisted.  If the original segments are waitlisted, then the  new segments will also be forced to be waitlisted, regardless of which  ActionStatusCodes were specified in ToJourney.  If ChangeStatus is true, the status of the new segments will be set to  the opposite of the status of the original (moving from) segment.  If the  original segments were waitlisted, then new segments will not be.  If the  original segments were not waitlisted, the new segments will be waitlisted.  This does not need to be set to true if moving to a standby journey that is  already part of the booking.
     */
    changeStatus?: boolean;
    /**
     * If set to true and the active Agent has appropriate permissions, the move will  be allowed even if no space is available on the ToJourney.
     */
    oversell?: boolean;
    /**
     * If set to zero and MovePassengerJourneyType is not Diversion, the boarding sequence  of the original segments will be copied to the new (moved to) segments.  If set to a value other than zero and MovePassengerJourneyType is not Diversion,  the boarding sequence of the original segments will be copied to the new (moved to)  segments and then incremented by the specified BoardingSequenceOffset.  Boarding sequence is not preserved for Diversion moves.
     */
    boardingSequenceOffset?: number;
    /**
     * Controls whether to move SSRs from FromJourney to ToJourney.
     */
    moveSsrOption?: Enums.<ENUM>'OverbookSsr'|'MoveAvailableSsr'|'MoveNone'</ENUM>;
}