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
import { inject, injectable } from "inversify";

import {
    HttpResponse,
    Headers,
    IHttpClient,
    AvailabilityRequestv2, 
    AvailabilitySimpleRequestv2, 
    Availabilityv2, 
    IJsonResponse, 
    LowFareAvailability, 
    LowFareAvailabilityRequest, 
    LowFareAvailabilitySearchSimpleRequest, 
    LowFareCacheAvailability, 
    LowFareCacheRequest, 
} from 'api-models';

import {
        apiNskV1AvailabilityLowfareBetaPost,
        apiNskV2AvailabilityLowfarePost,
        apiNskV2AvailabilityLowfareSimplePost,
        apiNskV4AvailabilitySearchPost,
        apiNskV4AvailabilitySearchSimplePost,
} from '../base/api'




@injectable()
export class StoreAvailabilityService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * 
     * 
     */
    public async store_apiNskV1AvailabilityLowfareBetaPost(request?: LowFareCacheRequest,  headers?: Headers): Promise<LowFareCacheAvailability>
    {
        const response = await apiNskV1AvailabilityLowfareBetaPost(request,'body', headers);
        // TODO: Implement apiNskV1AvailabilityLowfareBetaPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for low fare availability with the full low fare search request. This request allows for total control  over the configuration. If a property is not set, the default settings (LowFareAvailabilitySettings) are used in  its place.
     * Although this endpoint behaves like a GET, POST reduces the limitations resulting from URL length issues.
     */
    public async store_apiNskV2AvailabilityLowfarePost(request?: LowFareAvailabilityRequest,  headers?: Headers): Promise<LowFareAvailability>
    {
        const response = await apiNskV2AvailabilityLowfarePost(request,'body', headers);
        // TODO: Implement apiNskV2AvailabilityLowfarePost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for low fare availability with the simple search request. The simple search request covers the common search  criteria and lets default settings (LowFareAvailabilitySettings) configure the rest.
     * Although this endpoint behaves like a GET, POST reduces the limitations resulting from URL length issues.
     */
    public async store_apiNskV2AvailabilityLowfareSimplePost(request?: LowFareAvailabilitySearchSimpleRequest,  headers?: Headers): Promise<LowFareAvailability>
    {
        const response = await apiNskV2AvailabilityLowfareSimplePost(request,'body', headers);
        // TODO: Implement apiNskV2AvailabilityLowfareSimplePost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for availability with the full availability search request. This request allows for total control over  the configuration. If a property is not set, default values will be set instead. These defaults are what we  consider a general optimized request. If these optimizations are not preferred the requester will need to  opted out the filters on the availability request.
     * Note: It is advised to optimize the availability request with passing in at least one or more (ProductClass,  TravelClass, FareTypes or ClassesOfService) so the response can be optimized as possible. This is even more  recommended for mobile applications due to the nature of limited network capabilities.                The default values that will be set unless specified:  &lt;example&gt;      - AvailabilityRequestv2.TaxesAndFees &#x3D; TaxesAndFeesRollupMode.None      - AvailabilityRequestv2.Criteria.SsrCollectionsMode &#x3D; AvailabilitySsrCollectionsMode.None      - AvailabilityRequestv2.Criteria.Filters.FareInclusionType &#x3D; AvailabilityType.Default      - AvailabilityRequestv2.Criteria.Filters.CompressionType &#x3D; FareClassControl.LowestFareClass      - AvailabilityRequestv2.Criteria.Filters.Loyalty &#x3D; LoyaltyFilter.MonetaryOnly      - AvailabilityRequestv2.Criteria.Filters.FlightType &#x3D; FlightType.All      - AvailabilityRequestv2.Criteria.Filters.ExclusionType &#x3D; AvailabilityFilter.ExcludeUnavailable      - AvailabilityRequestv2.Criteria.Filters.SortOptions &#x3D;      JourneySortKey.LowestFare,JourneySortKey.EarliestDeparture,JourneySortKey.ShortestTravelTime      - AvailabilityRequestv2.Filters.ConnectionType &#x3D; SoldAsConnectionType.None      - AvailabilityRequestv2.Criteria.Filters.MaxConnectingFlights &#x3D; 0      - AvailabilityRequestv2.Criteria.Stations.SearchDestinationMacs &#x3D; false      - AvailabilityRequestv2.Criteria.Stations.SearchOriginMacs &#x3D; false      - AvailabilityRequestv2.NumberOfFaresPerJourney &#x3D; 1  &lt;/example&gt;
     */
    public async store_apiNskV4AvailabilitySearchPost(request?: AvailabilityRequestv2,  headers?: Headers): Promise<Availabilityv2>
    {
        const response = await apiNskV4AvailabilitySearchPost(request,'body', headers);
        // TODO: Implement apiNskV4AvailabilitySearchPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for availability with the simple availability search request. This request allows for easy setup for one  way and round trip searches. If a property is not set, default values will be set instead just like they would in  the full availability request. These defaults are what we consider a general optimized request. If these  optimizations are not preferred the requester will need to opted out the filters on the availability simple  request.
     * Note: It is advised to optimize the availability request with passing in at least one or more (ProductClass,  TravelClass, FareTypes or ClassesOfService) so the response can be optimized as possible. This is even more  recommended for mobile applications due to the nature of limited network capabilities.                The default values that will be set unless specified:  &lt;example&gt;      - AvailabilitySimpleRequestv2.TaxesAndFees &#x3D; TaxesAndFeesRollupMode.None      - AvailabilitySimpleRequestv2.SsrCollectionsMode &#x3D; AvailabilitySsrCollectionsMode.None      - AvailabilitySimpleRequestv2.Filters.FareInclusionType &#x3D; AvailabilityType.Default      - AvailabilitySimpleRequestv2.Filters.CompressionType &#x3D; FareClassControl.LowestFareClass      - AvailabilitySimpleRequestv2.Filters.Loyalty &#x3D; LoyaltyFilter.MonetaryOnly      - AvailabilitySimpleRequestv2.Filters.FlightType &#x3D; FlightType.All      - AvailabilitySimpleRequestv2.Filters.ExclusionType &#x3D; AvailabilityFilter.ExcludeUnavailable      - AvailabilitySimpleRequestv2.Filters.SortOptions &#x3D;      JourneySortKey.LowestFare,JourneySortKey.EarliestDeparture,JourneySortKey.ShortestTravelTime      - AvailabilitySimpleRequestv2.Filters.ConnectionType &#x3D; SoldAsConnectionType.None      - AvailabilitySimpleRequestv2.Filters.MaxConnectingFlights &#x3D; 0      - AvailabilitySimpleRequestv2.SearchDestinationMacs &#x3D; false      - AvailabilitySimpleRequestv2.SearchOriginMacs &#x3D; false      - AvailabilitySimpleRequestv2.NumberOfFaresPerJourney &#x3D; 1  &lt;/example&gt;
     */
    public async store_apiNskV4AvailabilitySearchSimplePost(request?: AvailabilitySimpleRequestv2,  headers?: Headers): Promise<Availabilityv2>
    {
        const response = await apiNskV4AvailabilitySearchSimplePost(request,'body', headers);
        // TODO: Implement apiNskV4AvailabilitySearchSimplePost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
