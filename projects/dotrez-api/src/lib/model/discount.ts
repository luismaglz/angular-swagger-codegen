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
 * Defines a discount.
 */
export interface Discount {
  /**
   * The discount code.
   */
  code?: string;
  /**
   * The discount's type code.
   */
  discountTypeCode?: string;
  /**
   * The discount description.
   */
  description?: string;
  /**
   * The discount amount.
   */
  amount?: number;
}
