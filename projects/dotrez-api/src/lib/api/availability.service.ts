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
 AvailabilityRequestv2,
 AvailabilitySimpleRequestv2,
 Availabilityv2,
 IJsonResponse,
 LowFareAvailability,
 LowFareAvailabilityRequest,
 LowFareAvailabilitySearchSimpleRequest,
 LowFareCacheAvailability,
 LowFareCacheRequest,
} from '../types/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

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
     * 
     * 
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:LowFareCacheAvailability,metadata:{documentation_url:string}}>;
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:LowFareCacheAvailability,metadata:{documentation_url:string}}>>;
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LowFareCacheAvailability>>;
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<LowFareCacheAvailability>(`${this.basePath}/api/nsk/v1/availability/lowfare/beta`,
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
     * Searches for low fare availability with the full low fare search request. This request allows for total control  over the configuration. If a property is not set, the default settings (LowFareAvailabilitySettings) are used in  its place.
     * Although this endpoint behaves like a GET, POST reduces the limitations resulting from URL length issues.
     * @param request The low fare availability request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:LowFareAvailability,metadata:{documentation_url:string}}>;
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:LowFareAvailability,metadata:{documentation_url:string}}>>;
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LowFareAvailability>>;
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<LowFareAvailability>(`${this.basePath}/api/nsk/v2/availability/lowfare`,
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
     * Searches for low fare availability with the simple search request. The simple search request covers the common search  criteria and lets default settings (LowFareAvailabilitySettings) configure the rest.
     * Although this endpoint behaves like a GET, POST reduces the limitations resulting from URL length issues.
     * @param request The low fare availability search simple request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:LowFareAvailability,metadata:{documentation_url:string}}>;
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:LowFareAvailability,metadata:{documentation_url:string}}>>;
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LowFareAvailability>>;
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<LowFareAvailability>(`${this.basePath}/api/nsk/v2/availability/lowfare/simple`,
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
     * Searches for availability with the full availability search request. This request allows for total control over  the configuration. If a property is not set, default values will be set instead. These defaults are what we  consider a general optimized request. If these optimizations are not preferred the requester will need to  opted out the filters on the availability request.
     * Note: It is advised to optimize the availability request with passing in at least one or more (ProductClass,  TravelClass, FareTypes or ClassesOfService) so the response can be optimized as possible. This is even more  recommended for mobile applications due to the nature of limited network capabilities.                The default values that will be set unless specified:  &lt;example&gt;      - AvailabilityRequestv2.TaxesAndFees &#x3D; TaxesAndFeesRollupMode.None      - AvailabilityRequestv2.Criteria.SsrCollectionsMode &#x3D; AvailabilitySsrCollectionsMode.None      - AvailabilityRequestv2.Criteria.Filters.FareInclusionType &#x3D; AvailabilityType.Default      - AvailabilityRequestv2.Criteria.Filters.CompressionType &#x3D; FareClassControl.LowestFareClass      - AvailabilityRequestv2.Criteria.Filters.Loyalty &#x3D; LoyaltyFilter.MonetaryOnly      - AvailabilityRequestv2.Criteria.Filters.FlightType &#x3D; FlightType.All      - AvailabilityRequestv2.Criteria.Filters.ExclusionType &#x3D; AvailabilityFilter.ExcludeUnavailable      - AvailabilityRequestv2.Criteria.Filters.SortOptions &#x3D;      JourneySortKey.LowestFare,JourneySortKey.EarliestDeparture,JourneySortKey.ShortestTravelTime      - AvailabilityRequestv2.Filters.ConnectionType &#x3D; SoldAsConnectionType.None      - AvailabilityRequestv2.Criteria.Filters.MaxConnectingFlights &#x3D; 0      - AvailabilityRequestv2.Criteria.Stations.SearchDestinationMacs &#x3D; false      - AvailabilityRequestv2.Criteria.Stations.SearchOriginMacs &#x3D; false      - AvailabilityRequestv2.NumberOfFaresPerJourney &#x3D; 1  &lt;/example&gt;
     * @param request The availability v2 search request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe?: 'body', reportProgress?: boolean): Observable<{data:Availabilityv2,metadata:{documentation_url:string}}>;
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Availabilityv2,metadata:{documentation_url:string}}>>;
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Availabilityv2>>;
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<Availabilityv2>(`${this.basePath}/api/nsk/v4/availability/search`,
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
     * Searches for availability with the simple availability search request. This request allows for easy setup for one  way and round trip searches. If a property is not set, default values will be set instead just like they would in  the full availability request. These defaults are what we consider a general optimized request. If these  optimizations are not preferred the requester will need to opted out the filters on the availability simple  request.
     * Note: It is advised to optimize the availability request with passing in at least one or more (ProductClass,  TravelClass, FareTypes or ClassesOfService) so the response can be optimized as possible. This is even more  recommended for mobile applications due to the nature of limited network capabilities.                The default values that will be set unless specified:  &lt;example&gt;      - AvailabilitySimpleRequestv2.TaxesAndFees &#x3D; TaxesAndFeesRollupMode.None      - AvailabilitySimpleRequestv2.SsrCollectionsMode &#x3D; AvailabilitySsrCollectionsMode.None      - AvailabilitySimpleRequestv2.Filters.FareInclusionType &#x3D; AvailabilityType.Default      - AvailabilitySimpleRequestv2.Filters.CompressionType &#x3D; FareClassControl.LowestFareClass      - AvailabilitySimpleRequestv2.Filters.Loyalty &#x3D; LoyaltyFilter.MonetaryOnly      - AvailabilitySimpleRequestv2.Filters.FlightType &#x3D; FlightType.All      - AvailabilitySimpleRequestv2.Filters.ExclusionType &#x3D; AvailabilityFilter.ExcludeUnavailable      - AvailabilitySimpleRequestv2.Filters.SortOptions &#x3D;      JourneySortKey.LowestFare,JourneySortKey.EarliestDeparture,JourneySortKey.ShortestTravelTime      - AvailabilitySimpleRequestv2.Filters.ConnectionType &#x3D; SoldAsConnectionType.None      - AvailabilitySimpleRequestv2.Filters.MaxConnectingFlights &#x3D; 0      - AvailabilitySimpleRequestv2.SearchDestinationMacs &#x3D; false      - AvailabilitySimpleRequestv2.SearchOriginMacs &#x3D; false      - AvailabilitySimpleRequestv2.NumberOfFaresPerJourney &#x3D; 1  &lt;/example&gt;
     * @param request The availability simple v2 search request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe?: 'body', reportProgress?: boolean): Observable<{data:Availabilityv2,metadata:{documentation_url:string}}>;
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Availabilityv2,metadata:{documentation_url:string}}>>;
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Availabilityv2>>;
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<Availabilityv2>(`${this.basePath}/api/nsk/v4/availability/search/simple`,
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
