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

import { IJsonResponse } from 'api-models';
import { SeatMapAvailability } from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class SeatmapsService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Gets the list of seat maps for all the journeys stateless.
     * 
     * @param journeyKey The Journey Key.
     * @param includePropertyLookup Flag indicating to include seat property lookup on the response.
     * @param cultureCode The desired culture code.
     
     */
    public apiNskV3SeatmapsByJourneyKeyGet(journeyKey: string, includePropertyLookup?: boolean, cultureCode?: string, observe?: 'body', headers?: Headers): Observable<Array<SeatMapAvailability>>;
    public apiNskV3SeatmapsByJourneyKeyGet(journeyKey: string, includePropertyLookup?: boolean, cultureCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<SeatMapAvailability>>>;
    public apiNskV3SeatmapsByJourneyKeyGet(journeyKey: string, includePropertyLookup?: boolean, cultureCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!journeyKey){
            throw new Error('Required parameter journeyKey was null or undefined when calling apiNskV3SeatmapsByJourneyKeyGet.');
        }

        let queryParameters: string[] = [];
        if (includePropertyLookup !== undefined) {
            queryParameters.push("includePropertyLookup="+encodeURIComponent(String(includePropertyLookup)));
        }
        if (cultureCode !== undefined) {
            queryParameters.push("cultureCode="+encodeURIComponent(String(cultureCode)));
        }


        const response: Observable<HttpResponse<Array<SeatMapAvailability>>> = this.httpClient.get(`${this.basePath}/api/nsk/v3/seatmaps/${encodeURIComponent(String(journeyKey))}?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<SeatMapAvailability>>(httpResponse.response));
        }
        return response;
    }

}
