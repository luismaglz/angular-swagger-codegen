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
 * A one time travel notification event create request.
 */
import * as Enums from '../enums';

export interface OneTimeNotificationEventCreateRequest { 
    /**
     * The one time travel notification event type.
     */
    type: Enums.<ENUM>'DepartureDelay'|'ArrivalDelay'</ENUM>;
}
