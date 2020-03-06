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

    import { NotificationDestinationDeliveryMethodCode } from '../types/enums';

export interface NotificationDestination { 
    /**
     * The delivery method code.
     */
    deliveryMethodCode: NotificationDestinationDeliveryMethodCode;
    /**
     * The notification destination, an email or phone number.
     */
    destination?: string;
}
