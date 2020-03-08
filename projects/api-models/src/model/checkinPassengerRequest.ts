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
 * Defines the individual passenger checkin request.
 */
import * as Enums from '../enums';

export interface CheckinPassengerRequest { 
    /**
     * The unique passenger key being checked in.
     */
    passengerKey: string;
    /**
     * The passengers transit type.
     */
    transitType?: Enums.TransitType;
    /**
     * Flag indicating to process APPS.
     */
    processApps?: boolean;
    /**
     * The value specifying the verified travel document(s) associated with this checkin.
     */
    verifiedReference?: string;
}
