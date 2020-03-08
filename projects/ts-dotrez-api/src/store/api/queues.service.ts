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
  BookingQueueItemBase,
  DeleteBookingQueueItemBaseRequest,
  DequeueTravelSummary,
  IJsonResponse,
  MoveBookingQueueItemBase,
  QueueResults,
  TravelQueueItemRequest
} from "api-models";

import { QueuesService } from "../../base/api/index";
import { HttpResponse, Headers, IHttpClient } from "../../base/index";

@injectable()
export class StoreQueuesService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("QueuesService") protected baseService: QueuesService
  ) {}

  /**
   * Removes booking queue items from the specified queue.
   *
   */
  public async store_apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete(
    bookingQueueCode: string,
    bookingQueueItemKey: string,
    request?: DeleteBookingQueueItemBaseRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete(
        bookingQueueCode,
        bookingQueueItemKey,
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Moves to a different queue.
   * The booking queue proxy and service model do not currently support getting the queue code  the item was moved to. Therefore, it is not possible at this time to provide a link to  access the item on a different queue or a configurable response containing the queue object.  Additionally, the proxy and service model do not allow for getting a particular item within a  queue.
   */
  public async store_apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut(
    bookingQueueCode: string,
    bookingQueueItemKey: string,
    request?: MoveBookingQueueItemBase,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut(
        bookingQueueCode,
        bookingQueueItemKey,
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1QueuesBookingsByBookingQueueCodeItemsByBookingQueueItemKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Pops the next item in the travel queue.
   * This will delete the item from the queue.  This action requires a session token.
   */
  public async store_apiNskV1QueuesTravelByTravelQueueCodeNextGet(
    travelQueueCode: string,
    subQueueCode?: string,
    headers?: Headers
  ): Promise<DequeueTravelSummary> {
    const response = await this.baseService
      .apiNskV1QueuesTravelByTravelQueueCodeNextGet(
        travelQueueCode,
        subQueueCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1QueuesTravelByTravelQueueCodeNextGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new travel queue entry.
   * This action requires a session token.
   */
  public async store_apiNskV1QueuesTravelPost(
    item?: TravelQueueItemRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1QueuesTravelPost(item, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1QueuesTravelPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the next item in the booking queue.
   * This will not delete the item from the queue.  This action requires a session token.
   */
  public async store_apiNskV2QueuesBookingsByBookingQueueCodeNextGet(
    bookingQueueCode: string,
    subQueueCode?: string,
    startDate?: Date,
    endDate?: Date,
    password?: string,
    headers?: Headers
  ): Promise<Array<BookingQueueItemBase>> {
    const response = await this.baseService
      .apiNskV2QueuesBookingsByBookingQueueCodeNextGet(
        bookingQueueCode,
        subQueueCode,
        startDate,
        endDate,
        password,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2QueuesBookingsByBookingQueueCodeNextGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the list of queues available.
   * This action requires a session token.
   */
  public async store_apiNskV2QueuesBookingsGet(
    queueName?: string,
    queueCode?: string,
    queueCategoryCode?: string,
    pageSize?: number,
    lastPageIndex?: number,
    headers?: Headers
  ): Promise<QueueResults> {
    const response = await this.baseService
      .apiNskV2QueuesBookingsGet(
        queueName,
        queueCode,
        queueCategoryCode,
        pageSize,
        lastPageIndex,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2QueuesBookingsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
