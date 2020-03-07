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
 * The voucher update request.
 */
import * as Enums from '../types/enums';

export interface VoucherUpdateRequest { 
    /**
     * The status to update the voucher to.
     */
    status: Enums.VoucherStatusUpdate;
}
