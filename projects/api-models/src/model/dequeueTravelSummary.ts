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
import { TravelSummary } from './travelSummary';


/**
 * Represents an travel entry when dequeued.
 */
import * as Enums from '../enums';

export interface DequeueTravelSummary { 
    /**
     * Travel summary.
     */
    summary?: TravelSummary;
    /**
     * The unique travel queue item key.
     */
    travelQueueKey?: string;
    /**
     * Market designator.
     */
    information: MarketInformation;
    /**
     * Process status.
     */
    processStatus?: Enums.QueueProcessStatus;
    /**
     * Notes.
     */
    notes?: string;
    /**
     * Process state.
     */
    processState?: Enums.QueueProcessState;
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
