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
export interface BookingMessageHistory { 
    /**
     * The message history type.
     */
    type?: BookingMessageHistory.TypeEnum;
    /**
     * The message.
     */
    message?: string;
    /**
     * The created date.
     */
    createdDate?: Date;
}
export namespace BookingMessageHistory {
    export type TypeEnum = 'TeletypeMessage' | 'ETicket' | 'GovernmentSecurity' | 'PnrGovernment';
    export const TypeEnum = {
        TeletypeMessage: 'TeletypeMessage' as TypeEnum,
        ETicket: 'ETicket' as TypeEnum,
        GovernmentSecurity: 'GovernmentSecurity' as TypeEnum,
        PnrGovernment: 'PnrGovernment' as TypeEnum
    };
}
