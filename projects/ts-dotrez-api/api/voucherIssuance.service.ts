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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { IJsonResponse } from '../model/iJsonResponse';
import { VoucherIssuance } from '../model/voucherIssuance';
import { VoucherIssuanceRequest } from '../model/voucherIssuanceRequest';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class VoucherIssuanceService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Gets a voucher issuance based upon the voucher issuance key.
     * 
     * @param voucherIssuanceKey The voucher issuance key.
     
     */
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'body', headers?: Headers): Observable<VoucherIssuance>;
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<VoucherIssuance>>;
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!voucherIssuanceKey){
            throw new Error('Required parameter voucherIssuanceKey was null or undefined when calling apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet.');
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<VoucherIssuance>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/voucherIssuance/${encodeURIComponent(String(voucherIssuanceKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <VoucherIssuance>(httpResponse.response));
        }
        return response;
    }


    /**
     * Creates vouchers based upon data in the request.
     * 
     * @param request The voucher issuance request.
     
     */
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'text/plain';
        headers['Content-Type'] = 'application/json-patch+json';

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/voucherIssuance`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }

}
