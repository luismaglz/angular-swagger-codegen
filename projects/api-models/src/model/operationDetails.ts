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
import { OperationCounts } from './operationCounts';
import { TransportationIdentifier } from './transportationIdentifier';
import { TripOperationComment } from './tripOperationComment';
import { TripOperationCrew } from './tripOperationCrew';
import { TripOperationDelay } from './tripOperationDelay';
import { TripOperationHistory } from './tripOperationHistory';
import { TripOperationPayload } from './tripOperationPayload';
import { TripOperationTimes } from './tripOperationTimes';


/**
 * Represents the operation details model.
 */
import * as Enums from '../enums';

export interface OperationDetails { 
    /**
     * Represents the tail number for the aircraft.
     */
    tailNumber?: string;
    /**
     * Represents the equipment type for the leg.
     */
    equipmentType?: string;
    /**
     * Represents the equipment type suffix for the leg.
     */
    equipmentTypeSuffix?: string;
    /**
     * Represents the trip status.
     */
    status?: Enums.<ENUM>'Normal'|'Closed'|'Canceled'|'Suspended'|'ClosedPending'|'BlockAllActivities'|'Mishap'</ENUM>;
    /**
     * Represents the transportation identifier.
     */
    identifier?: TransportationIdentifier;
    /**
     * Represents the trip operation time events.
     */
    tripOperationTimes?: TripOperationTimes;
    /**
     * Represents the various counts related to the operation.
     */
    counts?: OperationCounts;
    /**
     * A list of trip operation delays.
     */
    delays?: Array<TripOperationDelay>;
    /**
     * Represents the list of trip operation payloads.
     */
    payloads?: Array<TripOperationPayload>;
    /**
     * Represents the list of crew members.
     */
    crewList?: Array<TripOperationCrew>;
    /**
     * Represents the comments related to this trip operation.
     */
    comments?: Array<TripOperationComment>;
    /**
     * Represents the history of this trip operation.
     */
    historyList?: Array<TripOperationHistory>;
}