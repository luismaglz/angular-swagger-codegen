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
 * Defines a location.
 */
export interface OrderLocation {
  /**
   * The location description.
   */
  description?: string;
  /**
   * The unique location code.
   */
  code: string;
  /**
   * The UTC offset.
   */
  utcOffset?: number;
  /**
   * The usage date at this location.
   */
  usageDate: Date;
}
