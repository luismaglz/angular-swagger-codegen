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
import { NotificationDestination } from './notificationDestination';
import { NotificationTimedEvent } from './notificationTimedEvent';
import { OneTimeNotificationEvent } from './oneTimeNotificationEvent';


/**
 * A one time travel notification.
 */

export interface OneTimeTravelNotification { 
    /**
     * The expiration date.
     */
    expirationDate?: Date;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The created date of the travel notification.
     */
    createdDate?: Date;
    /**
     * The one time travel notification key.
     */
    oneTimeTravelNotificationKey?: string;
    /**
     * The notification destination.
     */
    notificationDestination?: NotificationDestination;
    /**
     * The list of one time travel notification event.
     */
    events?: Array<OneTimeNotificationEvent>;
    /**
     * The list of travel notification event.
     */
    timedEvents?: Array<NotificationTimedEvent>;
}