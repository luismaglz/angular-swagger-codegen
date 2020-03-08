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
import { EquipmentFilter } from './equipmentFilter';


/**
 * The trip information query model contains data to perform a   trip information search.
 */
import * as Enums from '../enums';

export interface TripInformationQuery { 
    /**
     * The days of the week to include in the provided date range.
     */
    daysOfWeek?: Enums.DayOfWeek;
    /**
     * The end date of the trip information search.
     */
    endDate?: Date;
    /**
     * The starting date of the trip information search.
     */
    beginDate: Date;
    /**
     * The optional equipment filter for the search.
     */
    equipmentFilter?: EquipmentFilter;
    /**
     * The starting time of the trip information search.
     */
    startTimeInterval?: string;
    /**
     * The transportation identifier, such as a flight number.
     */
    identifier?: string;
    /**
     * The list of departure stations.
     */
    originStations?: Array<string>;
    /**
     * The end time of the trip information search.
     */
    endTimeInterval?: string;
    /**
     * The carrier code.
     */
    carrierCode?: string;
    /**
     * The list of arrival stations.
     */
    destinationStations?: Array<string>;
    /**
     * The flight type.
     */
    flightType?: Enums.OperationsFlightType;
    /**
     * The operational suffix.
     */
    opSuffix?: string;
    /**
     * Indicates whether to include marketing codeshare segments.  Setting this flag to true will request all marketing codeshare segments   in addition to the operational ones.
     */
    searchXRef?: boolean;
    /**
     * When set to true, all flights with a non-blank operating carrier are filtered out of the result.   The DB calls the parameter noOperatingCarrier.
     */
    excludeMarketedFlights?: boolean;
    /**
     * When set to null, there will be no limit to the number of journeys to be returned.
     */
    numberOfJourneys?: number;
}
