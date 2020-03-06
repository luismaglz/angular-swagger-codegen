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
 * The voucher configuration model.
 */

    import { VoucherTravelRestriction<CAP>restrictionType</CAP> } from '../models/enums';

export interface VoucherTravelRestriction { 
    /**
     * The travel restriction type.
     */
    restrictionType?: VoucherTravelRestriction<CAP>restrictionType</CAP>;
    /**
     * The voucher configuration code.
     */
    voucherConfigurationCode?: string;
    /**
     * The beginning travel date.
     */
    initialTravelDate?: Date;
    /**
     * The sequence number of the voucher restriction.
     */
    sequence?: number;
    /**
     * The ending travel date.
     */
    endTravelDate?: Date;
}
