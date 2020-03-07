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

import {
    BoardingPassFilterRequest, 
    BoardingPassPassengerFilterRequest, 
    BoardingPassesCollectionv2, 
    BoardingPassesM2D, 
    BoardingPassesS2D, 
    IJsonResponse, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class BookingboardingpassesService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Retrieves the specific journeys boarding passes using the M2D barcode type. This endpoint will only give a single  barcode back even if the journey contains multiple segments. Note that if the journey has only one segment the M2D  barcode will look just like the S2D barcode.
     * 
     * @param journeyKey The specific journey to get boarding passes for.
     * @param request The boarding pass passenger filter request.
     
     */
    public apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest, observe?: 'body', headers?: Headers): Observable<BoardingPassesM2D>;
    public apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<BoardingPassesM2D>>;
    public apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!journeyKey){
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV1BookingBoardingpassesM2dJourneyByJourneyKeyPost.');
        }


        const response: Observable<HttpResponse<BoardingPassesM2D>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/booking/boardingpasses/m2d/journey/${encodeURIComponent(String(journeyKey))}`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <BoardingPassesM2D>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves the specific journeys boarding passes for each segment using the S2D barcode type. This endpoint will  provide a single barcode for each segment.
     * 
     * @param journeyKey The specific journey to get boarding passes for.
     * @param request The boarding pass passenger filter request.
     
     */
    public apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest, observe?: 'body', headers?: Headers): Observable<BoardingPassesS2D>;
    public apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<BoardingPassesS2D>>;
    public apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassPassengerFilterRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!journeyKey){
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV1BookingBoardingpassesS2dJourneyByJourneyKeyPost.');
        }


        const response: Observable<HttpResponse<BoardingPassesS2D>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/booking/boardingpasses/s2d/journey/${encodeURIComponent(String(journeyKey))}`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <BoardingPassesS2D>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves the version of the boarding passes based on a specific journey.
     * 
     * @param journeyKey The journey to retrieve boarding passes for.
     * @param request The passenger/segment filter request.
     
     */
    public apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassFilterRequest, observe?: 'body', headers?: Headers): Observable<BoardingPassesCollectionv2>;
    public apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassFilterRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<BoardingPassesCollectionv2>>;
    public apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost(journeyKey: string, request?: BoardingPassFilterRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!journeyKey){
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV3BookingBoardingpassesJourneyByJourneyKeyPost.');
        }


        const response: Observable<HttpResponse<BoardingPassesCollectionv2>> = this.httpClient.post(`${this.basePath}/api/nsk/v3/booking/boardingpasses/journey/${encodeURIComponent(String(journeyKey))}`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <BoardingPassesCollectionv2>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves the version of the boarding passes based on a specific segment.
     * 
     * @param segmentKey The segment to retrieve boarding passes for.
     * @param request The passenger filter request
     
     */
    public apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost(segmentKey: string, request?: BoardingPassPassengerFilterRequest, observe?: 'body', headers?: Headers): Observable<BoardingPassesCollectionv2>;
    public apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost(segmentKey: string, request?: BoardingPassPassengerFilterRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<BoardingPassesCollectionv2>>;
    public apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost(segmentKey: string, request?: BoardingPassPassengerFilterRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!segmentKey){
            throw new Error('Required parameter segmentKey was null or undefined when calling apiNskV3BookingBoardingpassesSegmentBySegmentKeyPost.');
        }


        const response: Observable<HttpResponse<BoardingPassesCollectionv2>> = this.httpClient.post(`${this.basePath}/api/nsk/v3/booking/boardingpasses/segment/${encodeURIComponent(String(segmentKey))}`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <BoardingPassesCollectionv2>(httpResponse.response));
        }
        return response;
    }

}
