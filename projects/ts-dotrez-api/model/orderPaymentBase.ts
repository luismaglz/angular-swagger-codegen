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
import { Address } from './address';
import { Name } from './name';
import { PhoneNumber } from './phoneNumber';


/**
 * Defines the order payment base details.
 */
import * as Enums from '../types/enums';

export interface OrderPaymentBase { 
    /**
     * The payment type.
     */
    type: string;
    /**
     * The name on the payment.
     */
    name?: Name;
    /**
     * The number on the payment.
     */
    number: string;
    /**
     * The expiration date.
     */
    expiration?: Date;
    /**
     * The CVV on the payment.
     */
    cvv?: string;
    /**
     * The applied payment amount.
     */
    amount?: number;
    /**
     * The payment description.
     */
    description?: string;
    /**
     * The payment issue number.
     */
    issueNumber?: string;
    /**
     * The payments address.
     */
    address?: Address;
    /**
     * The provided email address.
     */
    emailAddress?: string;
    /**
     * The collection of phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber>;
}
