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
import { PassengerSearchCriteria } from './passengerSearchCriteria';


/**
 * Model representing a low fare availability search simple request.
 */

    import { LowFareAvailabilitySearchSimpleRequestLoyaltyFilter } from '../types/enums';

export interface LowFareAvailabilitySearchSimpleRequest { 
    /**
     * The origin station code.
     */
    origin: string;
    /**
     * The destination station code.
     */
    destination: string;
    /**
     * The departure date. This date represents the selected day by the user, the date range will be calculated from this  date as the starting date.
     */
    beginDate: Date;
    /**
     * The return date. This date represents the returning trips selected day by the user, the date range will be  calculated from this date and the starting date.
     */
    endDate?: Date;
    /**
     * The list of passenger search criteria.
     */
    passengers: Array<PassengerSearchCriteria>;
    /**
     * The promo code to be applied.
     */
    promotionCode?: string;
    /**
     * The search currency code.
     */
    currencyCode?: string;
    /**
     * The loyalty fare filter.
     */
    loyaltyFilter?: LowFareAvailabilitySearchSimpleRequestLoyaltyFilter;
    /**
     * The number of days to subtract from the begin/end date.
     */
    daysToLeft?: number;
    /**
     * The number of days to add to the begin/end date.
     */
    daysToRight?: number;
}
