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
import * as Enums from '../enums';

export interface TripDowngradeRequest { 
    /**
     * The collection of segments that can be downgraded.
     */
    segmentKeys: Array<string>;
    /**
     * The reserving inventory action of the upgrade once sold by the system.
     */
    inventoryControl?: Enums.<ENUM>'HoldSpace'|'SoftHoldSpace'|'ClaimSpace'|'OversellSpace'|'StandBy'</ENUM>;
}