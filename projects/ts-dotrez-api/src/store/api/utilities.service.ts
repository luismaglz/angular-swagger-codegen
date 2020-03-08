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
} from 'api-models';

import { UtilitiesService } from '../base/api/index'




@injectable()
export class StoreUtilitiesService {

    constructor(@inject("Store") protected store: Store<any>, @inject("UtilitiesService") protected baseService:UtilitiesService) {}

    /**
     * Retrieves the station local time.
     * 
     */
    public async store_apiNskV1UtilitiesStationLocalTimeByStationCodeGet(stationCode: string,  headers?: Headers): Promise<Date>
    {
        const response = await this.baseService.apiNskV1UtilitiesStationLocalTimeByStationCodeGet(stationCode,'body', headers).toPromise();
        // TODO: Implement apiNskV1UtilitiesStationLocalTimeByStationCodeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
