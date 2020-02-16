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

import { BookingQueueItemBase } from '../model/bookingQueueItemBase';
import { DeleteBookingQueueItemBaseRequest } from '../model/deleteBookingQueueItemBaseRequest';
import { DequeueTravelSummary } from '../model/dequeueTravelSummary';
import { IJsonResponse } from '../model/iJsonResponse';
import { MoveBookingQueueItemBase } from '../model/moveBookingQueueItemBase';
import { QueueResults } from '../model/queueResults';
import { TravelQueueItemRequest } from '../model/travelQueueItemRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class QueuesService {

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
     * Removes booking queue items from the specified queue.
     * 
     * @param bookingQueueCode 
     * @param bookingQueueItemKey 
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete(bookingQueueCode: string, bookingQueueItemKey: string, request?: DeleteBookingQueueItemBaseRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete(bookingQueueCode: string, bookingQueueItemKey: string, request?: DeleteBookingQueueItemBaseRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete(bookingQueueCode: string, bookingQueueItemKey: string, request?: DeleteBookingQueueItemBaseRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete(bookingQueueCode: string, bookingQueueItemKey: string, request?: DeleteBookingQueueItemBaseRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (bookingQueueCode === null || bookingQueueCode === undefined) {
            throw new Error('Required parameter bookingQueueCode was null or undefined when calling apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete.');
        }

        if (bookingQueueItemKey === null || bookingQueueItemKey === undefined) {
            throw new Error('Required parameter bookingQueueItemKey was null or undefined when calling apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete.');
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

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/queues/bookings/${encodeURIComponent(String(bookingQueueCode))}/items/${encodeURIComponent(String(bookingQueueItemKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Moves to a different queue.
     * The booking queue proxy and service model do not currently support getting the queue code  the item was moved to. Therefore, it is not possible at this time to provide a link to  access the item on a different queue or a configurable response containing the queue object.  Additionally, the proxy and service model do not allow for getting a particular item within a  queue.
     * @param bookingQueueCode 
     * @param bookingQueueItemKey 
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut(bookingQueueCode: string, bookingQueueItemKey: string, request?: MoveBookingQueueItemBase, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut(bookingQueueCode: string, bookingQueueItemKey: string, request?: MoveBookingQueueItemBase, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut(bookingQueueCode: string, bookingQueueItemKey: string, request?: MoveBookingQueueItemBase, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut(bookingQueueCode: string, bookingQueueItemKey: string, request?: MoveBookingQueueItemBase, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (bookingQueueCode === null || bookingQueueCode === undefined) {
            throw new Error('Required parameter bookingQueueCode was null or undefined when calling apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut.');
        }

        if (bookingQueueItemKey === null || bookingQueueItemKey === undefined) {
            throw new Error('Required parameter bookingQueueItemKey was null or undefined when calling apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut.');
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

        return this.httpClient.put<IJsonResponse>(`${this.basePath}/api/nsk/v1/queues/bookings/${encodeURIComponent(String(bookingQueueCode))}/items/${encodeURIComponent(String(bookingQueueItemKey))}`,
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
     * Pops the next item in the travel queue.
     * This will delete the item from the queue.  This action requires a session token.
     * @param travelQueueCode Travel queue code to get next item from.
     * @param subQueueCode Sub queue code.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1QueuesTravelByTravelQueueCodeNextGet(travelQueueCode: string, subQueueCode?: string, observe?: 'body', reportProgress?: boolean): Observable<{data:DequeueTravelSummary,metadata:{documentation_url:string}}>;
    public apiNskV1QueuesTravelByTravelQueueCodeNextGet(travelQueueCode: string, subQueueCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:DequeueTravelSummary,metadata:{documentation_url:string}}>>;
    public apiNskV1QueuesTravelByTravelQueueCodeNextGet(travelQueueCode: string, subQueueCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DequeueTravelSummary>>;
    public apiNskV1QueuesTravelByTravelQueueCodeNextGet(travelQueueCode: string, subQueueCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (travelQueueCode === null || travelQueueCode === undefined) {
            throw new Error('Required parameter travelQueueCode was null or undefined when calling apiNskV1QueuesTravelByTravelQueueCodeNextGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (subQueueCode !== undefined && subQueueCode !== null) {
            queryParameters = queryParameters.set('subQueueCode', <any>subQueueCode);
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

        return this.httpClient.get<DequeueTravelSummary>(`${this.basePath}/api/nsk/v1/queues/travel/${encodeURIComponent(String(travelQueueCode))}/next`,
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
     * Creates a new travel queue entry.
     * This action requires a session token.
     * @param item 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1QueuesTravelPost(item?: TravelQueueItemRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1QueuesTravelPost(item?: TravelQueueItemRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1QueuesTravelPost(item?: TravelQueueItemRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1QueuesTravelPost(item?: TravelQueueItemRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v1/queues/travel`,
            item,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the next item in the booking queue.
     * This will not delete the item from the queue.  This action requires a session token.
     * @param bookingQueueCode booking queue code to get next item from.
     * @param subQueueCode The optional sub queue code.
     * @param startDate Begin priority date.
     * @param endDate End priority date.
     * @param password The Password needed to access the queue.  Required if queue  is set to password-protected in Sky Manager.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2QueuesBookingsByBookingQueueCodeNextGet(bookingQueueCode: string, subQueueCode?: string, startDate?: Date, endDate?: Date, password?: string, observe?: 'body', reportProgress?: boolean): Observable<{data:Array<BookingQueueItemBase>,metadata:{documentation_url:string}}>;
    public apiNskV2QueuesBookingsByBookingQueueCodeNextGet(bookingQueueCode: string, subQueueCode?: string, startDate?: Date, endDate?: Date, password?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Array<BookingQueueItemBase>,metadata:{documentation_url:string}}>>;
    public apiNskV2QueuesBookingsByBookingQueueCodeNextGet(bookingQueueCode: string, subQueueCode?: string, startDate?: Date, endDate?: Date, password?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BookingQueueItemBase>>>;
    public apiNskV2QueuesBookingsByBookingQueueCodeNextGet(bookingQueueCode: string, subQueueCode?: string, startDate?: Date, endDate?: Date, password?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (bookingQueueCode === null || bookingQueueCode === undefined) {
            throw new Error('Required parameter bookingQueueCode was null or undefined when calling apiNskV2QueuesBookingsByBookingQueueCodeNextGet.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (subQueueCode !== undefined && subQueueCode !== null) {
            queryParameters = queryParameters.set('SubQueueCode', <any>subQueueCode);
        }
        if (startDate !== undefined && startDate !== null) {
            queryParameters = queryParameters.set('StartDate', <any>startDate.toISOString());
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('EndDate', <any>endDate.toISOString());
        }
        if (password !== undefined && password !== null) {
            queryParameters = queryParameters.set('Password', <any>password);
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

        return this.httpClient.get<Array<BookingQueueItemBase>>(`${this.basePath}/api/nsk/v2/queues/bookings/${encodeURIComponent(String(bookingQueueCode))}/next`,
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
     * Gets the list of queues available.
     * This action requires a session token.
     * @param queueName Queue name.
     * @param queueCode Queue code.
     * @param queueCategoryCode Queue category code.
     * @param pageSize The default page size.
     * @param lastPageIndex Used to specify the index of the last set of records retrieved  when paging is performed. This is optional.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2QueuesBookingsGet(queueName?: string, queueCode?: string, queueCategoryCode?: string, pageSize?: number, lastPageIndex?: number, observe?: 'body', reportProgress?: boolean): Observable<{data:QueueResults,metadata:{documentation_url:string}}>;
    public apiNskV2QueuesBookingsGet(queueName?: string, queueCode?: string, queueCategoryCode?: string, pageSize?: number, lastPageIndex?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:QueueResults,metadata:{documentation_url:string}}>>;
    public apiNskV2QueuesBookingsGet(queueName?: string, queueCode?: string, queueCategoryCode?: string, pageSize?: number, lastPageIndex?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueueResults>>;
    public apiNskV2QueuesBookingsGet(queueName?: string, queueCode?: string, queueCategoryCode?: string, pageSize?: number, lastPageIndex?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (queueName !== undefined && queueName !== null) {
            queryParameters = queryParameters.set('QueueName', <any>queueName);
        }
        if (queueCode !== undefined && queueCode !== null) {
            queryParameters = queryParameters.set('QueueCode', <any>queueCode);
        }
        if (queueCategoryCode !== undefined && queueCategoryCode !== null) {
            queryParameters = queryParameters.set('QueueCategoryCode', <any>queueCategoryCode);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }
        if (lastPageIndex !== undefined && lastPageIndex !== null) {
            queryParameters = queryParameters.set('LastPageIndex', <any>lastPageIndex);
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

        return this.httpClient.get<QueueResults>(`${this.basePath}/api/nsk/v2/queues/bookings`,
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
