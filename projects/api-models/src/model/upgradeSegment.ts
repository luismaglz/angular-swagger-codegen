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
import { Upgrade } from './upgrade';


/**
 * Defines a available upgrade segment.
 */
import * as Enums from '../enums';

export interface UpgradeSegment { 
    /**
     * The segments flight designator.
     */
    transportationIdentifier?: TransportationIdentifier;
    /**
     * The standard time of departure.
     */
    departureTime?: Date;
    /**
     * The departure station.
     */
    departureStation?: string;
    /**
     * The arrival station.
     */
    arrivalStation?: string;
    /**
     * The list of available upgrades.
     */
    upgrades?: Array<Upgrade>;
}
