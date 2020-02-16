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
import { LowFare } from "./lowFare";
import { LowFareAmount } from "./lowFareAmount";

/**
 * Low fare availability contains all information returned when requesting a low fare trip availability.
 */
export interface LowFareDateMarket {
  /**
   * The lowest passenger fare amount for the date market.
   */
  readonly lowestFareAmount?: LowFareAmount;
  /**
   * The low fare information for a specific flight.
   */
  lowFares?: Array<LowFare>;
  /**
   * The destination station code.
   */
  destination?: string;
  /**
   * The origin station code.
   */
  origin?: string;
  /**
   * The departure date. This is the date only.
   */
  departureDate?: Date;
}
