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
import {
 IJsonResponse,
 PassengerSsr,
 PassengerSsrKey,
 ResellSsrRequest,
 SingleSsrByKeyRequestv2,
 SsrAvailability,
 SsrAvailabilityRequestv2,
 SsrByKeysRequestv2,
 SsrsRequest,
} from '../types/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class BookingssrsService {

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
     * Deletes by the SSR passenger key provided by metadata.
     * Requires a booking in state.
     * @param ssrKey Unique Ssr passenger identifier.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ssrKey === null || ssrKey === undefined) {
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV1BookingSsrsBySsrKeyDelete.');
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

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/ssrs/${encodeURIComponent(String(ssrKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the current SSR by key.
     * Requires a booking in state.
     * @param ssrKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe?: 'body', reportProgress?: boolean): Observable<{data:PassengerSsr,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:PassengerSsr,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PassengerSsr>>;
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ssrKey === null || ssrKey === undefined) {
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV1BookingSsrsBySsrKeyGet.');
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

        return this.httpClient.get<PassengerSsr>(`${this.basePath}/api/nsk/v1/booking/ssrs/${encodeURIComponent(String(ssrKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modify the ssr note.
     * Requires a booking in state.
     * @param ssrKey Unique Ssr key identifier.
     * @param note The updated note.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ssrKey === null || ssrKey === undefined) {
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV1BookingSsrsBySsrKeyPut.');
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

        return this.httpClient.put<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/ssrs/${encodeURIComponent(String(ssrKey))}`,
            note,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the current SSRs added to the booking in state.
     * Requires a booking in state.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsGet(observe?: 'body', reportProgress?: boolean): Observable<{data:Array<PassengerSsr>,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Array<PassengerSsr>,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PassengerSsr>>>;
    public apiNskV1BookingSsrsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<PassengerSsr>>(`${this.basePath}/api/nsk/v1/booking/ssrs`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes the SSR by the request criteria.
     * Requires a booking in state.   This is an alternate way of deleting an SSR. Deleting by ID is recommended (see /api/booking/ssrs).  This method is useful if the UI is not querying availability and not using dynamic SSR information.
     * @param request Unique Ssr passenger information.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/ssrs/manual`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Adds SSRs to the booking in state.
     * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.  This is an alternate way of creating an SSR. Creating by ID is recommended (see /api/booking/ssrs).  This method is useful if the UI is not querying availability and not using dynamic SSR information.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/ssrs/manual`,
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
     * Resells any cancelled ssrs to the provided journey on the booking.
     * 
     * @param request The resell ssr request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v1/booking/ssrs/resell`,
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
     * Get the ssr&#39;s available to add to the booking in state.
     * Requires a booking in state.  By default, all ssr availability for the booking is returned.
     * @param request Optional request filter.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe?: 'body', reportProgress?: boolean): Observable<{data:SsrAvailability,metadata:{documentation_url:string}}>;
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:SsrAvailability,metadata:{documentation_url:string}}>>;
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SsrAvailability>>;
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<SsrAvailability>(`${this.basePath}/api/nsk/v2/booking/ssrs/availability`,
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
     * Add an SSR to the booking in state.
     * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.
     * @param ssrKey The SSR key to add.
     * @param request The single SSR by key request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ssrKey === null || ssrKey === undefined) {
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV2BookingSsrsBySsrKeyPost.');
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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v2/booking/ssrs/${encodeURIComponent(String(ssrKey))}`,
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
     * Adds SSRs to the booking in state.
     * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.
     * @param request The SSR by keys request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v2/booking/ssrs`,
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
