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
 * Represents the origin details model.
 */

    import { OriginDetails<CAP>status</CAP> } from '../models/enums';

export interface OriginDetails { 
    /**
     * Represents the departure status.
     */
    status?: OriginDetails<CAP>status</CAP>;
    /**
     * Represents additional information about the  trip operation station.
     */
    note?: string;
    /**
     * Represents the gate details.
     */
    gate?: GateInformation;
    /**
     * The station code.
     */
    station?: string;
}
