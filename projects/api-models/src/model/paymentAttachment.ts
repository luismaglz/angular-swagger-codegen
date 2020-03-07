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


/**
 * Defines a payment attachment.
 */
import * as Enums from '../enums';

export interface PaymentAttachment { 
    /**
     * The attachment ID.
     */
    id?: number;
    /**
     * The payment ID attached to.
     */
    paymentId?: number;
    /**
     * The attachment data.
     */
    attachment?: string;
}
