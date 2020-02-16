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
import { MarketInformation } from "./marketInformation";
import { SsrDetail } from "./ssrDetail";

/**
 * Model information for a sell service request (SSR) tied to a specific journey.
 */
export interface SsrByJourney {
  /**
   * The unique identifier of the journey.
   */
  journeyKey?: string;
  /**
   * Journey market information.
   */
  journeyDetails?: MarketInformation;
  /**
   * The associated Ssrs.
   */
  ssrs?: Array<SsrDetail>;
}
