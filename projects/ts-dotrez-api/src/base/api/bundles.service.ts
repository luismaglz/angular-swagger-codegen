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

import {
  BundleApplication,
  BundleApplicationDetails,
  BundleSetDetails,
  IJsonResponse
} from "api-models";

import IHttpClient from "../IHttpClient";
import { IAPIConfiguration } from "../IAPIConfiguration";
import HttpResponse from "../HttpResponse";

import { COLLECTION_FORMATS } from "../variables";

@injectable()
export class BundlesService {
  private basePath: string = "https://localhost";

  constructor(
    @inject("IApiHttpClient") private httpClient: IHttpClient,
    @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Retrieves a specific bundle application&#39;s details.
     * See api/nsk/v1/resources/bundles/applications to retrieve the collection of  bundle application resources.
     * @param bundleApplicationKey The bundle application key.
     
     */
  public apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet(
    bundleApplicationKey: string,
    observe?: "body",
    headers?: Headers
  ): Observable<BundleApplicationDetails>;
  public apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet(
    bundleApplicationKey: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<BundleApplicationDetails>>;
  public apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet(
    bundleApplicationKey: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!bundleApplicationKey) {
      throw new Error(
        "Required parameter bundleApplicationKey was null or undefined when calling apiNskV1BundlesApplicationsByBundleApplicationKeyDetailsGet."
      );
    }

    const response: Observable<HttpResponse<
      BundleApplicationDetails
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/bundles/applications/${encodeURIComponent(
        String(bundleApplicationKey)
      )}/details`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <BundleApplicationDetails>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the list of bundle applications associated with  the bundle rule.
     * See api/nsk/v1/resources/bundles/rules to retrieve the collection of  bundle rule resources.
     * @param bundleRuleCode The bundle rule code.
     
     */
  public apiNskV1BundlesRulesByBundleRuleCodeDetailsGet(
    bundleRuleCode: string,
    observe?: "body",
    headers?: Headers
  ): Observable<Array<BundleApplication>>;
  public apiNskV1BundlesRulesByBundleRuleCodeDetailsGet(
    bundleRuleCode: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<Array<BundleApplication>>>;
  public apiNskV1BundlesRulesByBundleRuleCodeDetailsGet(
    bundleRuleCode: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!bundleRuleCode) {
      throw new Error(
        "Required parameter bundleRuleCode was null or undefined when calling apiNskV1BundlesRulesByBundleRuleCodeDetailsGet."
      );
    }

    const response: Observable<HttpResponse<
      Array<BundleApplication>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/bundles/rules/${encodeURIComponent(
        String(bundleRuleCode)
      )}/details`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <Array<BundleApplication>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the list of bundle codes associated with the bundle set.
     * See api/nsk/v1/resources/bundles/sets to retrieve the collection of  bundle set resources.
     * @param bundleSetCode The bundle set code.
     
     */
  public apiNskV1BundlesSetsByBundleSetCodeDetailsGet(
    bundleSetCode: string,
    observe?: "body",
    headers?: Headers
  ): Observable<BundleSetDetails>;
  public apiNskV1BundlesSetsByBundleSetCodeDetailsGet(
    bundleSetCode: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<BundleSetDetails>>;
  public apiNskV1BundlesSetsByBundleSetCodeDetailsGet(
    bundleSetCode: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!bundleSetCode) {
      throw new Error(
        "Required parameter bundleSetCode was null or undefined when calling apiNskV1BundlesSetsByBundleSetCodeDetailsGet."
      );
    }

    const response: Observable<HttpResponse<
      BundleSetDetails
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/bundles/sets/${encodeURIComponent(
        String(bundleSetCode)
      )}/details`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <BundleSetDetails>httpResponse.response)
      );
    }
    return response;
  }
}
