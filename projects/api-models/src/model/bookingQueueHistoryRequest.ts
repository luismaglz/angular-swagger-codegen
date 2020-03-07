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
 * The booking queue history request model.
 */
import * as Enums from '../enums';

export interface BookingQueueHistoryRequest { 
    /**
     * The password needed to access the queue.  Required if queue  is set to password-protected in Sky Manager.
     */
    password?: string;
    /**
     * Indicates the last item number in the history list that was returned.
     */
    lastPageIndex?: number;
    /**
     * Used to specify the number of records to return when paging is supported.  This is optional.
     */
    pageSize?: number;
    /**
     * Gets or sets the from archive flag needed to access the queue.
     */
    fromArchive?: boolean;
}
