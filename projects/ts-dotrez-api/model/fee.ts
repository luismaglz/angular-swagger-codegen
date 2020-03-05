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
 * Fee Model.
 */
export interface Fee { 
    /**
     * Returns true if this fee can be manually added.
     */
    readonly canBeManuallyAdded?: boolean;
    /**
     * Returns true if this fee can be queried to check the default price.
     */
    readonly hasDefaultFeePrice?: boolean;
    /**
     * Returns true if the given fee code is charged per segment/leg.
     */
    readonly isFeeChargedPerSegment?: boolean;
    /**
     * <b>Deprecated</b> - Please use api/nsk/v1/settings/general/codes endpoint to verify role based access instead.
     */
    allowed?: boolean;
    /**
     * Gets or sets the charge limit of this fee.
     */
    chargeLimit?: number;
    /**
     * Gets or sets when the charge limit is applied to this fee.
     */
    chargeLimitMode?: Fee.ChargeLimitModeEnum;
    /**
     * Gets or sets the charge limit for the travel component associated with this fee.
     */
    chargeLimitTravelComponent?: Fee.ChargeLimitTravelComponentEnum;
    /**
     * Gets or sets the commissionable flag for this fee.
     */
    commissionable?: boolean;
    /**
     * Gets or sets the country code for this fee.
     */
    countryCode?: string;
    /**
     * Gets or sets the description for this fee.
     */
    description?: string;
    /**
     * Gets or sets the display code for this fee.
     */
    displayCode?: string;
    /**
     * Gets or sets how this fee is applied.
     */
    feeApplication?: Fee.FeeApplicationEnum;
    /**
     * Gets or sets the code for this fee.
     */
    feeCode?: string;
    /**
     * Gets or sets the fee option mode for this fee.
     */
    feeOptionMode?: Fee.FeeOptionModeEnum;
    /**
     * Gets or sets the fee type for this fee.
     */
    feeType?: Fee.FeeTypeEnum;
    /**
     * Gets or sets the inactive flag for this fee.
     */
    inActive?: boolean;
    /**
     * Gets or sets the itemizable flag for this fee.
     */
    itemizable?: boolean;
    /**
     * Gets or sets the MinStopover of this fee.
     */
    minStopover?: number;
    /**
     * Gets or sets the International MinStopover of this fee.
     */
    minStopoverInternational?: number;
    /**
     * Gets or sets the name of this fee.
     */
    name?: string;
    /**
     * Gets or sets how the taxes are applied for this fee.
     */
    taxApplication?: Fee.TaxApplicationEnum;
    /**
     * Gets or sets the ticketable flag for this fee.
     */
    ticketable?: boolean;
    /**
     * Gets or sets the travel component associated with this fee.
     */
    travelComponent?: Fee.TravelComponentEnum;
}
export namespace Fee {
    export type ChargeLimitModeEnum = 'FirstOccurrences' | 'LastOccurrences' | 'FirstOutLastInOccurrences';
    export const ChargeLimitModeEnum = {
        FirstOccurrences: 'FirstOccurrences' as ChargeLimitModeEnum,
        LastOccurrences: 'LastOccurrences' as ChargeLimitModeEnum,
        FirstOutLastInOccurrences: 'FirstOutLastInOccurrences' as ChargeLimitModeEnum
    }
    export type ChargeLimitTravelComponentEnum = 'Unknown' | 'Itinerary' | 'Trip' | 'Journey' | 'Segment' | 'Leg' | 'ItineraryWithJourneySalesDate' | 'TripWithJourneySalesDate' | 'JourneyWithBookingSalesDate' | 'JourneyWithJourneySalesDate' | 'SegmentWithJourneySalesDate' | 'LegWithJourneySalesDate' | 'Fare';
    export const ChargeLimitTravelComponentEnum = {
        Unknown: 'Unknown' as ChargeLimitTravelComponentEnum,
        Itinerary: 'Itinerary' as ChargeLimitTravelComponentEnum,
        Trip: 'Trip' as ChargeLimitTravelComponentEnum,
        Journey: 'Journey' as ChargeLimitTravelComponentEnum,
        Segment: 'Segment' as ChargeLimitTravelComponentEnum,
        Leg: 'Leg' as ChargeLimitTravelComponentEnum,
        ItineraryWithJourneySalesDate: 'ItineraryWithJourneySalesDate' as ChargeLimitTravelComponentEnum,
        TripWithJourneySalesDate: 'TripWithJourneySalesDate' as ChargeLimitTravelComponentEnum,
        JourneyWithBookingSalesDate: 'JourneyWithBookingSalesDate' as ChargeLimitTravelComponentEnum,
        JourneyWithJourneySalesDate: 'JourneyWithJourneySalesDate' as ChargeLimitTravelComponentEnum,
        SegmentWithJourneySalesDate: 'SegmentWithJourneySalesDate' as ChargeLimitTravelComponentEnum,
        LegWithJourneySalesDate: 'LegWithJourneySalesDate' as ChargeLimitTravelComponentEnum,
        Fare: 'Fare' as ChargeLimitTravelComponentEnum
    }
    export type FeeApplicationEnum = 'Pnr' | 'TravelComponent' | 'EachPassenger' | 'EachPassengerTravelComponent' | 'SpecifyPassenger' | 'AllPaxCheckingBagsTogether' | 'PerBookingNoLimit';
    export const FeeApplicationEnum = {
        Pnr: 'Pnr' as FeeApplicationEnum,
        TravelComponent: 'TravelComponent' as FeeApplicationEnum,
        EachPassenger: 'EachPassenger' as FeeApplicationEnum,
        EachPassengerTravelComponent: 'EachPassengerTravelComponent' as FeeApplicationEnum,
        SpecifyPassenger: 'SpecifyPassenger' as FeeApplicationEnum,
        AllPaxCheckingBagsTogether: 'AllPaxCheckingBagsTogether' as FeeApplicationEnum,
        PerBookingNoLimit: 'PerBookingNoLimit' as FeeApplicationEnum
    }
    export type FeeOptionModeEnum = 'Default' | 'All' | 'LowestCost' | 'HighestCost';
    export const FeeOptionModeEnum = {
        Default: 'Default' as FeeOptionModeEnum,
        All: 'All' as FeeOptionModeEnum,
        LowestCost: 'LowestCost' as FeeOptionModeEnum,
        HighestCost: 'HighestCost' as FeeOptionModeEnum
    }
    export type FeeTypeEnum = 'All' | 'Tax' | 'TravelFee' | 'ServiceFee' | 'PaymentFee' | 'PenaltyFee' | 'SsrFee' | 'NonFlightServiceFee' | 'UpgradeFee' | 'SeatFee' | 'BaseFare' | 'SpoilageFee' | 'NameChangeFee' | 'ConvenienceFee' | 'BaggageFee' | 'FareSurcharge' | 'PromotionDiscount' | 'ServiceBundle' | 'ExtraBagFee' | 'ATPCOBagFee';
    export const FeeTypeEnum = {
        All: 'All' as FeeTypeEnum,
        Tax: 'Tax' as FeeTypeEnum,
        TravelFee: 'TravelFee' as FeeTypeEnum,
        ServiceFee: 'ServiceFee' as FeeTypeEnum,
        PaymentFee: 'PaymentFee' as FeeTypeEnum,
        PenaltyFee: 'PenaltyFee' as FeeTypeEnum,
        SsrFee: 'SsrFee' as FeeTypeEnum,
        NonFlightServiceFee: 'NonFlightServiceFee' as FeeTypeEnum,
        UpgradeFee: 'UpgradeFee' as FeeTypeEnum,
        SeatFee: 'SeatFee' as FeeTypeEnum,
        BaseFare: 'BaseFare' as FeeTypeEnum,
        SpoilageFee: 'SpoilageFee' as FeeTypeEnum,
        NameChangeFee: 'NameChangeFee' as FeeTypeEnum,
        ConvenienceFee: 'ConvenienceFee' as FeeTypeEnum,
        BaggageFee: 'BaggageFee' as FeeTypeEnum,
        FareSurcharge: 'FareSurcharge' as FeeTypeEnum,
        PromotionDiscount: 'PromotionDiscount' as FeeTypeEnum,
        ServiceBundle: 'ServiceBundle' as FeeTypeEnum,
        ExtraBagFee: 'ExtraBagFee' as FeeTypeEnum,
        ATPCOBagFee: 'ATPCOBagFee' as FeeTypeEnum
    }
    export type TaxApplicationEnum = 'Unknown' | 'Taxable' | 'TaxableLocal' | 'NonTaxable' | 'NonTaxableApplyToBaseFareOnly' | 'TaxableByTrip' | 'TaxableByItinerary';
    export const TaxApplicationEnum = {
        Unknown: 'Unknown' as TaxApplicationEnum,
        Taxable: 'Taxable' as TaxApplicationEnum,
        TaxableLocal: 'TaxableLocal' as TaxApplicationEnum,
        NonTaxable: 'NonTaxable' as TaxApplicationEnum,
        NonTaxableApplyToBaseFareOnly: 'NonTaxableApplyToBaseFareOnly' as TaxApplicationEnum,
        TaxableByTrip: 'TaxableByTrip' as TaxApplicationEnum,
        TaxableByItinerary: 'TaxableByItinerary' as TaxApplicationEnum
    }
    export type TravelComponentEnum = 'Unknown' | 'Itinerary' | 'Trip' | 'Journey' | 'Segment' | 'Leg' | 'ItineraryWithJourneySalesDate' | 'TripWithJourneySalesDate' | 'JourneyWithBookingSalesDate' | 'JourneyWithJourneySalesDate' | 'SegmentWithJourneySalesDate' | 'LegWithJourneySalesDate' | 'Fare';
    export const TravelComponentEnum = {
        Unknown: 'Unknown' as TravelComponentEnum,
        Itinerary: 'Itinerary' as TravelComponentEnum,
        Trip: 'Trip' as TravelComponentEnum,
        Journey: 'Journey' as TravelComponentEnum,
        Segment: 'Segment' as TravelComponentEnum,
        Leg: 'Leg' as TravelComponentEnum,
        ItineraryWithJourneySalesDate: 'ItineraryWithJourneySalesDate' as TravelComponentEnum,
        TripWithJourneySalesDate: 'TripWithJourneySalesDate' as TravelComponentEnum,
        JourneyWithBookingSalesDate: 'JourneyWithBookingSalesDate' as TravelComponentEnum,
        JourneyWithJourneySalesDate: 'JourneyWithJourneySalesDate' as TravelComponentEnum,
        SegmentWithJourneySalesDate: 'SegmentWithJourneySalesDate' as TravelComponentEnum,
        LegWithJourneySalesDate: 'LegWithJourneySalesDate' as TravelComponentEnum,
        Fare: 'Fare' as TravelComponentEnum
    }
}
