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
 * The location model.
 */
export interface Location {
  /**
   * The Location Code.
   */
  locationCode?: string;
  /**
   * The Name.
   */
  name?: string;
  /**
   * The location type.
   */
  locationType?: Location.LocationTypeEnum;
  /**
   * The payment group id.
   */
  paymentGroupId?: number;
  /**
   * The culture code.
   */
  cultureCode?: string;
  /**
   * The currency code.
   */
  currencyCode?: string;
  /**
   * The in active.
   */
  inActive?: boolean;
}
export namespace Location {
  export type LocationTypeEnum = "Other" | "Station" | "City";
}
