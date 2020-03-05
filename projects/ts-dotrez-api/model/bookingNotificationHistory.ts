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
 * Defines a booking notification history.
 */

    import { BookingNotificationHistory<CAP>eventTypeCode<CAP> } from '../models/enums';

export interface BookingNotificationHistory { 
    /**
     * The booking notification history key.
     */
    bookingNotificationHistoryKey?: string;
    /**
     * Date and time the history was logged.
     */
    createdDate?: Date;
    /**
     * Event type code of the notification.
     */
    eventTypeCode?: BookingNotificationHistory<CAP>eventTypeCode<CAP>;
    /**
     * Delivery method code of the notification.
     */
    deliveryMethodCode?: string;
    /**
     * Destination address of the notification.
     */
    destination?: string;
    /**
     * Culture code of the notification.
     */
    cultureCode?: string;
    /**
     * Details of the booking notification history.
     */
    detail?: string;
    /**
     * Reminder time for the notification.
     */
    minutesToEvent?: number;
}
