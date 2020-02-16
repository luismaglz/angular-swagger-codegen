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
 * Defines the amounts due for an order.
 */
export interface AmountDue {
  /**
   * The pre tax total.
   */
  preTax?: number;
  /**
   * The tax total.
   */
  tax?: number;
  /**
   * The total.
   */
  total?: number;
}
