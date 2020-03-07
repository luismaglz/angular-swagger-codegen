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
 * Defines the received by information.
 */
import * as Enums from '../enums';

export interface ReceivedByInfo { 
    /**
     * The received by name.
     */
    receivedBy?: string;
    /**
     * The latest received by name.
     */
    latestReceivedBy?: string;
    /**
     * The received by reference.
     */
    receivedReference?: string;
    /**
     * The latest received by reference.
     */
    latestReceivedReference?: string;
    /**
     * The referral code.
     */
    referralCode?: string;
}
