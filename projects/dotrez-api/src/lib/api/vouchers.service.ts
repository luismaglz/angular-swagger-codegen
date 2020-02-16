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

import { Observable }                                        from 'rxjs/Observable';

import { IJsonResponse } from '../model/iJsonResponse';
import { Voucher } from '../model/voucher';
import { VoucherConfiguration } from '../model/voucherConfiguration';
import { VoucherItem } from '../model/voucherItem';
import { VoucherUpdateRequest } from '../model/voucherUpdateRequest';
import { VouchersSummaryResponse } from '../model/vouchersSummaryResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class VouchersService {

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
     * Searches for vouchers issued within the given date range.
     * 
     * @param beginDate The starting date.
     * @param pageSize The number of items to return.
     * @param lastPageKey The key returned previously to get the next page of items.
     * @param endDate The ending date.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersByDateGet(beginDate: Date, pageSize?: number, lastPageKey?: string, endDate?: Date, observe?: 'body', reportProgress?: boolean): Observable<VouchersSummaryResponse>;
    public apiNskV1VouchersByDateGet(beginDate: Date, pageSize?: number, lastPageKey?: string, endDate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VouchersSummaryResponse>>;
    public apiNskV1VouchersByDateGet(beginDate: Date, pageSize?: number, lastPageKey?: string, endDate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VouchersSummaryResponse>>;
    public apiNskV1VouchersByDateGet(beginDate: Date, pageSize?: number, lastPageKey?: string, endDate?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (beginDate === null || beginDate === undefined) {
            throw new Error('Required parameter beginDate was null or undefined when calling apiNskV1VouchersByDateGet.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }
        if (lastPageKey !== undefined && lastPageKey !== null) {
            queryParameters = queryParameters.set('LastPageKey', <any>lastPageKey);
        }
        if (beginDate !== undefined && beginDate !== null) {
            queryParameters = queryParameters.set('BeginDate', <any>beginDate.toISOString());
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('EndDate', <any>endDate.toISOString());
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

        return this.httpClient.get<VouchersSummaryResponse>(`${this.basePath}/api/nsk/v1/vouchers/byDate`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets vouchers associated with a voucher issuance.
     * 
     * @param voucherIssuanceKey The voucher issuance key.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'body', reportProgress?: boolean): Observable<Array<VoucherItem>>;
    public apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoucherItem>>>;
    public apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoucherItem>>>;
    public apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(voucherIssuanceKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (voucherIssuanceKey === null || voucherIssuanceKey === undefined) {
            throw new Error('Required parameter voucherIssuanceKey was null or undefined when calling apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet.');
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

        return this.httpClient.get<Array<VoucherItem>>(`${this.basePath}/api/nsk/v1/vouchers/byIssuance/${encodeURIComponent(String(voucherIssuanceKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a collection of vouchers based on the market information.
     * 
     * @param destination Gets or sets the leg arrival station.
     * @param origin Gets or sets the leg departure station.
     * @param departureDate The departure date.
     * @param identifier The unique transportation identifier.
     * @param carrierCode The carrier code.
     * @param opSuffix The op suffix.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersByMarketGet(destination: string, origin: string, departureDate: Date, identifier: string, carrierCode: string, opSuffix?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<VoucherItem>>;
    public apiNskV1VouchersByMarketGet(destination: string, origin: string, departureDate: Date, identifier: string, carrierCode: string, opSuffix?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoucherItem>>>;
    public apiNskV1VouchersByMarketGet(destination: string, origin: string, departureDate: Date, identifier: string, carrierCode: string, opSuffix?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoucherItem>>>;
    public apiNskV1VouchersByMarketGet(destination: string, origin: string, departureDate: Date, identifier: string, carrierCode: string, opSuffix?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (destination === null || destination === undefined) {
            throw new Error('Required parameter destination was null or undefined when calling apiNskV1VouchersByMarketGet.');
        }

        if (origin === null || origin === undefined) {
            throw new Error('Required parameter origin was null or undefined when calling apiNskV1VouchersByMarketGet.');
        }

        if (departureDate === null || departureDate === undefined) {
            throw new Error('Required parameter departureDate was null or undefined when calling apiNskV1VouchersByMarketGet.');
        }

        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling apiNskV1VouchersByMarketGet.');
        }

        if (carrierCode === null || carrierCode === undefined) {
            throw new Error('Required parameter carrierCode was null or undefined when calling apiNskV1VouchersByMarketGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (destination !== undefined && destination !== null) {
            queryParameters = queryParameters.set('Destination', <any>destination);
        }
        if (origin !== undefined && origin !== null) {
            queryParameters = queryParameters.set('Origin', <any>origin);
        }
        if (departureDate !== undefined && departureDate !== null) {
            queryParameters = queryParameters.set('DepartureDate', <any>departureDate.toISOString());
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('Identifier', <any>identifier);
        }
        if (carrierCode !== undefined && carrierCode !== null) {
            queryParameters = queryParameters.set('CarrierCode', <any>carrierCode);
        }
        if (opSuffix !== undefined && opSuffix !== null) {
            queryParameters = queryParameters.set('OpSuffix', <any>opSuffix);
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

        return this.httpClient.get<Array<VoucherItem>>(`${this.basePath}/api/nsk/v1/vouchers/byMarket`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a specific voucher based upon the voucher key.
     * 
     * @param voucherKey The voucher key.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersByVoucherKeyGet(voucherKey: string, observe?: 'body', reportProgress?: boolean): Observable<Voucher>;
    public apiNskV1VouchersByVoucherKeyGet(voucherKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Voucher>>;
    public apiNskV1VouchersByVoucherKeyGet(voucherKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Voucher>>;
    public apiNskV1VouchersByVoucherKeyGet(voucherKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (voucherKey === null || voucherKey === undefined) {
            throw new Error('Required parameter voucherKey was null or undefined when calling apiNskV1VouchersByVoucherKeyGet.');
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

        return this.httpClient.get<Voucher>(`${this.basePath}/api/nsk/v1/vouchers/${encodeURIComponent(String(voucherKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Changes the voucher status.
     * 
     * @param voucherKey The voucher key.
     * @param request The voucher update request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersByVoucherKeyPut(voucherKey: string, request?: VoucherUpdateRequest, observe?: 'body', reportProgress?: boolean): Observable<IJsonResponse>;
    public apiNskV1VouchersByVoucherKeyPut(voucherKey: string, request?: VoucherUpdateRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1VouchersByVoucherKeyPut(voucherKey: string, request?: VoucherUpdateRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1VouchersByVoucherKeyPut(voucherKey: string, request?: VoucherUpdateRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (voucherKey === null || voucherKey === undefined) {
            throw new Error('Required parameter voucherKey was null or undefined when calling apiNskV1VouchersByVoucherKeyPut.');
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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<IJsonResponse>(`${this.basePath}/api/nsk/v1/vouchers/${encodeURIComponent(String(voucherKey))}`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a specific voucher configuration based on the configuration code.
     * 
     * @param configurationCode The code of the voucher configuration to retrieve.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersConfigurationByConfigurationCodeGet(configurationCode: string, observe?: 'body', reportProgress?: boolean): Observable<VoucherConfiguration>;
    public apiNskV1VouchersConfigurationByConfigurationCodeGet(configurationCode: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VoucherConfiguration>>;
    public apiNskV1VouchersConfigurationByConfigurationCodeGet(configurationCode: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VoucherConfiguration>>;
    public apiNskV1VouchersConfigurationByConfigurationCodeGet(configurationCode: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (configurationCode === null || configurationCode === undefined) {
            throw new Error('Required parameter configurationCode was null or undefined when calling apiNskV1VouchersConfigurationByConfigurationCodeGet.');
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

        return this.httpClient.get<VoucherConfiguration>(`${this.basePath}/api/nsk/v1/vouchers/configuration/${encodeURIComponent(String(configurationCode))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all available voucher configurations.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersConfigurationGet(observe?: 'body', reportProgress?: boolean): Observable<Array<VoucherConfiguration>>;
    public apiNskV1VouchersConfigurationGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoucherConfiguration>>>;
    public apiNskV1VouchersConfigurationGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoucherConfiguration>>>;
    public apiNskV1VouchersConfigurationGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<VoucherConfiguration>>(`${this.basePath}/api/nsk/v1/vouchers/configuration`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets vouchers based upon data in the request.
     * 
     * @param customerNameFirstName The first name associated with the voucher.
     * @param customerNameLastName The last name associated with the voucher.
     * @param activeOnly The flag to indicate if only active items should be returned.
     * @param recordLocator The record locator associated with the voucher.
     * @param customerNumber The customer number associated with the voucher.
     * @param cultureCode The culture code of the paged request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1VouchersGet(customerNameFirstName: string, customerNameLastName: string, activeOnly: boolean, recordLocator?: string, customerNumber?: string, cultureCode?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<VoucherItem>>;
    public apiNskV1VouchersGet(customerNameFirstName: string, customerNameLastName: string, activeOnly: boolean, recordLocator?: string, customerNumber?: string, cultureCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoucherItem>>>;
    public apiNskV1VouchersGet(customerNameFirstName: string, customerNameLastName: string, activeOnly: boolean, recordLocator?: string, customerNumber?: string, cultureCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoucherItem>>>;
    public apiNskV1VouchersGet(customerNameFirstName: string, customerNameLastName: string, activeOnly: boolean, recordLocator?: string, customerNumber?: string, cultureCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerNameFirstName === null || customerNameFirstName === undefined) {
            throw new Error('Required parameter customerNameFirstName was null or undefined when calling apiNskV1VouchersGet.');
        }

        if (customerNameLastName === null || customerNameLastName === undefined) {
            throw new Error('Required parameter customerNameLastName was null or undefined when calling apiNskV1VouchersGet.');
        }

        if (activeOnly === null || activeOnly === undefined) {
            throw new Error('Required parameter activeOnly was null or undefined when calling apiNskV1VouchersGet.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (recordLocator !== undefined && recordLocator !== null) {
            queryParameters = queryParameters.set('RecordLocator', <any>recordLocator);
        }
        if (customerNameFirstName !== undefined && customerNameFirstName !== null) {
            queryParameters = queryParameters.set('CustomerName.FirstName', <any>customerNameFirstName);
        }
        if (customerNameLastName !== undefined && customerNameLastName !== null) {
            queryParameters = queryParameters.set('CustomerName.LastName', <any>customerNameLastName);
        }
        if (customerNumber !== undefined && customerNumber !== null) {
            queryParameters = queryParameters.set('CustomerNumber', <any>customerNumber);
        }
        if (activeOnly !== undefined && activeOnly !== null) {
            queryParameters = queryParameters.set('ActiveOnly', <any>activeOnly);
        }
        if (cultureCode !== undefined && cultureCode !== null) {
            queryParameters = queryParameters.set('CultureCode', <any>cultureCode);
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

        return this.httpClient.get<Array<VoucherItem>>(`${this.basePath}/api/nsk/v1/vouchers`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
