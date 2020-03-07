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
  IAPIConfiguration,
  HttpResponse,
  Headers,
  IHttpClient,
  AncillaryPricingOptionsContext,
  IJsonResponse,
  InputParameters
} from "api-models";

import { COLLECTION_FORMATS } from "../variables";

@injectable()
export class ApoService {
  private basePath: string = "https://localhost";

  constructor(
    @inject("IApiHttpClient") private httpClient: IHttpClient,
    @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Deletes a single saved ancillary pricing option&#39;s data.
     * 
     * @param inputParameterKey The input parameter key to delete.
     
     */
  public apiNskV1ApoByInputParameterKeyDelete(
    inputParameterKey: string,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1ApoByInputParameterKeyDelete(
    inputParameterKey: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1ApoByInputParameterKeyDelete(
    inputParameterKey: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!inputParameterKey) {
      throw new Error(
        "Required parameter inputParameterKey was null or undefined when calling apiNskV1ApoByInputParameterKeyDelete."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/apo/${encodeURIComponent(
        String(inputParameterKey)
      )}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Updates an individual saved ancillary pricing option&#39;s data.
     * This will replace the current saved ancillary pricing option&#39;s value with the  given input parameter value, based on the input parameter key.
     * @param inputParameterKey The input parameter key to update.
     * @param inputParameterValue The input parameter value to update.
     
     */
  public apiNskV1ApoByInputParameterKeyPut(
    inputParameterKey: string,
    inputParameterValue?: string,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1ApoByInputParameterKeyPut(
    inputParameterKey: string,
    inputParameterValue?: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1ApoByInputParameterKeyPut(
    inputParameterKey: string,
    inputParameterValue?: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!inputParameterKey) {
      throw new Error(
        "Required parameter inputParameterKey was null or undefined when calling apiNskV1ApoByInputParameterKeyPut."
      );
    }

    let queryParameters: string[] = [];
    if (inputParameterValue !== undefined) {
      queryParameters.push(
        "inputParameterValue=" + encodeURIComponent(String(inputParameterValue))
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/apo/${encodeURIComponent(
        String(inputParameterKey)
      )}?${queryParameters.join("&")}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Deletes all of the saved ancillary pricing options data.
     * 
     
     */
  public apiNskV1ApoDelete(
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1ApoDelete(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1ApoDelete(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(`${this.basePath}/api/nsk/v1/apo`, headers);
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the current saved ancillary pricing options data.
     * 
     
     */
  public apiNskV1ApoGet(
    observe?: "body",
    headers?: Headers
  ): Observable<AncillaryPricingOptionsContext>;
  public apiNskV1ApoGet(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<AncillaryPricingOptionsContext>>;
  public apiNskV1ApoGet(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      AncillaryPricingOptionsContext
    >> = this.httpClient.get(`${this.basePath}/api/nsk/v1/apo`, headers);
    if (observe == "body") {
      return response.pipe(
        map(
          httpResponse => <AncillaryPricingOptionsContext>httpResponse.response
        )
      );
    }
    return response;
  }

  /**
     * Adds new entries to the saved ancillary pricing options data.
     * 
     * @param inputParameters The input parameters to add.
     
     */
  public apiNskV1ApoPost(
    inputParameters?: InputParameters,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1ApoPost(
    inputParameters?: InputParameters,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1ApoPost(
    inputParameters?: InputParameters,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/apo`,
      inputParameters,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }
}
