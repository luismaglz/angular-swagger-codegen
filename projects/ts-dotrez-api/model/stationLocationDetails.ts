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
import { Coordinate } from './coordinate';


/**
 * Defines the station location details.
 */
export interface StationLocationDetails { 
    /**
     * The coordinates of the station.
     */
    coordinates?: Coordinate;
    /**
     * The geographical location code (i.e. North America, Europe).
     */
    zoneCode?: string;
    /**
     * The sub zone code based on the geographical location (i.e. USA, Canada).
     */
    subZoneCode?: string;
    /**
     * The country code the station exists in.
     */
    countryCode?: string;
    /**
     * The province or state the station exists in.
     */
    provinceStateCode?: string;
    /**
     * The city the station exists in.
     */
    cityCode?: string;
    /**
     * The configured timezone of the station.
     */
    timeZoneCode?: string;
    /**
     * The flag indicating if the station is controlled via a third party.
     */
    thirdPartyControlled?: boolean;
    /**
     * The flag indicating if customs is required for crew members.
     */
    customsRequiredForCrew?: boolean;
    /**
     * The stations configured weight units of measurement.
     */
    weightType?: StationLocationDetails.WeightTypeEnum;
}
export namespace StationLocationDetails {
    export type WeightTypeEnum = 'Default' | 'Pounds' | 'Kilograms';
    export const WeightTypeEnum = {
        Default: 'Default' as WeightTypeEnum,
        Pounds: 'Pounds' as WeightTypeEnum,
        Kilograms: 'Kilograms' as WeightTypeEnum
    }
}
