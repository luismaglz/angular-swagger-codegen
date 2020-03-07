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
import { ChargeBreakdown } from './chargeBreakdown';


/**
 * Defines the individual passenger level pricing breakdown.
 */
import * as Enums from '../enums';

export interface PassengerPriceBreakdown { 
    /**
     * The unique passenger number.
     */
    passengerKey?: string;
    /**
     * The charge breakdown of the service fees.
     */
    services?: ChargeBreakdown;
    /**
     * The charge breakdown of the special service requests.
     */
    specialServices?: ChargeBreakdown;
    /**
     * The charge breakdown of seat fees.
     */
    seats?: ChargeBreakdown;
    /**
     * The charge breakdown of upgrade fees.
     */
    upgrades?: ChargeBreakdown;
    /**
     * The charge breakdown of spoilage fees.
     */
    spoilage?: ChargeBreakdown;
    /**
     * The charge breakdown of name change fees.
     */
    nameChanges?: ChargeBreakdown;
    /**
     * The charge breakdown of convenience fees.
     */
    convenience?: ChargeBreakdown;
    /**
     * The charge breakdown of infant fees.
     */
    infant?: ChargeBreakdown;
}
