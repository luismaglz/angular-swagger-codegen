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
  ticketIndicator?: Ticket.TicketIndicatorEnum;
  /**
   * The ticket status.
   */
  ticketStatus?: Ticket.TicketStatusEnum;
  /**
   * The passenger key the ticket is associated with.
   */
  passengerKey?: string;
}
export namespace Ticket {
  export type TicketIndicatorEnum =
    | "Unknown"
    | "TicketRequired"
    | "AutomatedTicketLiftRequired"
    | "ManualTicketLiftRequired"
    | "AutomatedTicketNoLiftRequired"
    | "ManualTicketNoLiftRequired"
    | "HostETicketNoLiftRequired"
    | "ElectronicTicketNoLiftRequired";
  export type TicketStatusEnum =
    | "Unknown"
    | "TicketAvailableForUse"
    | "TicketUnavailableForUse"
    | "TicketReissueRequiredForPassenger"
    | "TicketReissueRequiredForInfant"
    | "TicketReissueRequiredForBoth";
}
