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
 * Defines the trip upgrade request.
 */
export interface TripUpgradeBaseRequest { 
    /**
     * The reserving inventory action of the upgrade once sold by the system.
     */
    inventoryControl?: TripUpgradeBaseRequest.InventoryControlEnum;
    /**
     * Flag indicating to override the fee if permissions allow it.
     */
    overrideFee?: boolean;
    /**
     * The option currency code if different than the bookings currency code.
     */
    collectedCurrencyCode?: string;
}
export namespace TripUpgradeBaseRequest {
    export type InventoryControlEnum = 'HoldSpace' | 'SoftHoldSpace' | 'ClaimSpace' | 'OversellSpace' | 'StandBy';
    export const InventoryControlEnum = {
        HoldSpace: 'HoldSpace' as InventoryControlEnum,
        SoftHoldSpace: 'SoftHoldSpace' as InventoryControlEnum,
        ClaimSpace: 'ClaimSpace' as InventoryControlEnum,
        OversellSpace: 'OversellSpace' as InventoryControlEnum,
        StandBy: 'StandBy' as InventoryControlEnum
    }
}
