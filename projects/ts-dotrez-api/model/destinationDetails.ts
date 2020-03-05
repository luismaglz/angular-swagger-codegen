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
import { GateInformation } from './gateInformation';


/**
 * Represents the destination details model.
 */

    import { DestinationDetails<CAP>status<CAP> } from '../models/enums';

export interface DestinationDetails { 
    /**
     * Represents the arrival status.
     */
    status?: DestinationDetails<CAP>status<CAP>;
    /**
     * Represents additional information about the  trip operation station.
     */
    note?: string;
    /**
     * Represents the airline defined location where the trip's  luggage is to be retrieved.
     */
    baggageClaim?: string;
    /**
     * Represents the gate details.
     */
    gate?: GateInformation;
    /**
     * The station code.
     */
    station?: string;
}
