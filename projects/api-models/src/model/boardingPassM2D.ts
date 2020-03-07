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
import { BoardingPassPassengerDetailsBase } from './boardingPassPassengerDetailsBase';
import { BoardingPassSegment } from './boardingPassSegment';
import { ServiceCharge } from './serviceCharge';


/**
 * Represents the boarding pass following the M2D barcode format.
 */
import * as Enums from '../enums';

export interface BoardingPassM2D { 
    /**
     * The collection of boarding pass segments.
     */
    segments?: Array<BoardingPassSegment>;
    /**
     * The passenger details.
     */
    passenger?: BoardingPassPassengerDetailsBase;
    /**
     * The user name of the logged in user.
     */
    userName?: string;
    /**
     * The barcode (M2D format) for all the segments.
     */
    barCode?: string;
    /**
     * The IATA code.
     */
    iataCode?: string;
    /**
     * The acting fare basis code.
     */
    fareBasisCode?: string;
    /**
     * The acting fare class.
     */
    fareClass?: string;
    /**
     * The base fare amount.
     */
    baseFare?: number;
    /**
     * The total fare amount.
     */
    totalFare?: number;
    /**
     * The total cost amount.
     */
    totalCost?: number;
    /**
     * The discounted fare amount.
     */
    discountedFare?: number;
    /**
     * The total amount of tax.
     */
    totalTax?: number;
    /**
     * The receipt number.
     */
    receiptNumber?: string;
    /**
     * The collection of service charges for this segment.
     */
    serviceCharges?: Array<ServiceCharge>;
}