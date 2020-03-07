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
 * The booking request base model.
 */
import * as Enums from '../enums';

export interface BookingQueueRequest { 
    /**
     * The code for the booking queue.
     */
    queueCode: string;
    /**
     * The optional sub queue code.
     */
    subQueueCode?: string;
    /**
     * The authorizing agent.
     */
    authorizedBy?: string;
    /**
     * Begin priority date.
     */
    startDate?: Date;
    /**
     * The notes for the booking request.
     */
    notes?: string;
    /**
     * End priority date.
     */
    endDate?: Date;
    /**
     * The Password needed to access the queue.  Required if queue  is set to password-protected in Sky Manager.
     */
    password?: string;
}
