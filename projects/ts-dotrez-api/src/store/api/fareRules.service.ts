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
    FareRule, 
    IJsonResponse, 
} from 'api-models';

import { FareRulesService } from '../base/api/index'




@injectable()
export class StoreFareRulesService {

    constructor(@inject("Store") protected store: Store<any>, @inject("FareRulesService") protected baseService:FareRulesService) {}

    /**
     * Gets the fare rules from the server based on a fare availability key.
     * 
     */
    public async store_apiNskV1FareRulesByFareAvailabilityKeyGet(fareAvailabilityKey: string,  headers?: Headers): Promise<FareRule>
    {
        const response = await this.baseService.apiNskV1FareRulesByFareAvailabilityKeyGet(fareAvailabilityKey,'body', headers).toPromise();
        // TODO: Implement apiNskV1FareRulesByFareAvailabilityKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
