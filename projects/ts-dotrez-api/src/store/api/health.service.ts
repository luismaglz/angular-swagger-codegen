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
    EnvironmentHealth, 
} from 'api-models';

import {
        apiV1HealthGet,
} from '../base/api'




@injectable()
export class StoreHealthService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * 
     * 
     */
    public store_apiV1HealthGet( headers?: Headers): Promise<EnvironmentHealth>
    {
        const response = await apiV1HealthGet('body', headers);
        // TODO: Implement apiV1HealthGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
