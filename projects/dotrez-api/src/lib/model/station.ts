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
import { StationLocationDetails } from "./stationLocationDetails";

/**
 * Defines a station.
 */
export interface Station {
  /**
   * The station unique code.
   */
  stationCode: string;
  /**
   * The flag indicating if the station is inactive.
   */
  inActive?: boolean;
  /**
   * <b>Deprecated</b> - Please use api/nsk/v1/settings/general/codes endpoint to verify role based access instead.
   */
  allowed?: boolean;
  /**
   * The stations unique ICAO code. //todo: document and expand acronym
   */
  icaoCode?: string;
  /**
   * The full display name.
   */
  fullName?: string;
  /**
   * The short display name.
   */
  shortName?: string;
  /**
   * The stations MAC (multiple airport code) code.
   */
  macCode?: string;
  /**
   * The stations default currency code.
   */
  currencyCode?: string;
  /**
   * The stations configured conversion currency code.
   */
  conversionCurrencyCode?: string;
  /**
   * The culture code.
   */
  cultureCode?: string;
  /**
   * The stations configured class.
   */
  _class?: string;
  /**
   * The stations location details.
   */
  locationDetails?: StationLocationDetails;
}
