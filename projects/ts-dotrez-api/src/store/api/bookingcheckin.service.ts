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
    CheckinPassengerLiftStatus, 
    CheckinPassengersRequest, 
    CheckinPassengersRequestv3, 
    CheckinRequirements, 
    IJsonResponse, 
    InlineResponse2003, 
} from 'api-models';

import {
        apiNskV1BookingCheckinJourneyByJourneyKeyDelete,
        apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet,
        apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet,
        apiNskV1BookingCheckinSegmentBySegmentKeyDelete,
        apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet,
        apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet,
        apiNskV3BookingCheckinJourneyByJourneyKeyPost,
        apiNskV3BookingCheckinSegmentBySegmentKeyPost,
} from '../base/api'




@injectable()
export class StoreBookingcheckinService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Removes the checkin status of passengers for a specific journey in state.
     * 
     */
    public async store_apiNskV1BookingCheckinJourneyByJourneyKeyDelete(journeyKey: string, request?: CheckinPassengersRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingCheckinJourneyByJourneyKeyDelete(journeyKey,request,'body', headers);
        // TODO: Implement apiNskV1BookingCheckinJourneyByJourneyKeyDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the checkin pre-validation requirements for a specific journey.
     * 
     */
    public async store_apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet(journeyKey: string,  headers?: Headers): Promise<CheckinRequirements>
    {
        const response = await apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet(journeyKey,'body', headers);
        // TODO: Implement apiNskV1BookingCheckinJourneyByJourneyKeyRequirementsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the passengers lift status for a specific journey based on the booking in state.
     * 
     */
    public async store_apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet(journeyKey: string,  headers?: Headers): Promise<Array<CheckinPassengerLiftStatus>>
    {
        const response = await apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet(journeyKey,'body', headers);
        // TODO: Implement apiNskV1BookingCheckinJourneyByJourneyKeyStatusGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Removes the checkin status of passengers for a specific journey&#39;s segment in state.
     * 
     */
    public async store_apiNskV1BookingCheckinSegmentBySegmentKeyDelete(segmentKey: string, request?: CheckinPassengersRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingCheckinSegmentBySegmentKeyDelete(segmentKey,request,'body', headers);
        // TODO: Implement apiNskV1BookingCheckinSegmentBySegmentKeyDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the checkin pre-validation requirements for a specific journey&#39;s segment.
     * 
     */
    public async store_apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet(segmentKey: string,  headers?: Headers): Promise<CheckinRequirements>
    {
        const response = await apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet(segmentKey,'body', headers);
        // TODO: Implement apiNskV1BookingCheckinSegmentBySegmentKeyRequirementsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the passenger lift status for a specific segment based on the booking in state.
     * 
     */
    public async store_apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet(segmentKey: string,  headers?: Headers): Promise<InlineResponse2003>
    {
        const response = await apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet(segmentKey,'body', headers);
        // TODO: Implement apiNskV1BookingCheckinSegmentBySegmentKeyStatusGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Checks in a collection of passengers to a specific journey in state.
     * 
     */
    public async store_apiNskV3BookingCheckinJourneyByJourneyKeyPost(journeyKey: string, request?: CheckinPassengersRequestv3,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV3BookingCheckinJourneyByJourneyKeyPost(journeyKey,request,'body', headers);
        // TODO: Implement apiNskV3BookingCheckinJourneyByJourneyKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Checks in a collection of passengers to a specific journey&#39;s segment in state.
     * 
     */
    public async store_apiNskV3BookingCheckinSegmentBySegmentKeyPost(segmentKey: string, request?: CheckinPassengersRequestv3,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV3BookingCheckinSegmentBySegmentKeyPost(segmentKey,request,'body', headers);
        // TODO: Implement apiNskV3BookingCheckinSegmentBySegmentKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
