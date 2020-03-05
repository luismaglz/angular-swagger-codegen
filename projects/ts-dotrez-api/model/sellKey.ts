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
 * Sell key represents the journey and the fare sell keys to combine to what journey and fare will be sold.
 */

    import { SellKey<CAP>inventoryControl<CAP> } from '../models/enums';

export interface SellKey { 
    /**
     * The journey sell key.
     */
    journeyKey: string;
    /**
     * The fare sell key.
     */
    fareAvailabilityKey: string;
    /**
     * The stand by priority code.
     */
    standbyPriorityCode?: string;
    /**
     * The reserving inventory action of the journey once sold by the system.
     */
    inventoryControl?: SellKey<CAP>inventoryControl<CAP>;
}
