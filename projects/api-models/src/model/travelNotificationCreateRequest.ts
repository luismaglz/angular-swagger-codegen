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
import { NotificationEventCreateRequest } from './notificationEventCreateRequest';
import { NotificationTimedEventCreateRequest } from './notificationTimedEventCreateRequest';


/**
 * Create request for travel notifications.
 */
import * as Enums from '../enums';

export interface TravelNotificationCreateRequest { 
    /**
     * The list of travel notification event.
     */
    events?: Array<NotificationEventCreateRequest>;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The list of travel notification event.
     */
    timedEvents?: Array<NotificationTimedEventCreateRequest>;
    /**
     * The notification destination.
     */
    notificationDestination?: NotificationDestination;
}
