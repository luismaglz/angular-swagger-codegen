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
import { PassengerFareAvailability } from './passengerFareAvailability';


/**
 * The fare availability represents a master fare reference with all the fare details.
 */
import * as Enums from '../types/enums';

export interface FareAvailabilityv2 { 
    /**
     * Flag indicating of the fare is the governing fare.
     */
    readonly isGoverning?: boolean;
    /**
     * The fare basis code.
     */
    fareBasisCode?: string;
    /**
     * The class of service.
     */
    classOfService?: string;
    /**
     * The fare class type.
     */
    classType?: string;
    /**
     * The fare application type.
     */
    fareApplicationType?: Enums.FareApplicationType;
    /**
     * The fare status.
     */
    fareStatus?: Enums.FareStatus;
    /**
     * The fare product class.
     */
    productClass?: string;
    /**
     * The fare rule number.
     */
    ruleNumber?: string;
    /**
     * The fare rule tariff.
     */
    ruleTariff?: string;
    /**
     * The fare collection of passenger price breakdown.
     */
    passengerFares?: Array<PassengerFareAvailability>;
    /**
     * The travel class code.
     */
    travelClassCode?: string;
    /**
     * Gets or sets a value indicating whether this fare is an allotment market fare.
     */
    isAllotmentMarketFare?: boolean;
    /**
     * The reference to the fare from the journey fare available.
     */
    reference?: string;
}
