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
 * Model for a ticket applied to a passenger.
 */
import * as Enums from '../enums';

export interface Ticket { 
    /**
     * The ticket number.
     */
    ticketNumber?: string;
    /**
     * The infant ticket number.
     */
    infantTicketNumber?: string;
    /**
     * The ticket indicator.
     */
    ticketIndicator?: Enums.<ENUM>'Unknown'|'TicketRequired'|'AutomatedTicketLiftRequired'|'ManualTicketLiftRequired'|'AutomatedTicketNoLiftRequired'|'ManualTicketNoLiftRequired'|'HostETicketNoLiftRequired'|'ElectronicTicketNoLiftRequired'</ENUM>;
    /**
     * The ticket status.
     */
    ticketStatus?: Enums.<ENUM>'Unknown'|'TicketAvailableForUse'|'TicketUnavailableForUse'|'TicketReissueRequiredForPassenger'|'TicketReissueRequiredForInfant'|'TicketReissueRequiredForBoth'</ENUM>;
    /**
     * The passenger key the ticket is associated with.
     */
    passengerKey?: string;
}