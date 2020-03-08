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

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject, injectable } from 'inversify';
import { Store } from 'redux';
import {
  IJsonResponse,
  PassengerSsr,
  PassengerSsrKey,
  ResellSsrRequest,
  SingleSsrByKeyRequestv2,
  SsrAvailability,
  SsrAvailabilityRequestv2,
  SsrByKeysRequestv2,
  SsrsRequest
} from 'api-models';

import { BookingssrsService } from '../../base/api/index';

import { IHttpClient } from '../../base/IHttpClient';
import { IAPIConfiguration } from '../../base/IAPIConfiguration';
import { HttpResponse } from '../../base/HttpResponse';
import { Headers } from '../../base/Headers';

@injectable()
export class StoreBookingssrsService {
  constructor(
    @inject('Store') protected store: Store<any>,
    @inject('BookingssrsService') protected baseService: BookingssrsService
  ) {}

  /**
   * Deletes by the SSR passenger key provided by metadata.
   * Requires a booking in state.
   */
  public async store_apiNskV1BookingSsrsBySsrKeyDelete(
    ssrKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingSsrsBySsrKeyDelete(ssrKey, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsBySsrKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the current SSR by key.
   * Requires a booking in state.
   */
  public async store_apiNskV1BookingSsrsBySsrKeyGet(
    ssrKey: string,
    headers?: Headers
  ): Promise<PassengerSsr> {
    const response = await this.baseService
      .apiNskV1BookingSsrsBySsrKeyGet(ssrKey, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsBySsrKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Modify the ssr note.
   * Requires a booking in state.
   */
  public async store_apiNskV1BookingSsrsBySsrKeyPut(
    ssrKey: string,
    note?: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingSsrsBySsrKeyPut(ssrKey, note, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsBySsrKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the current SSRs added to the booking in state.
   * Requires a booking in state.
   */
  public async store_apiNskV1BookingSsrsGet(
    headers?: Headers
  ): Promise<Array<PassengerSsr>> {
    const response = await this.baseService
      .apiNskV1BookingSsrsGet('body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes the SSR by the request criteria.
   * Requires a booking in state.   This is an alternate way of deleting an SSR. Deleting by ID is recommended (see /api/booking/ssrs).  This method is useful if the UI is not querying availability and not using dynamic SSR information.
   */
  public async store_apiNskV1BookingSsrsManualDelete(
    request?: PassengerSsrKey,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingSsrsManualDelete(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsManualDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds SSRs to the booking in state.
   * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.  This is an alternate way of creating an SSR. Creating by ID is recommended (see /api/booking/ssrs).  This method is useful if the UI is not querying availability and not using dynamic SSR information.
   */
  public async store_apiNskV1BookingSsrsManualPost(
    request?: SsrsRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingSsrsManualPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsManualPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Resells any cancelled ssrs to the provided journey on the booking.
   *
   */
  public async store_apiNskV1BookingSsrsResellPost(
    request?: ResellSsrRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingSsrsResellPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingSsrsResellPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Get the ssr&#39;s available to add to the booking in state.
   * Requires a booking in state.  By default, all ssr availability for the booking is returned.
   */
  public async store_apiNskV2BookingSsrsAvailabilityPost(
    request?: SsrAvailabilityRequestv2,
    headers?: Headers
  ): Promise<SsrAvailability> {
    const response = await this.baseService
      .apiNskV2BookingSsrsAvailabilityPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingSsrsAvailabilityPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Add an SSR to the booking in state.
   * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.
   */
  public async store_apiNskV2BookingSsrsBySsrKeyPost(
    ssrKey: string,
    request?: SingleSsrByKeyRequestv2,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingSsrsBySsrKeyPost(ssrKey, request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingSsrsBySsrKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds SSRs to the booking in state.
   * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.
   */
  public async store_apiNskV2BookingSsrsPost(
    request?: SsrByKeysRequestv2,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingSsrsPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingSsrsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
