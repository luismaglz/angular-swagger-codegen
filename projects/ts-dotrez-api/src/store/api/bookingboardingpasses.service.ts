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
    BoardingPassFilterRequest 
    BoardingPassPassengerFilterRequest 
    BoardingPassesCollectionv2 
    BoardingPassesM2D 
    BoardingPassesS2D 
    IJsonResponse 
} from 'api-models';

import {
        apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost
        apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost
        apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost
        apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost
} from '../base/api'




@injectable()
export class StoreBookingboardingpassesService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Retrieves the specific journeys boarding passes using the M2D barcode type. This endpoint will only give a single  barcode back even if the journey contains multiple segments. Note that if the journey has only one segment the M2D  barcode will look just like the S2D barcode.
     * 
     */
    public store_apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest,  headers?: Headers): Promise<BoardingPassesM2D>
    {
        const response = await apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost(journeyKey,request,'body', headers);
        // TODO: Implement apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the specific journeys boarding passes for each segment using the S2D barcode type. This endpoint will  provide a single barcode for each segment.
     * 
     */
    public store_apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest,  headers?: Headers): Promise<BoardingPassesS2D>
    {
        const response = await apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost(journeyKey,request,'body', headers);
        // TODO: Implement apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the version of the boarding passes based on a specific journey.
     * 
     */
    public store_apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassFilterRequest,  headers?: Headers): Promise<BoardingPassesCollectionv2>
    {
        const response = await apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost(journeyKey,request,'body', headers);
        // TODO: Implement apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the version of the boarding passes based on a specific segment.
     * 
     */
    public store_apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost(segmentKey: string, request?: BoardingPassPassengerFilterRequest,  headers?: Headers): Promise<BoardingPassesCollectionv2>
    {
        const response = await apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost(segmentKey,request,'body', headers);
        // TODO: Implement apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
