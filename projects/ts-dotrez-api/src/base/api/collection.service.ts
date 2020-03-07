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
  IJsonResponse,
  Transaction
} from "api-models";

import { COLLECTION_FORMATS } from "../variables";

@injectable()
export class CollectionService {
  private basePath: string = "https://localhost";

  constructor(
    @inject("IApiHttpClient") private httpClient: IHttpClient,
    @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Retrieves the credit transactions based on the account collection key and  the request data.
     * 
     * @param accountCollectionKey The account collection key.
     * @param startTime The starting date and time of the date range to search in.
     * @param sortByNewest Optional filter to sort results by newest.
     * @param endTime The end date and time of the date range to search in.
     * @param pageSize Used to specify the number of records to return.
     * @param pageIndex Represents the index of the requested paged item.
     
     */
  public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(
    accountCollectionKey: string,
    startTime: Date,
    sortByNewest: boolean,
    endTime?: Date,
    pageSize?: number,
    pageIndex?: number,
    observe?: "body",
    headers?: Headers
  ): Observable<Array<Transaction>>;
  public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(
    accountCollectionKey: string,
    startTime: Date,
    sortByNewest: boolean,
    endTime?: Date,
    pageSize?: number,
    pageIndex?: number,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<Array<Transaction>>>;
  public apiNskV1CollectionByAccountCollectionKeyTransactionsGet(
    accountCollectionKey: string,
    startTime: Date,
    sortByNewest: boolean,
    endTime?: Date,
    pageSize?: number,
    pageIndex?: number,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!accountCollectionKey) {
      throw new Error(
        "Required parameter accountCollectionKey was null or undefined when calling apiNskV1CollectionByAccountCollectionKeyTransactionsGet."
      );
    }

    if (!startTime) {
      throw new Error(
        "Required parameter startTime was null or undefined when calling apiNskV1CollectionByAccountCollectionKeyTransactionsGet."
      );
    }

    if (!sortByNewest) {
      throw new Error(
        "Required parameter sortByNewest was null or undefined when calling apiNskV1CollectionByAccountCollectionKeyTransactionsGet."
      );
    }

    let queryParameters: string[] = [];
    if (startTime !== undefined) {
      queryParameters.push(
        "startTime=" + encodeURIComponent(<any>startTime.toISOString())
      );
    }
    if (endTime !== undefined) {
      queryParameters.push(
        "endTime=" + encodeURIComponent(<any>endTime.toISOString())
      );
    }
    if (sortByNewest !== undefined) {
      queryParameters.push(
        "sortByNewest=" + encodeURIComponent(String(sortByNewest))
      );
    }
    if (pageSize !== undefined) {
      queryParameters.push("pageSize=" + encodeURIComponent(String(pageSize)));
    }
    if (pageIndex !== undefined) {
      queryParameters.push(
        "pageIndex=" + encodeURIComponent(String(pageIndex))
      );
    }

    const response: Observable<HttpResponse<
      Array<Transaction>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/collection/${encodeURIComponent(
        String(accountCollectionKey)
      )}/transactions?${queryParameters.join("&")}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <Array<Transaction>>httpResponse.response)
      );
    }
    return response;
  }
}
