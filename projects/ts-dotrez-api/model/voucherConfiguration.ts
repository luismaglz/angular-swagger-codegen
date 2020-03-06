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

    import { VoucherConfigurationType } from '../types/enums';
    import { VoucherConfigurationIssuanceType } from '../types/enums';
    import { VoucherConfigurationUsageTypes } from '../types/enums';
    import { VoucherConfigurationTripType } from '../types/enums';
    import { VoucherConfigurationExpirationControl } from '../types/enums';
    import { VoucherConfigurationExpirationType } from '../types/enums';
    import { VoucherConfigurationAmountControl } from '../types/enums';
    import { VoucherConfigurationCalculatedAmountControl } from '../types/enums';
    import { VoucherConfigurationTravelDowRestriction } from '../types/enums';
    import { VoucherConfigurationNameRestriction } from '../types/enums';
    import { VoucherConfigurationIssuanceControl } from '../types/enums';

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
    type: VoucherConfigurationType;
    /**
     * The issuance type.
     */
    issuanceType: VoucherConfigurationIssuanceType;
    /**
     * The voucher usage types.
     */
    usageTypes?: VoucherConfigurationUsageTypes;
    /**
     * The voucher trip type.
     */
    tripType?: VoucherConfigurationTripType;
    /**
     * The voucher expiration control.
     */
    expirationControl?: VoucherConfigurationExpirationControl;
    /**
     * The voucher expiration type.
     */
    expirationType: VoucherConfigurationExpirationType;
    /**
     * The voucher expiration days.
     */
    expirationDays?: number;
    /**
     * The voucher amount control.
     */
    amountControl?: VoucherConfigurationAmountControl;
    /**
     * The voucher calculated amount control.
     */
    calculatedAmountControl?: VoucherConfigurationCalculatedAmountControl;
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
    travelDowRestriction?: VoucherConfigurationTravelDowRestriction;
    /**
     * The voucher name restriction.
     */
    nameRestriction?: VoucherConfigurationNameRestriction;
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
    issuanceControl?: VoucherConfigurationIssuanceControl;
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
