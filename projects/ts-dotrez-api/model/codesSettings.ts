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
import { CodesSettingsAllowedPaymentMethodsForFraudPrevention } from './codesSettingsAllowedPaymentMethodsForFraudPrevention';
import { CodesSettingsExternalPaymentValidationOverrides } from './codesSettingsExternalPaymentValidationOverrides';
import { CodesSettingsPaymentFieldOverrides } from './codesSettingsPaymentFieldOverrides';
import { CodesSettingsQueueCategoryCodes } from './codesSettingsQueueCategoryCodes';


/**
 * The codes settings.
 */

    import { CodesSettings<CAP>overrideFeeTypes</CAP> } from '../types/enums';
    import { CodesSettings<CAP>privateTravelQueueCategory</CAP> } from '../types/enums';
    import { CodesSettings<CAP>publicTravelQueueCategory</CAP> } from '../types/enums';
    import { CodesSettings<CAP>spoilFeeTypes</CAP> } from '../types/enums';
    import { CodesSettings<CAP>waiveFeeTypes</CAP> } from '../types/enums';

export interface CodesSettings { 
    allowedPaymentMethodsForFraudPrevention?: CodesSettingsAllowedPaymentMethodsForFraudPrevention;
    /**
     * A list of classes that automatically move or nest on overbook.
     */
    automaticMoveNestOverbookClasses?: Array<string>;
    /**
     * A list of editable rule types.
     */
    editableRuleTypes?: Array<string>;
    externalPaymentValidationOverrides?: CodesSettingsExternalPaymentValidationOverrides;
    /**
     * A list of fee types that allow overrides. = ['All', 'Tax', 'TravelFee', 'ServiceFee', 'PaymentFee', 'PenaltyFee', 'SsrFee', 'NonFlightServiceFee', 'UpgradeFee', 'SeatFee', 'BaseFare', 'SpoilageFee', 'NameChangeFee', 'ConvenienceFee', 'BaggageFee', 'FareSurcharge', 'PromotionDiscount']
     */
    overrideFeeTypes?: <ENUM>'All'|'Tax'|'TravelFee'|'ServiceFee'|'PaymentFee'|'PenaltyFee'|'SsrFee'|'NonFlightServiceFee'|'UpgradeFee'|'SeatFee'|'BaseFare'|'SpoilageFee'|'NameChangeFee'|'ConvenienceFee'|'BaggageFee'|'FareSurcharge'|'PromotionDiscount'|'ServiceBundle'|'ExtraBagFee'|'ATPCOBagFee'</ENUM>;
    paymentFieldOverrides?: CodesSettingsPaymentFieldOverrides;
    /**
     * The permissions allowed on the private travel queue category for this role.
     */
    privateTravelQueueCategory?: <ENUM>'None'|'View'|'All'</ENUM>;
    /**
     * The permissions allowed on the public travel queue category for this role.
     */
    publicTravelQueueCategory?: <ENUM>'None'|'View'|'All'</ENUM>;
    /**
     * A list of payment codes that allow refunds.
     */
    refundablePaymentMethodCodes?: Array<string>;
    /**
     * A list of fee types that are Spoilage Fees. = ['All', 'Tax', 'TravelFee', 'ServiceFee', 'PaymentFee', 'PenaltyFee', 'SsrFee', 'NonFlightServiceFee', 'UpgradeFee', 'SeatFee', 'BaseFare', 'SpoilageFee', 'NameChangeFee', 'ConvenienceFee', 'BaggageFee', 'FareSurcharge', 'PromotionDiscount']
     */
    spoilFeeTypes?: <ENUM>'All'|'Tax'|'TravelFee'|'ServiceFee'|'PaymentFee'|'PenaltyFee'|'SsrFee'|'NonFlightServiceFee'|'UpgradeFee'|'SeatFee'|'BaseFare'|'SpoilageFee'|'NameChangeFee'|'ConvenienceFee'|'BaggageFee'|'FareSurcharge'|'PromotionDiscount'|'ServiceBundle'|'ExtraBagFee'|'ATPCOBagFee'</ENUM>;
    /**
     * A list of allowed classes of service.
     */
    classOfServices?: Array<string>;
    /**
     * A list of allowed payment codes that are deposit payment types.
     */
    depositPaymentTypes?: Array<string>;
    /**
     * A list of allowed fare types.
     */
    fareTypes?: Array<string>;
    /**
     * A list of allowed passenger discount codes.
     */
    passengerDiscountCodes?: Array<string>;
    /**
     * A list of allowed passenger types.
     */
    passengerTypeCodes?: Array<string>;
    /**
     * A list of allowed payment method codes.
     */
    paymentMethodCodes?: Array<string>;
    /**
     * A list of penalty fee codes.
     */
    penaltyFeeCodes?: Array<string>;
    /**
     * A list of allowed product classes.
     */
    productClasses?: Array<string>;
    queueCategoryCodes?: CodesSettingsQueueCategoryCodes;
    /**
     * The allowed sell SSR Codes.
     */
    sellSsrCodes?: Array<string>;
    /**
     * The allowed service fee codes.
     */
    serviceFeeCodes?: Array<string>;
    /**
     * The class of services that are allowed standby.
     */
    standbyClassOfServiceCodes?: Array<string>;
    /**
     * The allowed station categories.
     */
    stationCategories?: Array<string>;
    /**
     * The list viewable seat properties.
     */
    viewableSeatProperties?: Array<string>;
    /**
     * The fee types that allow waiving. = ['All', 'Tax', 'TravelFee', 'ServiceFee', 'PaymentFee', 'PenaltyFee', 'SsrFee', 'NonFlightServiceFee', 'UpgradeFee', 'SeatFee', 'BaseFare', 'SpoilageFee', 'NameChangeFee', 'ConvenienceFee', 'BaggageFee', 'FareSurcharge', 'PromotionDiscount']
     */
    waiveFeeTypes?: <ENUM>'All'|'Tax'|'TravelFee'|'ServiceFee'|'PaymentFee'|'PenaltyFee'|'SsrFee'|'NonFlightServiceFee'|'UpgradeFee'|'SeatFee'|'BaseFare'|'SpoilageFee'|'NameChangeFee'|'ConvenienceFee'|'BaggageFee'|'FareSurcharge'|'PromotionDiscount'|'ServiceBundle'|'ExtraBagFee'|'ATPCOBagFee'</ENUM>;
}
