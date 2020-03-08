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

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject, injectable } from 'inversify';
import { Store } from 'redux';
import {
  ActivityProduct,
  ActivitySimpleRequest,
  AddOn,
  CarProduct,
  HotelProduct,
  HotelRequest,
  ProductRequest,
  QuoteCarRequest,
  QuoteHotelRequest,
  QuoteTokenRequest,
  QuotedProduct,
  SellCarRequest,
  SellHotelRequest,
  SellTokenRequest
} from 'api-models';

import { AddOnsService } from '../../base/api/index';

import { IHttpClient } from '../../base/IHttpClient';
import { IAPIConfiguration } from '../../base/IAPIConfiguration';
import { HttpResponse } from '../../base/HttpResponse';
import { Headers } from '../../base/Headers';

@injectable()
export class StoreAddOnsService {
  constructor(
    @inject('Store') protected store: Store<any>,
    @inject('AddOnsService') protected baseService: AddOnsService
  ) {}

  /**
   * Gets availability.
   * This is functionally a GET but POST is used to reduce URL length overhead.
   */
  public async store_apiNskV1AddOnsActivitiesAvailablePost(
    request?: ActivitySimpleRequest,
    headers?: Headers
  ): Promise<Array<ActivityProduct>> {
    const response = await this.baseService
      .apiNskV1AddOnsActivitiesAvailablePost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsActivitiesAvailablePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Sell request for an activity.
   *
   */
  public async store_apiNskV1AddOnsActivitiesPost(
    request?: SellTokenRequest,
    headers?: Headers
  ): Promise<AddOn> {
    const response = await this.baseService
      .apiNskV1AddOnsActivitiesPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsActivitiesPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Quote an activity.
   *
   */
  public async store_apiNskV1AddOnsActivitiesQuotePost(
    request?: QuoteTokenRequest,
    headers?: Headers
  ): Promise<QuotedProduct> {
    const response = await this.baseService
      .apiNskV1AddOnsActivitiesQuotePost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsActivitiesQuotePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets availability.
   * This is functionally a GET but POST is used to reduce URL length overhead.
   */
  public async store_apiNskV1AddOnsCarsAvailablePost(
    request?: ProductRequest,
    headers?: Headers
  ): Promise<Array<CarProduct>> {
    const response = await this.baseService
      .apiNskV1AddOnsCarsAvailablePost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsCarsAvailablePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Sell request for a car.
   *
   */
  public async store_apiNskV1AddOnsCarsPost(
    request?: SellCarRequest,
    headers?: Headers
  ): Promise<AddOn> {
    const response = await this.baseService
      .apiNskV1AddOnsCarsPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsCarsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Quote car.
   *
   */
  public async store_apiNskV1AddOnsCarsQuotePost(
    request?: QuoteCarRequest,
    headers?: Headers
  ): Promise<QuotedProduct> {
    const response = await this.baseService
      .apiNskV1AddOnsCarsQuotePost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsCarsQuotePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets availability.
   * This is functionally a GET but POST is used to reduce URL length overhead.
   */
  public async store_apiNskV1AddOnsHotelsAvailablePost(
    request?: HotelRequest,
    headers?: Headers
  ): Promise<Array<HotelProduct>> {
    const response = await this.baseService
      .apiNskV1AddOnsHotelsAvailablePost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsHotelsAvailablePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Sell request for a hotel.
   *
   */
  public async store_apiNskV1AddOnsHotelsPost(
    request?: SellHotelRequest,
    headers?: Headers
  ): Promise<AddOn> {
    const response = await this.baseService
      .apiNskV1AddOnsHotelsPost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsHotelsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Quote hotel.
   *
   */
  public async store_apiNskV1AddOnsHotelsQuotePost(
    request?: QuoteHotelRequest,
    headers?: Headers
  ): Promise<QuotedProduct> {
    const response = await this.baseService
      .apiNskV1AddOnsHotelsQuotePost(request, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1AddOnsHotelsQuotePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
