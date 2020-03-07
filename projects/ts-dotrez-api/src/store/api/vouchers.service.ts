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
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs/Observable";
import { map, toPromise } from "rxjs";
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";
import {
    IJsonResponse 
    Voucher 
    VoucherConfiguration 
    VoucherItem 
    VoucherUpdateRequest 
    VouchersSummaryResponse 
} from 'api-models';

import {
        apiNskV1VouchersByDateGet
        apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet
        apiNskV1VouchersByMarketGet
        apiNskV1VouchersByVoucherKeyGet
        apiNskV1VouchersByVoucherKeyPut
        apiNskV1VouchersConfigurationByConfigurationCodeGet
        apiNskV1VouchersConfigurationGet
        apiNskV1VouchersGet
} from '../base/api'




@injectable()
export class StoreVouchersService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Searches for vouchers issued within the given date range.
     * 
     */
    public store_apiNskV1VouchersByDateGet(beginDate: Date, pageSize?: number, lastPageKey?: string, endDate?: Date,  headers?: Headers): Promise<VouchersSummaryResponse>
    {
        const response = await apiNskV1VouchersByDateGet(beginDate,pageSize,lastPageKey,endDate,'body', headers);
        // TODO: Implement apiNskV1VouchersByDateGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets vouchers associated with a voucher issuance.
     * 
     */
    public store_apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string,  headers?: Headers): Promise<Array<VoucherItem>>
    {
        const response = await apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey,'body', headers);
        // TODO: Implement apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets a collection of vouchers based on the market information.
     * 
     */
    public store_apiNskV1VouchersByMarketGet(destination: string, origin: string, departureDate: Date, identifier: string, carrierCode: string, opSuffix?: string,  headers?: Headers): Promise<Array<VoucherItem>>
    {
        const response = await apiNskV1VouchersByMarketGet(destination,origin,departureDate,identifier,carrierCode,opSuffix,'body', headers);
        // TODO: Implement apiNskV1VouchersByMarketGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets a specific voucher based upon the voucher key.
     * 
     */
    public store_apiNskV1VouchersByVoucherKeyGet(voucherKey: string,  headers?: Headers): Promise<Voucher>
    {
        const response = await apiNskV1VouchersByVoucherKeyGet(voucherKey,'body', headers);
        // TODO: Implement apiNskV1VouchersByVoucherKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Changes the voucher status.
     * 
     */
    public store_apiNskV1VouchersByVoucherKeyPut(voucherKey: string, request?: VoucherUpdateRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1VouchersByVoucherKeyPut(voucherKey,request,'body', headers);
        // TODO: Implement apiNskV1VouchersByVoucherKeyPut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets a specific voucher configuration based on the configuration code.
     * 
     */
    public store_apiNskV1VouchersConfigurationByConfigurationCodeGet(configurationCode: string,  headers?: Headers): Promise<VoucherConfiguration>
    {
        const response = await apiNskV1VouchersConfigurationByConfigurationCodeGet(configurationCode,'body', headers);
        // TODO: Implement apiNskV1VouchersConfigurationByConfigurationCodeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets all available voucher configurations.
     * 
     */
    public store_apiNskV1VouchersConfigurationGet( headers?: Headers): Promise<Array<VoucherConfiguration>>
    {
        const response = await apiNskV1VouchersConfigurationGet('body', headers);
        // TODO: Implement apiNskV1VouchersConfigurationGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets vouchers based upon data in the request.
     * 
     */
    public store_apiNskV1VouchersGet(customerNameFirstName: string, customerNameLastName: string, activeOnly: boolean, recordLocator?: string, customerNumber?: string, cultureCode?: string,  headers?: Headers): Promise<Array<VoucherItem>>
    {
        const response = await apiNskV1VouchersGet(customerNameFirstName,customerNameLastName,activeOnly,recordLocator,customerNumber,cultureCode,'body', headers);
        // TODO: Implement apiNskV1VouchersGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
