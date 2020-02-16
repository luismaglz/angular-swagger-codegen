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

import { CheckinPassengerLiftStatus } from '../model/checkinPassengerLiftStatus';
import { CheckinPassengersRequest } from '../model/checkinPassengersRequest';
import { CheckinPassengersRequestv3 } from '../model/checkinPassengersRequestv3';
import { CheckinRequirements } from '../model/checkinRequirements';
import { IJsonResponse } from '../model/iJsonResponse';
import { InlineResponse2003 } from '../model/inlineResponse2003';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BookingcheckinService {

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
     * Removes the checkin status of passengers for a specific journey in state.
     * 
     * @param journeyKey The journey key.
     * @param request The checkin passengers request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingCheckinJourneyByJourneyKeyDelete(journeyKey: string, request?: CheckinPassengersRequest, observe?: 'body', reportProgress?: boolean): Observable<IJsonResponse>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyDelete(journeyKey: string, request?: CheckinPassengersRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyDelete(journeyKey: string, request?: CheckinPassengersRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyDelete(journeyKey: string, request?: CheckinPassengersRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (journeyKey === null || journeyKey === undefined) {
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV1BookingCheckinJourneyByJourneyKeyDelete.');
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

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/checkin/journey/${encodeURIComponent(String(journeyKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the checkin pre-validation requirements for a specific journey.
     * 
     * @param journeyKey The journey key to be pre validate checkin with.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet(journeyKey: string, observe?: 'body', reportProgress?: boolean): Observable<CheckinRequirements>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet(journeyKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CheckinRequirements>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet(journeyKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CheckinRequirements>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet(journeyKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (journeyKey === null || journeyKey === undefined) {
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet.');
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

        return this.httpClient.get<CheckinRequirements>(`${this.basePath}/api/nsk/v1/booking/checkin/journey/${encodeURIComponent(String(journeyKey))}/requirements`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the passengers lift status for a specific journey based on the booking in state.
     * 
     * @param journeyKey The journey to check lift statuses.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet(journeyKey: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CheckinPassengerLiftStatus>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet(journeyKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CheckinPassengerLiftStatus>>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet(journeyKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CheckinPassengerLiftStatus>>>;
    public apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet(journeyKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (journeyKey === null || journeyKey === undefined) {
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet.');
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

        return this.httpClient.get<Array<CheckinPassengerLiftStatus>>(`${this.basePath}/api/nsk/v1/booking/checkin/journey/${encodeURIComponent(String(journeyKey))}/status`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes the checkin status of passengers for a specific journey&#39;s segment in state.
     * 
     * @param segmentKey The segment key.
     * @param request The checkin passengers request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingCheckinSegmentBySegmentKeyDelete(segmentKey: string, request?: CheckinPassengersRequest, observe?: 'body', reportProgress?: boolean): Observable<IJsonResponse>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyDelete(segmentKey: string, request?: CheckinPassengersRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyDelete(segmentKey: string, request?: CheckinPassengersRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyDelete(segmentKey: string, request?: CheckinPassengersRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (segmentKey === null || segmentKey === undefined) {
            throw new Error('Required parameter segmentKey was null or undefined when calling apiNskV1BookingCheckinSegmentBySegmentKeyDelete.');
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

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/checkin/segment/${encodeURIComponent(String(segmentKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the checkin pre-validation requirements for a specific journey&#39;s segment.
     * 
     * @param segmentKey The segment key to pre validate checkin with.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet(segmentKey: string, observe?: 'body', reportProgress?: boolean): Observable<CheckinRequirements>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet(segmentKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CheckinRequirements>>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet(segmentKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CheckinRequirements>>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet(segmentKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (segmentKey === null || segmentKey === undefined) {
            throw new Error('Required parameter segmentKey was null or undefined when calling apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet.');
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

        return this.httpClient.get<CheckinRequirements>(`${this.basePath}/api/nsk/v1/booking/checkin/segment/${encodeURIComponent(String(segmentKey))}/requirements`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the passenger lift status for a specific segment based on the booking in state.
     * 
     * @param segmentKey The segment key in reference.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet(segmentKey: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2003>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet(segmentKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2003>>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet(segmentKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2003>>;
    public apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet(segmentKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (segmentKey === null || segmentKey === undefined) {
            throw new Error('Required parameter segmentKey was null or undefined when calling apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet.');
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

        return this.httpClient.get<InlineResponse2003>(`${this.basePath}/api/nsk/v1/booking/checkin/segment/${encodeURIComponent(String(segmentKey))}/status`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Checks in a collection of passengers to a specific journey in state.
     * 
     * @param journeyKey The journey key of the segments to checkin.
     * @param request The checkin passengers request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV3BookingCheckinJourneyByJourneyKeyPost(journeyKey: string, request?: CheckinPassengersRequestv3, observe?: 'body', reportProgress?: boolean): Observable<IJsonResponse>;
    public apiNskV3BookingCheckinJourneyByJourneyKeyPost(journeyKey: string, request?: CheckinPassengersRequestv3, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV3BookingCheckinJourneyByJourneyKeyPost(journeyKey: string, request?: CheckinPassengersRequestv3, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV3BookingCheckinJourneyByJourneyKeyPost(journeyKey: string, request?: CheckinPassengersRequestv3, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (journeyKey === null || journeyKey === undefined) {
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV3BookingCheckinJourneyByJourneyKeyPost.');
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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v3/booking/checkin/journey/${encodeURIComponent(String(journeyKey))}`,
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
     * Checks in a collection of passengers to a specific journey&#39;s segment in state.
     * 
     * @param segmentKey The segment key of the segment to checkin.
     * @param request The checkin passengers request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV3BookingCheckinSegmentBySegmentKeyPost(segmentKey: string, request?: CheckinPassengersRequestv3, observe?: 'body', reportProgress?: boolean): Observable<IJsonResponse>;
    public apiNskV3BookingCheckinSegmentBySegmentKeyPost(segmentKey: string, request?: CheckinPassengersRequestv3, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV3BookingCheckinSegmentBySegmentKeyPost(segmentKey: string, request?: CheckinPassengersRequestv3, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV3BookingCheckinSegmentBySegmentKeyPost(segmentKey: string, request?: CheckinPassengersRequestv3, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (segmentKey === null || segmentKey === undefined) {
            throw new Error('Required parameter segmentKey was null or undefined when calling apiNskV3BookingCheckinSegmentBySegmentKeyPost.');
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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v3/booking/checkin/segment/${encodeURIComponent(String(segmentKey))}`,
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
