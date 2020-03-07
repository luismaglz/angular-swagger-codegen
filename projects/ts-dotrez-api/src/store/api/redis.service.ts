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

import {
        apiV1RedisByNameDelete,
        apiV1RedisDelete,
        apiV1RedisGet,
} from '../base/api/index'




@injectable()
export class StoreRedisService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * 
     * 
     */
    public async store_apiV1RedisByNameDelete(name: string,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiV1RedisByNameDelete(name,'body', headers).toPromise();
        // TODO: Implement apiV1RedisByNameDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * 
     * 
     */
    public async store_apiV1RedisDelete( headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiV1RedisDelete('body', headers).toPromise();
        // TODO: Implement apiV1RedisDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * 
     * 
     */
    public async store_apiV1RedisGet( headers?: Headers): Promise<Array<string>>
    {
        const response = await apiV1RedisGet('body', headers).toPromise();
        // TODO: Implement apiV1RedisGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
