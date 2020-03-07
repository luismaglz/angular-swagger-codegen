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
import { SeatMapDecks } from './seatMapDecks';


/**
 * Defines a single equipment type and all it's units.
 */

    import { SeatMap<CAP>category</CAP> } from '../types/enums';

export interface SeatMap { 
    /**
     * The name of the equipment.
     */
    name?: string;
    /**
     * The arrival station.
     */
    arrivalStation?: string;
    /**
     * The departure station.
     */
    departureStation?: string;
    /**
     * The marketing code on the inventory equipment.
     */
    marketingCode?: string;
    /**
     * The equipment label.
     */
    equipmentType?: string;
    /**
     * The equipment code/suffix.
     */
    equipmentTypeSuffix?: string;
    /**
     * The categorization of the equipment.
     */
    category?: <ENUM>'None'|'JetAircraft'|'PistonAircraft'|'TurbopropAircraft'|'Helicopter'|'Surface'|'Train'|'Bus'|'AllCategories'</ENUM>;
    /**
     * Number of available units on the inventory equipment.
     */
    availableUnits?: number;
    decks?: SeatMapDecks;
    /**
     * The reference identifying what seatmap the leg is in associated to.
     */
    seatmapReference?: string;
}
