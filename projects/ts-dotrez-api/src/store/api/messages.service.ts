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
import { IJsonResponse, MessageBase } from "api-models";

import {
  HttpResponse,
  Headers,
  IHttpClient,
  MessagesService
} from "../../base/api/index";

@injectable()
export class StoreMessagesService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("MessagesService") protected baseService: MessagesService
  ) {}

  /**
   * Deletes a message item.
   *
   */
  public async store_apiNskV1MessagesByMessageKeyDelete(
    messageKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1MessagesByMessageKeyDelete(messageKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1MessagesByMessageKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves a specific message item.
   *
   */
  public async store_apiNskV1MessagesByMessageKeyGet(
    messageKey: string,
    headers?: Headers
  ): Promise<MessageBase> {
    const response = await this.baseService
      .apiNskV1MessagesByMessageKeyGet(messageKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1MessagesByMessageKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves a collection of messages based on search criteria.
   *
   */
  public async store_apiNskV1MessagesGet(
    searchType: "StartsWith" | "EndsWith" | "Contains" | "ExactMatch",
    messageTypeCode?: string,
    searchStartDate?: Date,
    searchEndDate?: Date,
    pageSize?: number,
    lastIndex?: number,
    searchValue?: string,
    headers?: Headers
  ): Promise<Array<MessageBase>> {
    const response = await this.baseService
      .apiNskV1MessagesGet(
        searchType,
        messageTypeCode,
        searchStartDate,
        searchEndDate,
        pageSize,
        lastIndex,
        searchValue,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1MessagesGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds a new message item.
   *
   */
  public async store_apiNskV1MessagesPost(
    request?: MessageBase,
    headers?: Headers
  ): Promise<MessageBase> {
    const response = await this.baseService
      .apiNskV1MessagesPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1MessagesPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
