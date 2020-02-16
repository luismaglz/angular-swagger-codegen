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
import { BookingPaymentTransfer } from "./bookingPaymentTransfer";
import { RecordLocator } from "./recordLocator";

/**
 * Defines the booking divide request.
 */
export interface DivideRequestv2 {
  /**
   * The CRS record locators.
   */
  crsRecordLocators?: Array<RecordLocator>;
  /**
   * The passengers to include specified by their respective keys.
   */
  passengerKeys?: Array<string>;
  /**
   * Allow the divide to automatically divide payments between bookings.
   */
  autoDividePayments?: boolean;
  /**
   * Specific amounts to split between the bookings. This is applied if auto divide payments is set to false.
   */
  bookingPaymentTransfers?: Array<BookingPaymentTransfer>;
  /**
   * Specify the user requesting the booking divide.
   */
  receivedBy?: string;
  /**
   * Override any restrictions that may prevent divide.
   */
  overrideRestrictions?: boolean;
  /**
   * The email address for the child booking.
   */
  childEmail?: string;
  /**
   * Cancel the created booking after divide. If this is set to true the cancelled booking  is not returned and its PNR is not easily available.
   */
  cancelSourceBooking?: boolean;
}
