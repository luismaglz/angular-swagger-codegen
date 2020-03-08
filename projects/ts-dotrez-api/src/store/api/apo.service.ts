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
import { Store } from "redux";
import {
  HttpResponse,
  Headers,
  IHttpClient,
  AncillaryPricingOptionsContext,
  IJsonResponse,
  InputParameters
} from "api-models";

import { ApoService } from "../../base/api/index";

@injectable()
export class StoreApoService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("ApoService") protected baseService: ApoService
  ) {}

  /**
   * Deletes a single saved ancillary pricing option&#39;s data.
   *
   */
  public async store_apiNskV1ApoByInputParameterKeyDelete(
    inputParameterKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1ApoByInputParameterKeyDelete(inputParameterKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1ApoByInputParameterKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates an individual saved ancillary pricing option&#39;s data.
   * This will replace the current saved ancillary pricing option&#39;s value with the  given input parameter value, based on the input parameter key.
   */
  public async store_apiNskV1ApoByInputParameterKeyPut(
    inputParameterKey: string,
    inputParameterValue?: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1ApoByInputParameterKeyPut(
        inputParameterKey,
        inputParameterValue,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1ApoByInputParameterKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes all of the saved ancillary pricing options data.
   *
   */
  public async store_apiNskV1ApoDelete(
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1ApoDelete("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1ApoDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the current saved ancillary pricing options data.
   *
   */
  public async store_apiNskV1ApoGet(
    headers?: Headers
  ): Promise<AncillaryPricingOptionsContext> {
    const response = await this.baseService
      .apiNskV1ApoGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1ApoGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds new entries to the saved ancillary pricing options data.
   *
   */
  public async store_apiNskV1ApoPost(
    inputParameters?: InputParameters,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1ApoPost(inputParameters, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1ApoPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
