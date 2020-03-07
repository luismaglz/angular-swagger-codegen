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
import { PassengerFee } from './passengerFee';


/**
 * Defines information for the payment fee response.
 */
import * as Enums from '../types/enums';

export interface PaymentFeeResponse { 
    /**
     * The amount being payed.
     */
    feeAmount: number;
    /**
     * Is a fixed amount.
     */
    isFixedAmount?: boolean;
    /**
     * Passenger fee details.
     */
    passengerFees?: Array<PassengerFee>;
}
