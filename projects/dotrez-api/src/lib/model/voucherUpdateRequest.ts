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
export interface VoucherUpdateRequest { 
    /**
     * The status to update the voucher to.
     */
    status: VoucherUpdateRequest.StatusEnum;
}
export namespace VoucherUpdateRequest {
    export type StatusEnum = 'Reinstate' | 'Void';
    export const StatusEnum = {
        Reinstate: 'Reinstate' as StatusEnum,
        Void: 'Void' as StatusEnum
    };
}
