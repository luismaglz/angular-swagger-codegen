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
 * Defines a trip downgrade request.
 */
export interface TripDowngradeRequest { 
    /**
     * The collection of segments that can be downgraded.
     */
    segmentKeys: Array<string>;
    /**
     * The reserving inventory action of the upgrade once sold by the system.
     */
    inventoryControl?: TripDowngradeRequest.InventoryControlEnum;
}
export namespace TripDowngradeRequest {
    export type InventoryControlEnum = 'HoldSpace' | 'SoftHoldSpace' | 'ClaimSpace' | 'OversellSpace' | 'StandBy';
    export const InventoryControlEnum = {
        HoldSpace: 'HoldSpace' as InventoryControlEnum,
        SoftHoldSpace: 'SoftHoldSpace' as InventoryControlEnum,
        ClaimSpace: 'ClaimSpace' as InventoryControlEnum,
        OversellSpace: 'OversellSpace' as InventoryControlEnum,
        StandBy: 'StandBy' as InventoryControlEnum
    };
}
