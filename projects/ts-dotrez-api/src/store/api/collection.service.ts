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
  IJsonResponse,
  Transaction
} from "api-models";

import { CollectionService } from "../../base/api/index";

@injectable()
export class StoreCollectionService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("CollectionService") protected baseService: CollectionService
  ) {}

  /**
   * Retrieves the credit transactions based on the account collection key and  the request data.
   *
   */
  public async store_apiNskV1CollectionByAccountCollectionKeyTransactionsGet(
    accountCollectionKey: string,
    startTime: Date,
    sortByNewest: boolean,
    endTime?: Date,
    pageSize?: number,
    pageIndex?: number,
    headers?: Headers
  ): Promise<Array<Transaction>> {
    const response = await this.baseService
      .apiNskV1CollectionByAccountCollectionKeyTransactionsGet(
        accountCollectionKey,
        startTime,
        sortByNewest,
        endTime,
        pageSize,
        pageIndex,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1CollectionByAccountCollectionKeyTransactionsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
