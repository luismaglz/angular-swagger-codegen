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
import { Name } from './name';
import { PersonBasicInformation } from './personBasicInformation';


/**
 * Defines the person create request.
 */
export interface PersonEditRequest { 
    /**
     * The persons true name.
     */
    name: Name;
    /**
     * The type of person.
     */
    type?: PersonEditRequest.TypeEnum;
    /**
     * The status of the person.
     */
    status?: PersonEditRequest.StatusEnum;
    /**
     * The person's basic information.
     */
    details?: PersonBasicInformation;
    /**
     * The person's notification preference.
     */
    notificationPreference?: PersonEditRequest.NotificationPreferenceEnum;
}
export namespace PersonEditRequest {
    export type TypeEnum = 'None' | 'Customer' | 'Agent';
    export const TypeEnum = {
        None: 'None' as TypeEnum,
        Customer: 'Customer' as TypeEnum,
        Agent: 'Agent' as TypeEnum
    };
    export type StatusEnum = 'Active' | 'Terminated' | 'Suspended';
    export const StatusEnum = {
        Active: 'Active' as StatusEnum,
        Terminated: 'Terminated' as StatusEnum,
        Suspended: 'Suspended' as StatusEnum
    };
    export type NotificationPreferenceEnum = 'None' | 'Promotional';
    export const NotificationPreferenceEnum = {
        None: 'None' as NotificationPreferenceEnum,
        Promotional: 'Promotional' as NotificationPreferenceEnum
    };
}
