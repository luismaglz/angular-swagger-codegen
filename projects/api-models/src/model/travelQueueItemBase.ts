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
import { MarketInformation } from './marketInformation';


/**
 * Model representing the travel queue item without a unique key.
 */
import * as Enums from '../enums';

export interface TravelQueueItemBase { 
    /**
     * Market designator.
     */
    information: MarketInformation;
    /**
     * Process status.
     */
    processStatus?: Enums.<ENUM>'Ready'|'Pending'</ENUM>;
    /**
     * Notes.
     */
    notes?: string;
    /**
     * Process state.
     */
    processState?: Enums.<ENUM>'Default'|'SegmentsConfirmed'|'BookingBalanced'|'Other'|'Complete'</ENUM>;
    /**
     * Priority code.
     */
    priorityCode?: string;
    /**
     * Status.
     */
    inProgress?: boolean;
    /**
     * Priority date.
     */
    priorityDate?: Date;
    /**
     * Date status reset.
     */
    statusReset?: Date;
}
