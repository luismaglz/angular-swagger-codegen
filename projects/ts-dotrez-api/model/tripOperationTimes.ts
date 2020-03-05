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
import { DepartureEvent } from './departureEvent';
import { TripOperationEvents } from './tripOperationEvents';


/**
 * Represents the flight operation time events.  Null property values indicate  that there is no recorded time event for the given property name.
 */
export interface TripOperationTimes { 
    /**
     * Represents the touch down times for this flight operation.
     */
    touchDownTimes?: TripOperationEvents;
    /**
     * Represents the on-block times for this flight operation.
     */
    onBlockTimes?: TripOperationEvents;
    /**
     * Represents the departure times for this flight operation.
     */
    departureTimes?: DepartureEvent;
    /**
     * Represents the off-block time for this flight operation.
     */
    offBlockTime?: Date;
    /**
     * Represents the airborne time for this flight operation.
     */
    airborneTime?: Date;
    /**
     * Represents the crew report time for this flight operation.
     */
    crewReportTime?: Date;
    /**
     * Represents the take-off time for this flight operation.
     */
    takeOffTime?: Date;
    /**
     * Represents the movement after push-back time (taxi) for this flight operation.
     */
    movementAfterPushBackTime?: Date;
    /**
     * Represents the next information time for this flight operation.
     */
    nextInformationTime?: Date;
    /**
     * Represents the reclearance time for this flight operation.
     */
    reclearanceTime?: Date;
    /**
     * Represents the return to ramp time for this flight operation.
     */
    returnToRampTime?: Date;
    /**
     * Represents the scheduled arrival time for this flight operation.
     */
    scheduledArrivalTime?: Date;
    /**
     * Represents the date the object was last modified.
     */
    lastModifiedDate?: Date;
}
