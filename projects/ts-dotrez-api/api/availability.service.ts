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
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { AvailabilityRequestv2 } from '../model/availabilityRequestv2';
import { AvailabilitySimpleRequestv2 } from '../model/availabilitySimpleRequestv2';
import { Availabilityv2 } from '../model/availabilityv2';
import { IJsonResponse } from '../model/iJsonResponse';
import { LowFareAvailability } from '../model/lowFareAvailability';
import { LowFareAvailabilityRequest } from '../model/lowFareAvailabilityRequest';
import { LowFareAvailabilitySearchSimpleRequest } from '../model/lowFareAvailabilitySearchSimpleRequest';
import { LowFareCacheAvailability } from '../model/lowFareCacheAvailability';
import { LowFareCacheRequest } from '../model/lowFareCacheRequest';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class AvailabilityService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * 
     * 
     * @param request 
     
     */
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe?: 'body', headers?: Headers): Observable<LowFareCacheAvailability>;
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<LowFareCacheAvailability>>;
    public apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<LowFareCacheAvailability>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/availability/lowfare/beta`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <LowFareCacheAvailability>(httpResponse.response));
        }
        return response;
    }


    /**
     * Searches for low fare availability with the full low fare search request. This request allows for total control  over the configuration. If a property is not set, the default settings (LowFareAvailabilitySettings) are used in  its place.
     * Although this endpoint behaves like a GET, POST reduces the limitations resulting from URL length issues.
     * @param request The low fare availability request.
     
     */
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe?: 'body', headers?: Headers): Observable<LowFareAvailability>;
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<LowFareAvailability>>;
    public apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<LowFareAvailability>> = this.httpClient.post(`${this.basePath}/api/nsk/v2/availability/lowfare`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <LowFareAvailability>(httpResponse.response));
        }
        return response;
    }


    /**
     * Searches for low fare availability with the simple search request. The simple search request covers the common search  criteria and lets default settings (LowFareAvailabilitySettings) configure the rest.
     * Although this endpoint behaves like a GET, POST reduces the limitations resulting from URL length issues.
     * @param request The low fare availability search simple request.
     
     */
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe?: 'body', headers?: Headers): Observable<LowFareAvailability>;
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<LowFareAvailability>>;
    public apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<LowFareAvailability>> = this.httpClient.post(`${this.basePath}/api/nsk/v2/availability/lowfare/simple`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <LowFareAvailability>(httpResponse.response));
        }
        return response;
    }


    /**
     * Searches for availability with the full availability search request. This request allows for total control over  the configuration. If a property is not set, default values will be set instead. These defaults are what we  consider a general optimized request. If these optimizations are not preferred the requester will need to  opted out the filters on the availability request.
     * Note: It is advised to optimize the availability request with passing in at least one or more (ProductClass,  TravelClass, FareTypes or ClassesOfService) so the response can be optimized as possible. This is even more  recommended for mobile applications due to the nature of limited network capabilities.                The default values that will be set unless specified:  &lt;example&gt;      - AvailabilityRequestv2.TaxesAndFees &#x3D; TaxesAndFeesRollupMode.None      - AvailabilityRequestv2.Criteria.SsrCollectionsMode &#x3D; AvailabilitySsrCollectionsMode.None      - AvailabilityRequestv2.Criteria.Filters.FareInclusionType &#x3D; AvailabilityType.Default      - AvailabilityRequestv2.Criteria.Filters.CompressionType &#x3D; FareClassControl.LowestFareClass      - AvailabilityRequestv2.Criteria.Filters.Loyalty &#x3D; LoyaltyFilter.MonetaryOnly      - AvailabilityRequestv2.Criteria.Filters.FlightType &#x3D; FlightType.All      - AvailabilityRequestv2.Criteria.Filters.ExclusionType &#x3D; AvailabilityFilter.ExcludeUnavailable      - AvailabilityRequestv2.Criteria.Filters.SortOptions &#x3D;      JourneySortKey.LowestFare,JourneySortKey.EarliestDeparture,JourneySortKey.ShortestTravelTime      - AvailabilityRequestv2.Filters.ConnectionType &#x3D; SoldAsConnectionType.None      - AvailabilityRequestv2.Criteria.Filters.MaxConnectingFlights &#x3D; 0      - AvailabilityRequestv2.Criteria.Stations.SearchDestinationMacs &#x3D; false      - AvailabilityRequestv2.Criteria.Stations.SearchOriginMacs &#x3D; false      - AvailabilityRequestv2.NumberOfFaresPerJourney &#x3D; 1  &lt;/example&gt;
     * @param request The availability v2 search request.
     
     */
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe?: 'body', headers?: Headers): Observable<Availabilityv2>;
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe?: 'response', headers?: Headers): Observable<HttpResponse<Availabilityv2>>;
    public apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Availabilityv2>> = this.httpClient.post(`${this.basePath}/api/nsk/v4/availability/search`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Availabilityv2>(httpResponse.response));
        }
        return response;
    }


    /**
     * Searches for availability with the simple availability search request. This request allows for easy setup for one  way and round trip searches. If a property is not set, default values will be set instead just like they would in  the full availability request. These defaults are what we consider a general optimized request. If these  optimizations are not preferred the requester will need to opted out the filters on the availability simple  request.
     * Note: It is advised to optimize the availability request with passing in at least one or more (ProductClass,  TravelClass, FareTypes or ClassesOfService) so the response can be optimized as possible. This is even more  recommended for mobile applications due to the nature of limited network capabilities.                The default values that will be set unless specified:  &lt;example&gt;      - AvailabilitySimpleRequestv2.TaxesAndFees &#x3D; TaxesAndFeesRollupMode.None      - AvailabilitySimpleRequestv2.SsrCollectionsMode &#x3D; AvailabilitySsrCollectionsMode.None      - AvailabilitySimpleRequestv2.Filters.FareInclusionType &#x3D; AvailabilityType.Default      - AvailabilitySimpleRequestv2.Filters.CompressionType &#x3D; FareClassControl.LowestFareClass      - AvailabilitySimpleRequestv2.Filters.Loyalty &#x3D; LoyaltyFilter.MonetaryOnly      - AvailabilitySimpleRequestv2.Filters.FlightType &#x3D; FlightType.All      - AvailabilitySimpleRequestv2.Filters.ExclusionType &#x3D; AvailabilityFilter.ExcludeUnavailable      - AvailabilitySimpleRequestv2.Filters.SortOptions &#x3D;      JourneySortKey.LowestFare,JourneySortKey.EarliestDeparture,JourneySortKey.ShortestTravelTime      - AvailabilitySimpleRequestv2.Filters.ConnectionType &#x3D; SoldAsConnectionType.None      - AvailabilitySimpleRequestv2.Filters.MaxConnectingFlights &#x3D; 0      - AvailabilitySimpleRequestv2.SearchDestinationMacs &#x3D; false      - AvailabilitySimpleRequestv2.SearchOriginMacs &#x3D; false      - AvailabilitySimpleRequestv2.NumberOfFaresPerJourney &#x3D; 1  &lt;/example&gt;
     * @param request The availability simple v2 search request.
     
     */
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe?: 'body', headers?: Headers): Observable<Availabilityv2>;
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe?: 'response', headers?: Headers): Observable<HttpResponse<Availabilityv2>>;
    public apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Availabilityv2>> = this.httpClient.post(`${this.basePath}/api/nsk/v4/availability/search/simple`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Availabilityv2>(httpResponse.response));
        }
        return response;
    }

}