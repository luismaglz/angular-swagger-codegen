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
import { PointOfSale } from './pointOfSale';


/**
 * Represents a booking queue history item.
 */

    import { BookingQueueHistoryHistoryEvent } from '../types/enums';
    import { BookingQueueHistoryQueueAction } from '../types/enums';
    import { BookingQueueHistoryQueueType } from '../types/enums';

export interface BookingQueueHistory { 
    /**
     * The alternate passenger key.
     */
    alternatePassengerKey?: string;
    /**
     * The booking queue history ID.
     */
    historyId?: number;
    /**
     * The booking queue history event type.
     */
    historyEvent?: BookingQueueHistoryHistoryEvent;
    /**
     * The booking queue code.
     */
    queueCode?: string;
    /**
     * The booking queue note.
     */
    note?: string;
    /**
     * The note associated with a dequeue action.
     */
    dequeueNote?: string;
    /**
     * The booking queue authorized by field.
     */
    authorizedBy?: string;
    /**
     * The booking queue priority date.
     */
    priorityDate?: Date;
    /**
     * The booking queue action.
     */
    queueAction?: BookingQueueHistoryQueueAction;
    /**
     * The booking queue domain code.
     */
    domainCode?: string;
    /**
     * The key of the user that created the booking queue event.
     */
    createdByUserKey?: string;
    /**
     * The booking queue item created date.
     */
    createdDate?: Date;
    /**
     * The booking queue item event type.
     */
    queueType?: BookingQueueHistoryQueueType;
    /**
     * The booking queue item point of sale.
     */
    pointOfSale?: PointOfSale;
    /**
     * The booking queue item segment key.
     */
    segmentKey?: string;
    /**
     * The watch list ID of the booking queue entry.
     */
    watchListId?: number;
}
