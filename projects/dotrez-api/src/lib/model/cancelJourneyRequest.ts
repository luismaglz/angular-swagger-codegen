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
 * Defines the options available when canceling a journey.
 */
export interface CancelJourneyRequest {
  /**
   * Flag indicating to waive penalty fees if role permitting.
   */
  waivePenaltyFee?: boolean;
  /**
   * Flag indicating to waive spoilage fees if role permitting.
   */
  waiveSpoilageFee?: boolean;
  /**
   * Flag indicating to prevent reprice if role permitting.
   */
  preventReprice?: boolean;
  /**
   * Flag indicating to invoke price with force refare itinerary set to true (default value is set to true).
   */
  forceRefareForItineraryIntegrity?: boolean;
}
