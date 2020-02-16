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
 * Represents the manifest request base model.
 */
export interface ManifestRequestBase {
  /**
   * Represents the weight type for all bags in the manifest.
   */
  baggageWeightType?: ManifestRequestBase.BaggageWeightTypeEnum;
  /**
   * Specify whether the returned manifest includes   downline(.D)/inbound(.I) IATCI connections.
   */
  iatciLookAhead?: boolean;
  /**
   * The filters for the manifest.
   */
  manifestFilters?: Array<ManifestRequestBase.ManifestFiltersEnum>;
}
export namespace ManifestRequestBase {
  export type BaggageWeightTypeEnum = "Default" | "Pounds" | "Kilograms";
  export type ManifestFiltersEnum =
    | "None"
    | "Baggage"
    | "PassengerTravelDoc"
    | "PassengerInfant"
    | "PassengerAddress"
    | "BookingComment"
    | "BookingQueue"
    | "PassengerJourneySegmentProperty"
    | "PassengerJourneySsr"
    | "InventoryLegOpComments"
    | "All";
}
