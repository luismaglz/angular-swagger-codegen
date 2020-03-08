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
import * as Enums from '../enums';

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
    type?: Enums.QueueEventType;
    /**
     * The action that will be taken as a result of the placement in the queue.
     */
    action?: Enums.QueueAction;
    /**
     * The indicator if this entry was added or removed from the queue.
     */
    mode?: Enums.QueueMode;
    /**
     * The flight reference.
     */
    flightReference?: string;
}
