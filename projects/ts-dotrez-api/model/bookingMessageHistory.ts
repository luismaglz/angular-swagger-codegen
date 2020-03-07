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
 * Defines a booking message history log entry.
 */
import * as Enums from '../types/enums';

export interface BookingMessageHistory { 
    /**
     * The message history type.
     */
    type?: Enums.<ENUM>'TeletypeMessage'|'ETicket'|'GovernmentSecurity'|'PnrGovernment'</ENUM>;
    /**
     * The message.
     */
    message?: string;
    /**
     * The created date.
     */
    createdDate?: Date;
}
