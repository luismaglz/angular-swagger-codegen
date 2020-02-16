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
import { Transaction } from '../model/transaction';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CollectionService {

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
     * Retrieves the credit transactions based on the account collection key and  the request data.
     * 
     * @param accountCollectionKey The account collection key.
     * @param startTime The starting date and time of the date range to search in.
     * @param sortByNewest Optional filter to sort results by newest.
     * @param endTime The end date and time of the date range to search in.
     * @param pageSize Used to specify the number of records to return.
     * @param pageIndex Represents the index of the requested paged item.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(accountCollectionKey: string, startTime: Date, sortByNewest: boolean, endTime?: Date, pageSize?: number, pageIndex?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Transaction>>;
    public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(accountCollectionKey: string, startTime: Date, sortByNewest: boolean, endTime?: Date, pageSize?: number, pageIndex?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Transaction>>>;
    public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(accountCollectionKey: string, startTime: Date, sortByNewest: boolean, endTime?: Date, pageSize?: number, pageIndex?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Transaction>>>;
    public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(accountCollectionKey: string, startTime: Date, sortByNewest: boolean, endTime?: Date, pageSize?: number, pageIndex?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (accountCollectionKey === null || accountCollectionKey === undefined) {
            throw new Error('Required parameter accountCollectionKey was null or undefined when calling apiNskV1CollectionByAccountCollectionKeyTransactionsGet.');
        }

        if (startTime === null || startTime === undefined) {
            throw new Error('Required parameter startTime was null or undefined when calling apiNskV1CollectionByAccountCollectionKeyTransactionsGet.');
        }

        if (sortByNewest === null || sortByNewest === undefined) {
            throw new Error('Required parameter sortByNewest was null or undefined when calling apiNskV1CollectionByAccountCollectionKeyTransactionsGet.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (startTime !== undefined && startTime !== null) {
            queryParameters = queryParameters.set('StartTime', <any>startTime.toISOString());
        }
        if (endTime !== undefined && endTime !== null) {
            queryParameters = queryParameters.set('EndTime', <any>endTime.toISOString());
        }
        if (sortByNewest !== undefined && sortByNewest !== null) {
            queryParameters = queryParameters.set('SortByNewest', <any>sortByNewest);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }
        if (pageIndex !== undefined && pageIndex !== null) {
            queryParameters = queryParameters.set('PageIndex', <any>pageIndex);
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

        return this.httpClient.get<Array<Transaction>>(`${this.basePath}/api/nsk/v1/collection/${encodeURIComponent(String(accountCollectionKey))}/transactions`,
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
