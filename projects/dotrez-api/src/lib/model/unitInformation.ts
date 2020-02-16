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
import { SeatMapProperty } from './seatMapProperty';


/**
 * Defines a unit within an equipment -&gt; decks -&gt; compartment.
 */
export interface UnitInformation { 
    /**
     * The key used to assign the unit to a passenger.
     */
    unitKey?: string;
    /**
     * Flag indicating if the unit is assignable (aka is a seat). If false this means that the unit is a fixture.
     */
    assignable?: boolean;
    /**
     * The availability of the seat.
     */
    availability?: UnitInformation.AvailabilityEnum;
    /**
     * Defines compartment designator of the compartment to which unit belongs to.
     */
    compartmentDesignator?: string;
    /**
     * Defines unique designator for the unit within the compartment.
     */
    designator?: string;
    /**
     * The type of the unit.
     */
    type?: UnitInformation.TypeEnum;
    /**
     * The designated travel class code.
     */
    travelClassCode?: string;
    /**
     * The designator of the group the unit belongs to.
     */
    set?: number;
    /**
     * Indicates the logical group where this unit belongs. Also indicating the pricing value of this unit via seat fees.
     */
    group?: number;
    /**
     * Indicates the priority level of this unit, if this unit is among the best seats computed by the seat assignment  algorithm.
     */
    priority?: number;
    /**
     * The text associated to a unit.
     */
    text?: string;
    /**
     * The number of available units in the group.
     */
    setVacancy?: number;
    /**
     * This angle of the unit in the grid.
     */
    angle?: number;
    /**
     * The grid width of the unit.
     */
    width?: number;
    /**
     * The grid height of the unit.
     */
    height?: number;
    /**
     * Indicates the location of this unit, thereby controlling bookings and reservations on this unit based on customer  recognition levels and user role settings.
     */
    zone?: number;
    /**
     * The horizontal position of the unit in the grid.
     */
    x?: number;
    /**
     * This vertical position of the unit in the grid.
     */
    y?: number;
    /**
     * The collection of allowed SSR's.
     */
    allowedSsrs?: Array<string>;
    /**
     * The collection of properties for the specific unit.
     */
    properties?: Array<SeatMapProperty>;
}
export namespace UnitInformation {
    export type AvailabilityEnum = 'Unknown' | 'Reserved' | 'Blocked' | 'HeldForAnotherSession' | 'HeldForThisSession' | 'Open' | 'Missing' | 'CheckedIn' | 'FleetBlocked' | 'Restricted' | 'Broken' | 'ReservedForPnr' | 'SoftBlocked' | 'Unavailable';
    export type TypeEnum = 'None' | 'NormalSeat' | 'LargeSeat' | 'Couchette' | 'Compartment' | 'Table' | 'Wall' | 'Window' | 'Door' | 'Stairs' | 'Wing' | 'Other' | 'Bulkhead' | 'BedOneOfThree' | 'BedTwoOfThree' | 'BedThreeOfThree' | 'BedOneOfTwo' | 'BedTwoOfTwo' | 'Bed' | 'Exit' | 'LabelRuler' | 'GenericUnitResizableArea' | 'Lavatory' | 'LavatoryWithHandicappedFacilities' | 'Luggage' | 'MovableCompartmentDivider' | 'Bar' | 'Closet' | 'Galley' | 'MovieScreen' | 'Storage';
}
