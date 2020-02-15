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
import { VoucherConfigurationFareClass } from './voucherConfigurationFareClass';
import { VoucherMarketRestriction } from './voucherMarketRestriction';
import { VoucherTravelRestriction } from './voucherTravelRestriction';


/**
 * The voucher configuration model.
 */
export interface VoucherConfiguration { 
    /**
     * The voucher configuration code.
     */
    configurationCode: string;
    /**
     * The voucher configuration note.
     */
    note?: string;
    /**
     * The voucher configuration name.
     */
    name: string;
    /**
     * The voucher configuration description.
     */
    description: string;
    /**
     * The voucher type.
     */
    type: VoucherConfiguration.TypeEnum;
    /**
     * The issuance type.
     */
    issuanceType: VoucherConfiguration.IssuanceTypeEnum;
    /**
     * The voucher usage types.
     */
    usageTypes?: Array<VoucherConfiguration.UsageTypesEnum>;
    /**
     * The voucher trip type.
     */
    tripType?: VoucherConfiguration.TripTypeEnum;
    /**
     * The voucher expiration control.
     */
    expirationControl?: VoucherConfiguration.ExpirationControlEnum;
    /**
     * The voucher expiration type.
     */
    expirationType: VoucherConfiguration.ExpirationTypeEnum;
    /**
     * The voucher expiration days.
     */
    expirationDays?: number;
    /**
     * The voucher amount control.
     */
    amountControl?: VoucherConfiguration.AmountControlEnum;
    /**
     * The voucher calculated amount control.
     */
    calculatedAmountControl?: VoucherConfiguration.CalculatedAmountControlEnum;
    /**
     * The voucher maximum passenger total.
     */
    maximumPassengers?: number;
    /**
     * The voucher maximum number of vouchers per booking.
     */
    maximumVouchersPerBooking?: number;
    /**
     * The voucher day of week travel restrictions.
     */
    travelDowRestriction?: Array<VoucherConfiguration.TravelDowRestrictionEnum>;
    /**
     * The voucher name restriction.
     */
    nameRestriction?: VoucherConfiguration.NameRestrictionEnum;
    /**
     * The flag to indicate if a record locator is required.
     */
    isRecordLocatorRequired?: boolean;
    /**
     * The flag to indicate if a customer number is required.
     */
    isCustomerNumberRequired?: boolean;
    /**
     * The next reference number for the voucher configuration.
     */
    nextReferenceNumber?: number;
    /**
     * Flag to indicate if the maximum amount is per passenger or not.
     */
    maximumAmountIsPerPassenger?: boolean;
    /**
     * The calculated percentage.
     */
    calculatedPercentage?: number;
    /**
     * The voucher issuance control.
     */
    issuanceControl?: VoucherConfiguration.IssuanceControlEnum;
    /**
     * The voucher configuration fare classes.
     */
    fareClasses?: Array<VoucherConfigurationFareClass>;
    /**
     * The voucher configuration market restrictions.
     */
    marketRestrictions?: Array<VoucherMarketRestriction>;
    /**
     * The voucher configuration travel restrictions.
     */
    travelRestrictions?: Array<VoucherTravelRestriction>;
    /**
     * The voucher expiration date.
     */
    expiration?: Date;
    /**
     * The voucher currency code.
     */
    currencyCode?: string;
    /**
     * The maximum voucher amount.
     */
    maximumAmount?: number;
}
export namespace VoucherConfiguration {
    export type TypeEnum = 'Credit' | 'SingleUseCredit' | 'Service' | 'SingleUse' | 'MultiUse' | 'SingleUseNegativeAdjustment';
    export const TypeEnum = {
        Credit: 'Credit' as TypeEnum,
        SingleUseCredit: 'SingleUseCredit' as TypeEnum,
        Service: 'Service' as TypeEnum,
        SingleUse: 'SingleUse' as TypeEnum,
        MultiUse: 'MultiUse' as TypeEnum,
        SingleUseNegativeAdjustment: 'SingleUseNegativeAdjustment' as TypeEnum
    };
    export type IssuanceTypeEnum = 'Individual' | 'Batch' | 'FlightBatch' | 'HighVolumeBatch' | 'OdBatch';
    export const IssuanceTypeEnum = {
        Individual: 'Individual' as IssuanceTypeEnum,
        Batch: 'Batch' as IssuanceTypeEnum,
        FlightBatch: 'FlightBatch' as IssuanceTypeEnum,
        HighVolumeBatch: 'HighVolumeBatch' as IssuanceTypeEnum,
        OdBatch: 'OdBatch' as IssuanceTypeEnum
    };
    export type UsageTypesEnum = 'None' | 'Fares' | 'Taxes' | 'TravelFees' | 'ServiceFees' | 'PenaltyFees' | 'SsrFees' | 'NonFlightServiceFees' | 'UpgradeFees' | 'SeatFees' | 'SpoilageFees' | 'NameChangeFees' | 'ConvenienceFees' | 'Car' | 'Hotel' | 'Insurance' | 'Activities';
    export const UsageTypesEnum = {
        None: 'None' as UsageTypesEnum,
        Fares: 'Fares' as UsageTypesEnum,
        Taxes: 'Taxes' as UsageTypesEnum,
        TravelFees: 'TravelFees' as UsageTypesEnum,
        ServiceFees: 'ServiceFees' as UsageTypesEnum,
        PenaltyFees: 'PenaltyFees' as UsageTypesEnum,
        SsrFees: 'SsrFees' as UsageTypesEnum,
        NonFlightServiceFees: 'NonFlightServiceFees' as UsageTypesEnum,
        UpgradeFees: 'UpgradeFees' as UsageTypesEnum,
        SeatFees: 'SeatFees' as UsageTypesEnum,
        SpoilageFees: 'SpoilageFees' as UsageTypesEnum,
        NameChangeFees: 'NameChangeFees' as UsageTypesEnum,
        ConvenienceFees: 'ConvenienceFees' as UsageTypesEnum,
        Car: 'Car' as UsageTypesEnum,
        Hotel: 'Hotel' as UsageTypesEnum,
        Insurance: 'Insurance' as UsageTypesEnum,
        Activities: 'Activities' as UsageTypesEnum
    };
    export type TripTypeEnum = 'Any' | 'OneWay' | 'RoundTrip' | 'None';
    export const TripTypeEnum = {
        Any: 'Any' as TripTypeEnum,
        OneWay: 'OneWay' as TripTypeEnum,
        RoundTrip: 'RoundTrip' as TripTypeEnum,
        None: 'None' as TripTypeEnum
    };
    export type ExpirationControlEnum = 'None' | 'Fixed' | 'FixedAtIssuance' | 'Calculated';
    export const ExpirationControlEnum = {
        None: 'None' as ExpirationControlEnum,
        Fixed: 'Fixed' as ExpirationControlEnum,
        FixedAtIssuance: 'FixedAtIssuance' as ExpirationControlEnum,
        Calculated: 'Calculated' as ExpirationControlEnum
    };
    export type ExpirationTypeEnum = 'TravelBy' | 'TravelCompleteBy' | 'BookingBy';
    export const ExpirationTypeEnum = {
        TravelBy: 'TravelBy' as ExpirationTypeEnum,
        TravelCompleteBy: 'TravelCompleteBy' as ExpirationTypeEnum,
        BookingBy: 'BookingBy' as ExpirationTypeEnum
    };
    export type AmountControlEnum = 'Fixed' | 'FixedAtIssuance' | 'Calculated';
    export const AmountControlEnum = {
        Fixed: 'Fixed' as AmountControlEnum,
        FixedAtIssuance: 'FixedAtIssuance' as AmountControlEnum,
        Calculated: 'Calculated' as AmountControlEnum
    };
    export type CalculatedAmountControlEnum = 'Default' | 'Fares' | 'FaresPlusTaxes';
    export const CalculatedAmountControlEnum = {
        Default: 'Default' as CalculatedAmountControlEnum,
        Fares: 'Fares' as CalculatedAmountControlEnum,
        FaresPlusTaxes: 'FaresPlusTaxes' as CalculatedAmountControlEnum
    };
    export type TravelDowRestrictionEnum = 'None' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    export const TravelDowRestrictionEnum = {
        None: 'None' as TravelDowRestrictionEnum,
        Monday: 'Monday' as TravelDowRestrictionEnum,
        Tuesday: 'Tuesday' as TravelDowRestrictionEnum,
        Wednesday: 'Wednesday' as TravelDowRestrictionEnum,
        Thursday: 'Thursday' as TravelDowRestrictionEnum,
        Friday: 'Friday' as TravelDowRestrictionEnum,
        Saturday: 'Saturday' as TravelDowRestrictionEnum,
        Sunday: 'Sunday' as TravelDowRestrictionEnum
    };
    export type NameRestrictionEnum = 'None' | 'MustBePassenger' | 'MustBePassengerOrContact';
    export const NameRestrictionEnum = {
        None: 'None' as NameRestrictionEnum,
        MustBePassenger: 'MustBePassenger' as NameRestrictionEnum,
        MustBePassengerOrContact: 'MustBePassengerOrContact' as NameRestrictionEnum
    };
    export type IssuanceControlEnum = 'IssuedToPassengers' | 'IssuedToContact';
    export const IssuanceControlEnum = {
        IssuedToPassengers: 'IssuedToPassengers' as IssuanceControlEnum,
        IssuedToContact: 'IssuedToContact' as IssuanceControlEnum
    };
}
