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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { IJsonResponse } from '../model/iJsonResponse';
import { VoucherIssuance } from '../model/voucherIssuance';
import { VoucherIssuanceRequest } from '../model/voucherIssuanceRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class VoucherIssuanceService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Gets a voucher issuance based upon the voucher issuance key.
     * 
     * @param voucherIssuanceKey The voucher issuance key.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'body', reportProgress?: boolean): Observable<{data:VoucherIssuance,metadata:{documentation_url:string}}>;
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:VoucherIssuance,metadata:{documentation_url:string}}>>;
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VoucherIssuance>>;
    public apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (voucherIssuanceKey === null || voucherIssuanceKey === undefined) {
            throw new Error('Required parameter voucherIssuanceKey was null or undefined when calling apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<VoucherIssuance>(`${this.basePath}/api/nsk/v1/voucherIssuance/${encodeURIComponent(String(voucherIssuanceKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates vouchers based upon data in the request.
     * 
     * @param request The voucher issuance request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1VoucherIssuancePost(request?: VoucherIssuanceRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v1/voucherIssuance`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
