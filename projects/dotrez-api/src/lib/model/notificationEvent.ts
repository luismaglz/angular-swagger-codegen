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
 * A travel notification event.
 */
export interface NotificationEvent { 
    /**
     * The created date of the travel notification.
     */
    createdDate?: Date;
    /**
     * The travel notification event type.
     */
    type: NotificationEvent.TypeEnum;
}
export namespace NotificationEvent {
    export type TypeEnum = 'DepartureDelay' | 'ArrivalDelay' | 'ScheduleChange' | 'CheckIn';
    export const TypeEnum = {
        DepartureDelay: 'DepartureDelay' as TypeEnum,
        ArrivalDelay: 'ArrivalDelay' as TypeEnum,
        ScheduleChange: 'ScheduleChange' as TypeEnum,
        CheckIn: 'CheckIn' as TypeEnum
    };
}
