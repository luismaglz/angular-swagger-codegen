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
 * The create transaction request.
 */
export interface TransactionRequest {
  /**
   * The credit account transaction amount.
   */
  amount: number;
  /**
   * The credit account transaction currency code.
   */
  currencyCode: string;
  /**
   * The credit account transaction note.
   */
  note?: string;
}
