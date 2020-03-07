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
import { ServiceCharge } from './serviceCharge';


/**
 * Model that represents the passenger fare details.
 */
import * as Enums from '../types/enums';

export interface PassengerFare { 
    /**
     * The service charges.
     */
    serviceCharges?: Array<ServiceCharge>;
    /**
     * The passenger discount code.
     */
    discountCode?: string;
    /**
     * The fare discount code.
     */
    fareDiscountCode?: string;
    /**
     * The type of the passenger.
     */
    passengerType: string;
}
