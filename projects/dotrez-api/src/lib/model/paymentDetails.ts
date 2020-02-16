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
import { PaymentDetailsFields } from "./paymentDetailsFields";

/**
 * Defines the payment details.
 */
export interface PaymentDetails {
  /**
   * The reference of an encrypted account number.
   */
  accountNumberId?: number;
  /**
   * ID of the parent of refunds or divide. Null if none exists.
   */
  parentPaymentId?: number;
  /**
   * The account holder name.
   */
  accountName?: string;
  /**
   * The account number.
   */
  accountNumber?: string;
  /**
   * The expiration date.
   */
  expirationDate?: Date;
  /**
   * The payment added text.
   */
  text?: string;
  /**
   * The number of installments to be applied.
   */
  installments?: number;
  /**
   * The first 6 digits of the credit card number.
   */
  binRange?: number;
  fields?: PaymentDetailsFields;
}
