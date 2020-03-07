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
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";
import {
    Availability 
    AvailabilityFlyAheadRequest 
    AvailabilityMoveRequest 
    AvailabilityRebookRequest 
    Booking 
    BookingSellRequest 
    IJsonResponse 
    MoveRequest 
    ScheduleDetail 
    Trip 
    TripDetails 
    TripDowngradeRequest 
    TripInformationQuery 
    TripInformationResponse 
    TripSellRequest 
    TripStatusv2 
    TripUpgradeBaseRequest 
    TripUpgradeRequest 
    UpgradeSegment 
} from 'api-models';

import {
        apiNskV1TripDowngradePost
        apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet
        apiNskV1TripFlyAheadAvailabilityPost
        apiNskV1TripInfoByLegKeyDetailsGet
        apiNskV1TripInfoPost
        apiNskV1TripInfoSimpleGet
        apiNskV1TripMoveAvailabilitySelfServiceGet
        apiNskV1TripMovePost
        apiNskV1TripScheduleGet
        apiNskV1TripUpgradeByUpgradeKeyPost
        apiNskV1TripUpgradeGet
        apiNskV1TripUpgradePost
        apiNskV2TripInfoByLegKeyStatusGet
        apiNskV2TripMoveAvailabilityByJourneyKeyGet
        apiNskV2TripMoveAvailabilityPost
        apiNskV3TripRebookAvailabilityPost
        apiNskV3TripRebookAvailabilitySimpleGet
        apiNskV4TripPost
        apiNskV4TripSellPost
} from '../base/api'




@injectable()
export class StoreTripService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Downgrades the current booking in state segments.
     * 
     */
    public store_apiNskV1TripDowngradePost(request?: TripDowngradeRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1TripDowngradePost(request,'body', headers);
        // TODO: Implement apiNskV1TripDowngradePost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Simple fly ahead search request covers the bare minimum search  by journey. AvailabilitySettings configure the rest.
     * 
     */
    public store_apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet(journeyKey: string,  headers?: Headers): Promise<Trip>
    {
        const response = await apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet(journeyKey,'body', headers);
        // TODO: Implement apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Full fly ahead availability search request.
     * This request allows for total control over  the configuration. If a property is not set, the default settings (AvailabilitySettings) is used in its place.  Note, this is a post request even though it is only getting information. This is due to the complicated data needed  in the post data.
     */
    public store_apiNskV1TripFlyAheadAvailabilityPost(request?: AvailabilityFlyAheadRequest,  headers?: Headers): Promise<Trip>
    {
        const response = await apiNskV1TripFlyAheadAvailabilityPost(request,'body', headers);
        // TODO: Implement apiNskV1TripFlyAheadAvailabilityPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves cabin and various details for the specified leg key.
     * The additional trip details include the leg cross references,   the cabin details (nest counts), and the checkin-lid.
     */
    public store_apiNskV1TripInfoByLegKeyDetailsGet(legKey: string,  headers?: Headers): Promise<TripDetails>
    {
        const response = await apiNskV1TripInfoByLegKeyDetailsGet(legKey,'body', headers);
        // TODO: Implement apiNskV1TripInfoByLegKeyDetailsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the search results for the trip information, based on the search criteria.
     * 
     */
    public store_apiNskV1TripInfoPost(request?: TripInformationQuery,  headers?: Headers): Promise<Array<TripInformationResponse>>
    {
        const response = await apiNskV1TripInfoPost(request,'body', headers);
        // TODO: Implement apiNskV1TripInfoPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Performs a simplified search for trip information based upon minimal, required data for  the search criteria.
     * 
     */
    public store_apiNskV1TripInfoSimpleGet(beginDate: Date, numberOfJourneys?: number, origin?: string, destination?: string, endDate?: Date, startTimeInterval?: string, endTimeInterval?: string, identifier?: string, carrierCode?: string, flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect',  headers?: Headers): Promise<Array<TripInformationResponse>>
    {
        const response = await apiNskV1TripInfoSimpleGet(beginDate,numberOfJourneys,origin,destination,endDate,startTimeInterval,endTimeInterval,identifier,carrierCode,flightType,'body', headers);
        // TODO: Implement apiNskV1TripInfoSimpleGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Self-service search for move availability.
     * 
     */
    public store_apiNskV1TripMoveAvailabilitySelfServiceGet( headers?: Headers): Promise<Availability>
    {
        const response = await apiNskV1TripMoveAvailabilitySelfServiceGet('body', headers);
        // TODO: Implement apiNskV1TripMoveAvailabilitySelfServiceGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Moves a journey on the booking in state.
     * 
     */
    public store_apiNskV1TripMovePost(request?: MoveRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1TripMovePost(request,'body', headers);
        // TODO: Implement apiNskV1TripMovePost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the schedule of flights for a market.
     * 
     */
    public store_apiNskV1TripScheduleGet(origin: string, destination: string, beginDate: Date, endDate: Date, type?: 'None' | 'NonStop' | 'Through' | 'Direct' | 'Connect' | 'All',  headers?: Headers): Promise<Array<ScheduleDetail>>
    {
        const response = await apiNskV1TripScheduleGet(origin,destination,beginDate,endDate,type,'body', headers);
        // TODO: Implement apiNskV1TripScheduleGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Upgrades the current booking for the single key.
     * 
     */
    public store_apiNskV1TripUpgradeByUpgradeKeyPost(upgradeKey: string, request?: TripUpgradeBaseRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1TripUpgradeByUpgradeKeyPost(upgradeKey,request,'body', headers);
        // TODO: Implement apiNskV1TripUpgradeByUpgradeKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the list of upgrade options for the booking in state.
     * 
     */
    public store_apiNskV1TripUpgradeGet( headers?: Headers): Promise<Array<UpgradeSegment>>
    {
        const response = await apiNskV1TripUpgradeGet('body', headers);
        // TODO: Implement apiNskV1TripUpgradeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Upgrades the current booking in state segments.
     * 
     */
    public store_apiNskV1TripUpgradePost(request?: TripUpgradeRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1TripUpgradePost(request,'body', headers);
        // TODO: Implement apiNskV1TripUpgradePost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the trip status data for the specified leg key.
     * 
     */
    public store_apiNskV2TripInfoByLegKeyStatusGet(legKey: string,  headers?: Headers): Promise<TripStatusv2>
    {
        const response = await apiNskV2TripInfoByLegKeyStatusGet(legKey,'body', headers);
        // TODO: Implement apiNskV2TripInfoByLegKeyStatusGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for availability with the simple move request. The simple search request covers the bare minimum search  criteria and lets default settings (AvailabilitySettings) configure the rest.
     * 
     */
    public store_apiNskV2TripMoveAvailabilityByJourneyKeyGet(journeyKey: string, passengerMoveType: 'None' | 'Irop' | 'Diversion' | 'FlightClose' | 'FlyAhead' | 'SplitJourney' | 'SelfServiceRebooking', beginDate?: Date, origin?: string, destination?: string,  headers?: Headers): Promise<Availability>
    {
        const response = await apiNskV2TripMoveAvailabilityByJourneyKeyGet(journeyKey,passengerMoveType,beginDate,origin,destination,'body', headers);
        // TODO: Implement apiNskV2TripMoveAvailabilityByJourneyKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for move availability with the full availability search request. This request will allow for total control  over  the configuration. If a property is not set, the default settings (AvailabilitySettings) is used in its place.
     * Note, this is a post request even though it is only getting information. This is due to the complicated data needed  in the post data.
     */
    public store_apiNskV2TripMoveAvailabilityPost(request?: AvailabilityMoveRequest,  headers?: Headers): Promise<Availability>
    {
        const response = await apiNskV2TripMoveAvailabilityPost(request,'body', headers);
        // TODO: Implement apiNskV2TripMoveAvailabilityPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Rebook search with the current booking defaults.
     * Requires a booking in state.   Although this endpoint behaves like a GET, POST is used to reduce the limitations resulting from URL length issues.
     */
    public store_apiNskV3TripRebookAvailabilityPost(request?: AvailabilityRebookRequest,  headers?: Headers): Promise<Availability>
    {
        const response = await apiNskV3TripRebookAvailabilityPost(request,'body', headers);
        // TODO: Implement apiNskV3TripRebookAvailabilityPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Simple rebook search with the current booking defaults.
     * Requires a booking in state.
     */
    public store_apiNskV3TripRebookAvailabilitySimpleGet(origin: string, destination: string, beginDate: Date, endDate?: Date, loyaltyFilter?: 'MonetaryOnly' | 'PointsOnly' | 'PointsAndMonetary' | 'PreserveCurrent',  headers?: Headers): Promise<Availability>
    {
        const response = await apiNskV3TripRebookAvailabilitySimpleGet(origin,destination,beginDate,endDate,loyaltyFilter,'body', headers);
        // TODO: Implement apiNskV3TripRebookAvailabilitySimpleGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates a new booking with the provided journeys, contacts, passengers, and SSRs.
     * 
     */
    public store_apiNskV4TripPost(request?: BookingSellRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV4TripPost(request,'body', headers);
        // TODO: Implement apiNskV4TripPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Sells the list of journeys and creates a booking if it doesn&#39;t already exist.
     * 
     */
    public store_apiNskV4TripSellPost(request?: TripSellRequest,  headers?: Headers): Promise<Booking>
    {
        const response = await apiNskV4TripSellPost(request,'body', headers);
        // TODO: Implement apiNskV4TripSellPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
