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
 * A one time notification event.
 */
import * as Enums from '../enums';

export interface OneTimeNotificationEvent { 
    /**
     * The created date of the travel notification.
     */
    createdDate?: Date;
    /**
     * The one time travel notification event type.
     */
    type: Enums.OneTimeNotificationEventType;
}
