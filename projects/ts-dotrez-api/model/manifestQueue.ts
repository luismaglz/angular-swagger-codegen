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
 * Manifest Queue.
 */

    import { ManifestQueue<CAP>queueAction</CAP> } from '../models/enums';

export interface ManifestQueue { 
    /**
     * Represents the unique identifier for the manifest queue model.
     */
    manifestQueueKey?: string;
    /**
     * The action that will be taken as a result of the placement in.
     */
    queueAction?: ManifestQueue<CAP>queueAction</CAP>;
    /**
     * The QueueCategoryCode property.
     */
    queueCategoryCode?: string;
    /**
     * The identifier for the queue where the booking is placed.
     */
    queueCode?: string;
    /**
     * The name for the queue where the booking is placed.
     */
    queueName?: string;
}
