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
import { GateInformation } from "./gateInformation";

/**
 * Represents the origin details model.
 */
export interface OriginDetails {
  /**
   * Represents the departure status.
   */
  status?: OriginDetails.StatusEnum;
  /**
   * Represents additional information about the  trip operation station.
   */
  note?: string;
  /**
   * Represents the gate details.
   */
  gate?: GateInformation;
  /**
   * The station code.
   */
  station?: string;
}
export namespace OriginDetails {
  export type StatusEnum =
    | "Default"
    | "Cancelled"
    | "Boarding"
    | "SeeAgent"
    | "Delayed"
    | "Departed";
}
