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
 * Region rate model.
 */
export interface RegionRate {
  /**
   * The currency code of this region rate.
   */
  currencyCode?: string;
  /**
   * The rate amount of this region rate.
   */
  rateAmount?: number;
  /**
   * The region code of this region rate.
   */
  regionCode: string;
  /**
   * The region fee ID of this region rate.
   */
  regionFeeId?: number;
  /**
   * The region rate ID of this region rate.
   */
  regionRateId?: number;
  /**
   * The type of this region rate.
   */
  regionType?: RegionRate.RegionTypeEnum;
}
export namespace RegionRate {
  export type RegionTypeEnum =
    | "Default"
    | "Station"
    | "City"
    | "ProvinceState"
    | "Country"
    | "FeeZone"
    | "SubZone"
    | "Area"
    | "All"
    | "Mac";
}
