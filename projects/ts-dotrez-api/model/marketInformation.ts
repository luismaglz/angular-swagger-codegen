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
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * Model information about the market arrival and destination details.
 */
export interface MarketInformation { 
    /**
     * Gets or sets the leg arrival station.
     */
    identifier: TransportationIdentifier;
    /**
     * Gets or sets the leg arrival station.
     */
    destination: string;
    /**
     * Gets or sets the leg departure station.
     */
    origin: string;
    /**
     * The departure date.
     */
    departureDate: Date;
}
