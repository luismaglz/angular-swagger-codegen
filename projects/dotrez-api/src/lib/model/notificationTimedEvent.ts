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
 * A travel notification timed event.
 */
export interface NotificationTimedEvent { 
    /**
     * The created date of the travel notification.
     */
    createdDate?: Date;
    /**
     * The minutes to the event.
     */
    minutesToEvent?: number;
    /**
     * The travel notification timed event type.
     */
    type: NotificationTimedEvent.TypeEnum;
}
export namespace NotificationTimedEvent {
    export type TypeEnum = 'Departure' | 'Arrival';
    export const TypeEnum = {
        Departure: 'Departure' as TypeEnum,
        Arrival: 'Arrival' as TypeEnum
    };
}
