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
 * A travel notification destination.
 */
export interface NotificationDestination {
  /**
   * The delivery method code.
   */
  deliveryMethodCode: NotificationDestination.DeliveryMethodCodeEnum;
  /**
   * The notification destination, an email or phone number.
   */
  destination?: string;
}
export namespace NotificationDestination {
  export type DeliveryMethodCodeEnum = "Email" | "Sms";
}
