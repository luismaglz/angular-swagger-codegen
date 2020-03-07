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

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { inject, injectable } from "inversify";
import { Store } from 'redux';
import {
    HttpResponse,
    Headers,
    IHttpClient,
    IJsonResponse, 
    SeatMapAvailability, 
} from 'api-models';

import {
        apiNskV3SeatmapsByJourneyKeyGet,
} from '../base/api'




@injectable()
export class StoreSeatmapsService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Gets the list of seat maps for all the journeys stateless.
     * 
     */
    public async store_apiNskV3SeatmapsByJourneyKeyGet(journeyKey: string, includePropertyLookup?: boolean, cultureCode?: string,  headers?: Headers): Promise<Array<SeatMapAvailability>>
    {
        const response = await apiNskV3SeatmapsByJourneyKeyGet(journeyKey,includePropertyLookup,cultureCode,'body', headers).toPromise();
        // TODO: Implement apiNskV3SeatmapsByJourneyKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
