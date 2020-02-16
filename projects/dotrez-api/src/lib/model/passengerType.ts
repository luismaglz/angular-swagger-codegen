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
 * The passenger type model.
 */
export interface PassengerType {
  /**
   * The non-adult for the passenger type.
   */
  readonly nonAdult?: boolean;
  /**
   * The code for the passenger type.
   */
  passengerTypeCode: string;
  /**
   * The name for the passenger type.
   */
  name?: string;
  /**
   * The allowed flag for the passenger type.
   */
  allowed?: boolean;
  /**
   * The inactive flag for the passenger type.
   */
  inActive?: boolean;
  /**
   * The type indicator specifying the age group this belongs to.
   */
  typeIndicator?: PassengerType.TypeIndicatorEnum;
  /**
   * The minimum age for the passenger type.
   */
  minimumAge?: number;
  /**
   * The maximum age for the passenger type.
   */
  maximumAge?: number;
}
export namespace PassengerType {
  export type TypeIndicatorEnum = "Adult" | "Infant" | "Child" | "NonAdult";
}
