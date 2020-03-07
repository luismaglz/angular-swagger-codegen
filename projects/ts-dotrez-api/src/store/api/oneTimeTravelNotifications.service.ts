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
    IJsonResponse, 
    OneTimeNotificationCreateRequest, 
    OneTimeTravelNotification, 
} from 'api-models';

import {
        apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete,
        apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet,
        apiNskV1OneTimeTravelNotificationsPost,
} from '../base/api'




@injectable()
export class StoreOneTimeTravelNotificationsService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Deletes a one time travel notification.
     * 
     */
    public store_apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete(oneTimeTravelNotificationKey: string,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete(oneTimeTravelNotificationKey,'body', headers);
        // TODO: Implement apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets a one time travel notification.
     * 
     */
    public store_apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet(oneTimeTravelNotificationKey: string,  headers?: Headers): Promise<OneTimeTravelNotification>
    {
        const response = await apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet(oneTimeTravelNotificationKey,'body', headers);
        // TODO: Implement apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates a one time travel notification.
     * To get or delete a one time notification, you will need to store the key that is on the location header.
     */
    public store_apiNskV1OneTimeTravelNotificationsPost(request?: OneTimeNotificationCreateRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1OneTimeTravelNotificationsPost(request,'body', headers);
        // TODO: Implement apiNskV1OneTimeTravelNotificationsPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
