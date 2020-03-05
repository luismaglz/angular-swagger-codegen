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
import { SeatPreference } from './seatPreference';


/**
 * Represents the seating preferences base model.
 */
export interface SeatPreferences { 
    /**
     * The simple seating preference.
     */
    seat?: SeatPreferences.SeatEnum;
    /**
     * The prefered travel class of service.
     */
    travelClass?: SeatPreferences.TravelClassEnum;
    /**
     * The advanced seating preferences.
     */
    advancedPreferences?: Array<SeatPreference>;
}
export namespace SeatPreferences {
    export type SeatEnum = 'None' | 'Window' | 'Aisle' | 'Other';
    export const SeatEnum = {
        None: 'None' as SeatEnum,
        Window: 'Window' as SeatEnum,
        Aisle: 'Aisle' as SeatEnum,
        Other: 'Other' as SeatEnum
    }
    export type TravelClassEnum = 'None' | 'Business' | 'Economy' | 'FirstClass';
    export const TravelClassEnum = {
        None: 'None' as TravelClassEnum,
        Business: 'Business' as TravelClassEnum,
        Economy: 'Economy' as TravelClassEnum,
        FirstClass: 'FirstClass' as TravelClassEnum
    }
}
