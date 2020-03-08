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
  BundleApplication,
  BundleApplicationDetails,
  BundleSetDetails,
  IJsonResponse
} from 'api-models';

import { BundlesService } from '../../base/api/index';

import { IHttpClient } from '../../base/IHttpClient';
import { IAPIConfiguration } from '../../base/IAPIConfiguration';
import { HttpResponse } from '../../base/HttpResponse';
import { Headers } from '../../base/Headers';

@injectable()
export class StoreBundlesService {
  constructor(
    @inject('Store') protected store: Store<any>,
    @inject('BundlesService') protected baseService: BundlesService
  ) {}

  /**
   * Retrieves a specific bundle application&#39;s details.
   * See api/nsk/v1/resources/bundles/applications to retrieve the collection of  bundle application resources.
   */
  public async store_apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet(
    bundleApplicationKey: string,
    headers?: Headers
  ): Promise<BundleApplicationDetails> {
    const response = await this.baseService
      .apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet(
        bundleApplicationKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the list of bundle applications associated with  the bundle rule.
   * See api/nsk/v1/resources/bundles/rules to retrieve the collection of  bundle rule resources.
   */
  public async store_apiNskV1BundlesRulesByBundleRuleCodeDetailsGet(
    bundleRuleCode: string,
    headers?: Headers
  ): Promise<Array<BundleApplication>> {
    const response = await this.baseService
      .apiNskV1BundlesRulesByBundleRuleCodeDetailsGet(
        bundleRuleCode,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BundlesRulesByBundleRuleCodeDetailsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the list of bundle codes associated with the bundle set.
   * See api/nsk/v1/resources/bundles/sets to retrieve the collection of  bundle set resources.
   */
  public async store_apiNskV1BundlesSetsByBundleSetCodeDetailsGet(
    bundleSetCode: string,
    headers?: Headers
  ): Promise<BundleSetDetails> {
    const response = await this.baseService
      .apiNskV1BundlesSetsByBundleSetCodeDetailsGet(
        bundleSetCode,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BundlesSetsByBundleSetCodeDetailsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
