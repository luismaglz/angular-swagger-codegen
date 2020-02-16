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
import { PassengerFareAvailability } from "./passengerFareAvailability";

/**
 * Model describing common fare availability information for an entire availability request.
 */
export interface FareAvailability {
  /**
   * Flag that indicates if the fare is the governing fare.
   */
  readonly isGoverning?: boolean;
  /**
   * Flag indicating if a downgrade is available.
   */
  readonly downgradeAvailable?: boolean;
  /**
   * Unique key for this type of fare.
   */
  fareAvailabilityKey?: string;
  /**
   * The fare basis code.
   */
  fareCode?: string;
  /**
   * The value indicating if the fare is sum of sector.
   */
  isSumOfSector?: boolean;
  /**
   * The class of service.
   */
  classOfService?: string;
  /**
   * The fares type of the class.
   */
  classType?: string;
  /**
   * The type of the fare application.
   */
  fareApplicationType?: FareAvailability.FareApplicationTypeEnum;
  /**
   * The fare class of service.
   */
  fareClassOfService?: string;
  /**
   * The fare sequence.
   */
  fareSequence?: number;
  /**
   * The fare status.
   */
  fareStatus?: FareAvailability.FareStatusEnum;
  /**
   * The inbound and outbound.
   */
  inboundOutBound?: FareAvailability.InboundOutBoundEnum;
  /**
   * Gets or sets a value indicating whether this fare is an allotment marker.
   */
  isAllotmentMarketFare?: boolean;
  /**
   * The product class.
   */
  productClass?: string;
  /**
   * The rule number.
   */
  ruleNumber?: string;
  /**
   * The rule tariff.
   */
  ruleTariff?: string;
  /**
   * The travel class code.
   */
  travelClassCode?: string;
  /**
   * The list of passenger fares on the fare.
   */
  passengerFares?: Array<PassengerFareAvailability>;
}
export namespace FareAvailability {
  export type FareApplicationTypeEnum = "Route" | "Sector" | "Governing";
  export type FareStatusEnum =
    | "Default"
    | "SameDayStandBy"
    | "FareOverrideConfirming"
    | "FareOverrideConfirmed"
    | "PublishedFareOverrideConfirming"
    | "PublishedFareOverrideConfirmed";
  export type InboundOutBoundEnum =
    | "None"
    | "Inbound"
    | "Outbound"
    | "Both"
    | "RoundFrom"
    | "RoundTo";
}
