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
import { SeatPreferences } from './seatPreferences';


/**
 * Defines the auto assign seat request.
 */
export interface AutoAssignRequest { 
    /**
     * The list of seat preferences for the primary passenger.
     */
    preferences?: SeatPreferences;
    /**
     * The flag indicating to waive the seat fees if permissions permit.
     */
    waiveFee?: boolean;
    /**
     * The list of passenger keys for seating assignments near  the primary passenger.
     */
    seatedNearPrimary?: Array<string>;
    /**
     * Indicates the type of hold placed on a unit.
     */
    inventoryControl?: AutoAssignRequest.InventoryControlEnum;
    /**
     * The seat assignment mode.
     */
    seatAssignmentMode?: AutoAssignRequest.SeatAssignmentModeEnum;
}
export namespace AutoAssignRequest {
    export type InventoryControlEnum = 'Session' | 'None';
    export const InventoryControlEnum = {
        Session: 'Session' as InventoryControlEnum,
        None: 'None' as InventoryControlEnum
    };
    export type SeatAssignmentModeEnum = 'AutoDetermine' | 'PreSeatAssignment' | 'WebCheckIn';
    export const SeatAssignmentModeEnum = {
        AutoDetermine: 'AutoDetermine' as SeatAssignmentModeEnum,
        PreSeatAssignment: 'PreSeatAssignment' as SeatAssignmentModeEnum,
        WebCheckIn: 'WebCheckIn' as SeatAssignmentModeEnum
    };
}
