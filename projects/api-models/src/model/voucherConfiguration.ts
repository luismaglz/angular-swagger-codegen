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
import * as Enums from '../enums';

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
    type: Enums.VoucherType;
    /**
     * The issuance type.
     */
    issuanceType: Enums.IssuanceType;
    /**
     * The voucher usage types.
     */
    usageTypes?: Enums.VoucherUsageType;
    /**
     * The voucher trip type.
     */
    tripType?: Enums.VoucherTripType;
    /**
     * The voucher expiration control.
     */
    expirationControl?: Enums.VoucherExpirationControl;
    /**
     * The voucher expiration type.
     */
    expirationType: Enums.VoucherExpirationType;
    /**
     * The voucher expiration days.
     */
    expirationDays?: number;
    /**
     * The voucher amount control.
     */
    amountControl?: Enums.AmountControl;
    /**
     * The voucher calculated amount control.
     */
    calculatedAmountControl?: 'Default'|'Fares'|'FaresPlusTaxes';
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
    travelDowRestriction?: Enums.DayOfWeek;
    /**
     * The voucher name restriction.
     */
    nameRestriction?: Enums.VoucherNameRestriction;
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
    issuanceControl?: Enums.VoucherIssuanceControl;
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
