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
import { BoardingPassPassengerDetailsv2 } from "./boardingPassPassengerDetailsv2";
import { BoardingPassSegment } from "./boardingPassSegment";
import { ServiceCharge } from "./serviceCharge";

/**
 * Defines the top level boarding pass details.
 */
export interface BoardingPassv2 {
  /**
   * The passenger details.
   */
  passenger?: BoardingPassPassengerDetailsv2;
  /**
   * The user name of the logged in user.
   */
  userName?: string;
  /**
   * The collection of segments for the barcode.  Note these can represent leg information on a change of gauge flight.
   */
  segments?: Array<BoardingPassSegment>;
  /**
   * The IATA code.
   */
  iataCode?: string;
  /**
   * The acting fare basis code.
   */
  fareBasisCode?: string;
  /**
   * The acting fare class.
   */
  fareClass?: string;
  /**
   * The base fare amount.
   */
  baseFare?: number;
  /**
   * The total fare amount.
   */
  totalFare?: number;
  /**
   * The total cost amount.
   */
  totalCost?: number;
  /**
   * The discounted fare amount.
   */
  discountedFare?: number;
  /**
   * The total amount of tax.
   */
  totalTax?: number;
  /**
   * The receipt number.
   */
  receiptNumber?: string;
  /**
   * The collection of service charges for this segment.
   */
  serviceCharges?: Array<ServiceCharge>;
}
