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
import { TravelQueueItemBase } from './travelQueueItemBase';
import { TravelQueueRequest } from './travelQueueRequest';


/**
 * API request object used to enqueue a new travel queue item.
 */
import * as Enums from '../enums';

export interface TravelQueueItemRequest { 
    /**
     * Flight queue item to enqueue on the matching flight queues.
     */
    item: TravelQueueItemBase;
    /**
     * Queue information about this item.
     */
    queue: TravelQueueRequest;
    /**
     * Queue event code used for matching flight queues.
     */
    queueEventCode?: string;
    /**
     * Time event code used for matching flight queues.
     */
    timeEventCode?: string;
}