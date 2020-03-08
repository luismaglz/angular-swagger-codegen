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
  Manifest,
  ManifestRequestBase,
  PassengerDetails,
  PassengerSeatAssignment,
  TripInformationResponse
} from 'api-models';

import { ManifestService } from '../../base/api/index';

import { IHttpClient } from '../../base/IHttpClient';
import { IAPIConfiguration } from '../../base/IAPIConfiguration';
import { HttpResponse } from '../../base/HttpResponse';
import { Headers } from '../../base/Headers';

@injectable()
export class StoreManifestService {
  constructor(
    @inject('Store') protected store: Store<any>,
    @inject('ManifestService') protected baseService: ManifestService
  ) {}

  /**
   * Gets the passenger details for the specified leg.
   *
   */
  public async store_apiNskV1ManifestByLegKeyPassengerDetailsGet(
    legKey: string,
    headers?: Headers
  ): Promise<PassengerDetails> {
    const response = await this.baseService
      .apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1ManifestByLegKeyPassengerDetailsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a list of seat assignment reports for the specified leg.
   *
   */
  public async store_apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(
    legKey: string,
    headers?: Headers
  ): Promise<Array<PassengerSeatAssignment>> {
    const response = await this.baseService
      .apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(
        legKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the manifest for the specified leg.
   *
   */
  public async store_apiNskV1ManifestByLegKeyPost(
    legKey: string,
    request?: ManifestRequestBase,
    headers?: Headers
  ): Promise<Manifest> {
    const response = await this.baseService
      .apiNskV1ManifestByLegKeyPost(legKey, request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1ManifestByLegKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the manifest trip information response list for the specified   manifest trip information search request.
   *
   */
  public async store_apiNskV1ManifestGet(
    beginDate: Date,
    origin?: string,
    destination?: string,
    identifier?: string,
    carrierCode?: string,
    flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect',
    headers?: Headers
  ): Promise<TripInformationResponse> {
    const response = await this.baseService
      .apiNskV1ManifestGet(
        beginDate,
        origin,
        destination,
        identifier,
        carrierCode,
        flightType,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1ManifestGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
