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
import * as Enums from '../enums';

export interface OriginDetails { 
    /**
     * Represents the departure status.
     */
    status?: Enums.<ENUM>'Default'|'Cancelled'|'Boarding'|'SeeAgent'|'Delayed'|'Departed'</ENUM>;
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
