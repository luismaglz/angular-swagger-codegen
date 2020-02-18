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
import { MessageBase } from '../model/messageBase';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

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
     * Deletes a message item.
     * 
     * @param messageKey The key of the message to delete.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (messageKey === null || messageKey === undefined) {
            throw new Error('Required parameter messageKey was null or undefined when calling apiNskV1MessagesByMessageKeyDelete.');
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

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/messages/${encodeURIComponent(String(messageKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a specific message item.
     * 
     * @param messageKey The key of the message to be retrieved.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe?: 'body', reportProgress?: boolean): Observable<{data:MessageBase,metadata:{documentation_url:string}}>;
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:MessageBase,metadata:{documentation_url:string}}>>;
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MessageBase>>;
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (messageKey === null || messageKey === undefined) {
            throw new Error('Required parameter messageKey was null or undefined when calling apiNskV1MessagesByMessageKeyGet.');
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

        return this.httpClient.get<MessageBase>(`${this.basePath}/api/nsk/v1/messages/${encodeURIComponent(String(messageKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a collection of messages based on search criteria.
     * 
     * @param searchType The type of search to be performed.
     * @param messageTypeCode The message type code to search for.
     * @param searchStartDate The start of created date range to search for.
     * @param searchEndDate The end of created date range to search for.
     * @param pageSize The number of records to return when paging.
     * @param lastIndex The index of the last set of records retrieved when paging.
     * @param searchValue The search query.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe?: 'body', reportProgress?: boolean): Observable<{data:Array<MessageBase>,metadata:{documentation_url:string}}>;
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Array<MessageBase>,metadata:{documentation_url:string}}>>;
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<MessageBase>>>;
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchType === null || searchType === undefined) {
            throw new Error('Required parameter searchType was null or undefined when calling apiNskV1MessagesGet.');
        }







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (messageTypeCode !== undefined && messageTypeCode !== null) {
            queryParameters = queryParameters.set('MessageTypeCode', <any>messageTypeCode);
        }
        if (searchStartDate !== undefined && searchStartDate !== null) {
            queryParameters = queryParameters.set('SearchStartDate', <any>searchStartDate.toISOString());
        }
        if (searchEndDate !== undefined && searchEndDate !== null) {
            queryParameters = queryParameters.set('SearchEndDate', <any>searchEndDate.toISOString());
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }
        if (lastIndex !== undefined && lastIndex !== null) {
            queryParameters = queryParameters.set('LastIndex', <any>lastIndex);
        }
        if (searchValue !== undefined && searchValue !== null) {
            queryParameters = queryParameters.set('SearchValue', <any>searchValue);
        }
        if (searchType !== undefined && searchType !== null) {
            queryParameters = queryParameters.set('SearchType', <any>searchType);
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

        return this.httpClient.get<Array<MessageBase>>(`${this.basePath}/api/nsk/v1/messages`,
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
     * Adds a new message item.
     * 
     * @param request The message queue.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1MessagesPost(request?: MessageBase, observe?: 'body', reportProgress?: boolean): Observable<{data:MessageBase,metadata:{documentation_url:string}}>;
    public apiNskV1MessagesPost(request?: MessageBase, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:MessageBase,metadata:{documentation_url:string}}>>;
    public apiNskV1MessagesPost(request?: MessageBase, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MessageBase>>;
    public apiNskV1MessagesPost(request?: MessageBase, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<MessageBase>(`${this.basePath}/api/nsk/v1/messages`,
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
