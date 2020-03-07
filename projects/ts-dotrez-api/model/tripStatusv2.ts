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
import { DestinationDetails } from './destinationDetails';
import { OperationDetails } from './operationDetails';
import { OriginDetails } from './originDetails';


/**
 * Represents the trip status version two model.
 */
import * as Enums from '../types/enums';

export interface TripStatusv2 { 
    /**
     * Represents the trip status key.
     */
    tripStatusKey?: string;
    /**
     * Represents the operation details.
     */
    operationDetails?: OperationDetails;
    /**
     * Represents details related to the trip origin location.
     */
    originDetails?: OriginDetails;
    /**
     * Represents details related to the trip destination location.
     */
    destinationDetails?: DestinationDetails;
    /**
     * The name of the agent that last modified this data.
     */
    modifiedAgentName?: string;
    /**
     * Represents the verified bit.
     */
    verified?: boolean;
    /**
     * Represents the IROP flag.
     */
    irop?: boolean;
}
