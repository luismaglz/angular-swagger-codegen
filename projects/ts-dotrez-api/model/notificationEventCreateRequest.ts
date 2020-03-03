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
 * A travel notification event create request.
 */
export interface NotificationEventCreateRequest { 
    /**
     * The travel notification event type.
     */
    type: NotificationEventCreateRequest.TypeEnum;
}
export namespace NotificationEventCreateRequest {
    export type TypeEnum = 'DepartureDelay' | 'ArrivalDelay' | 'ScheduleChange' | 'CheckIn';
    export const TypeEnum = {
        DepartureDelay: 'DepartureDelay' as TypeEnum,
        ArrivalDelay: 'ArrivalDelay' as TypeEnum,
        ScheduleChange: 'ScheduleChange' as TypeEnum,
        CheckIn: 'CheckIn' as TypeEnum
    }
}
