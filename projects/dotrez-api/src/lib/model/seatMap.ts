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
    category?: SeatMap.CategoryEnum;
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
export namespace SeatMap {
    export type CategoryEnum = 'None' | 'JetAircraft' | 'PistonAircraft' | 'TurbopropAircraft' | 'Helicopter' | 'Surface' | 'Train' | 'Bus' | 'AllCategories';
    export const CategoryEnum = {
        None: 'None' as CategoryEnum,
        JetAircraft: 'JetAircraft' as CategoryEnum,
        PistonAircraft: 'PistonAircraft' as CategoryEnum,
        TurbopropAircraft: 'TurbopropAircraft' as CategoryEnum,
        Helicopter: 'Helicopter' as CategoryEnum,
        Surface: 'Surface' as CategoryEnum,
        Train: 'Train' as CategoryEnum,
        Bus: 'Bus' as CategoryEnum,
        AllCategories: 'AllCategories' as CategoryEnum
    };
}
