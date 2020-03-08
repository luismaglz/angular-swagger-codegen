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
  AddSeatRequest,
  DeltaMapperInfant,
  DeltaMapperPassengerAddressEditRequest,
  DeltaMapperPassengerBase,
  DeltaMapperTravelDocumentEditRequest,
  DeltaMapperTravelNotificationEditRequest,
  IJsonResponse,
  Infant,
  InlineResponse2005,
  InlineResponse2006,
  InlineResponse2007,
  NotificationEvent,
  NotificationEventCreateRequest,
  NotificationTimedEvent,
  NotificationTimedEventCreateRequest,
  NotificationTimedEventEditRequest,
  Passenger,
  PassengerAddress,
  PassengerAddressCreateRequest,
  PassengerAddressEditRequest,
  PassengerBag,
  PassengerBase,
  PassengerInfant,
  PassengerInfantCreateRequest,
  PassengerKeyResponse,
  PassengerPriceBreakdown,
  PassengerSeat,
  PassengerTravelDocument,
  PassengerTypeCodeEditRequest,
  TravelDocumentCreateRequest,
  TravelDocumentEditRequest,
  TravelNotification,
  TravelNotificationCreateRequest,
  TravelNotificationEditRequest
} from 'api-models';

import { BookingpassengersService } from '../../base/api/index';

import { IHttpClient } from '../../base/IHttpClient';
import { IAPIConfiguration } from '../../base/IAPIConfiguration';
import { HttpResponse } from '../../base/HttpResponse';
import { Headers } from '../../base/Headers';

@injectable()
export class StoreBookingpassengersService {
  constructor(
    @inject('Store') protected store: Store<any>,
    @inject('BookingpassengersService')
    protected baseService: BookingpassengersService
  ) {}

  /**
   * Gets all the passenger price breakdown by passenger type.
   *
   */
  public async store_apiNskV1BookingPassengersBreakdownByTypeGet(
    headers?: Headers
  ): Promise<InlineResponse2007> {
    const response = await this.baseService
      .apiNskV1BookingPassengersBreakdownByTypeGet('body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersBreakdownByTypeGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets all the passenger price breakdowns.
   *
   */
  public async store_apiNskV1BookingPassengersBreakdownGet(
    headers?: Headers
  ): Promise<InlineResponse2006> {
    const response = await this.baseService
      .apiNskV1BookingPassengersBreakdownGet('body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersBreakdownGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a passenger travel notification for a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyDelete(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyDelete(
        passengerAlternateKey,
        travelNotificationKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a notification event from a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsByEventTypeDelete(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    eventType: 'DepartureDelay' | 'ArrivalDelay' | 'ScheduleChange' | 'CheckIn',
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsByEventTypeDelete(
        passengerAlternateKey,
        travelNotificationKey,
        eventType,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsByEventTypeDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Get a notification event for a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsByEventTypeGet(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    eventType: 'DepartureDelay' | 'ArrivalDelay' | 'ScheduleChange' | 'CheckIn',
    headers?: Headers
  ): Promise<NotificationEvent> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsByEventTypeGet(
        passengerAlternateKey,
        travelNotificationKey,
        eventType,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsByEventTypeGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets notification events for a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsGet(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    headers?: Headers
  ): Promise<Array<NotificationEvent>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsGet(
        passengerAlternateKey,
        travelNotificationKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds a notification event to a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsPost(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    request?: NotificationEventCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsPost(
        passengerAlternateKey,
        travelNotificationKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyEventsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a passenger travel notification for a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyGet(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    headers?: Headers
  ): Promise<TravelNotification> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyGet(
        passengerAlternateKey,
        travelNotificationKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a passenger travel notification for a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyPatch(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    request?: DeltaMapperTravelNotificationEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyPatch(
        passengerAlternateKey,
        travelNotificationKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a passenger travel notification for a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyPut(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    request?: TravelNotificationEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyPut(
        passengerAlternateKey,
        travelNotificationKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a notification timed event from a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypeDelete(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    timedEventType: 'Departure' | 'Arrival',
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypeDelete(
        passengerAlternateKey,
        travelNotificationKey,
        timedEventType,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypeDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Get a notification timed event for a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypeGet(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    timedEventType: 'Departure' | 'Arrival',
    headers?: Headers
  ): Promise<NotificationTimedEvent> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypeGet(
        passengerAlternateKey,
        travelNotificationKey,
        timedEventType,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypeGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a notification timed event for a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypePut(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    timedEventType: 'Departure' | 'Arrival',
    request?: NotificationTimedEventEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypePut(
        passengerAlternateKey,
        travelNotificationKey,
        timedEventType,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsByTimedEventTypePut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets notification timed events for a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsGet(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    headers?: Headers
  ): Promise<Array<NotificationTimedEvent>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsGet(
        passengerAlternateKey,
        travelNotificationKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds a notification timed event to a specific passenger travel notification on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsPost(
    passengerAlternateKey: string,
    travelNotificationKey: string,
    request?: NotificationTimedEventCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsPost(
        passengerAlternateKey,
        travelNotificationKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsByTravelNotificationKeyTimedEventsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets passenger travel notifications for a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsGet(
    passengerAlternateKey: string,
    headers?: Headers
  ): Promise<Array<TravelNotification>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsGet(
        passengerAlternateKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a passenger travel notification for a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsPost(
    passengerAlternateKey: string,
    request?: TravelNotificationCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsPost(
        passengerAlternateKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerAlternateKeyTravelNotificationsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific address from a specific passenger.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyAddressesByAddressKeyGet(
    passengerKey: string,
    addressKey: string,
    headers?: Headers
  ): Promise<PassengerAddress> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyAddressesByAddressKeyGet(
        passengerKey,
        addressKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyAddressesByAddressKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the collection of addresses from a specific passenger.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyAddressesGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<Array<PassengerAddress>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyAddressesGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyAddressesGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieve a single bag from a specific passenger.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyBaggageByBaggageKeyGet(
    passengerKey: string,
    baggageKey: string,
    headers?: Headers
  ): Promise<PassengerBag> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyBaggageByBaggageKeyGet(
        passengerKey,
        baggageKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyBaggageByBaggageKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets all the baggage for a specified passenger.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyBaggageGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<Array<PassengerBag>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyBaggageGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyBaggageGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger price breakdown by passenger key.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyBreakdownGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<PassengerPriceBreakdown> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyBreakdownGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyBreakdownGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger&#39;s specific travel document.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyGet(
    passengerKey: string,
    travelDocumentKey: string,
    headers?: Headers
  ): Promise<PassengerTravelDocument> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyGet(
        passengerKey,
        travelDocumentKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger&#39;s collection of travel documents.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyDocumentsGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<Array<PassengerTravelDocument>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyDocumentsGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyDocumentsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger on the booking.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<Passenger> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyGet(passengerKey, 'body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger infant&#39;s specific travel document.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyGet(
    passengerKey: string,
    travelDocumentKey: string,
    headers?: Headers
  ): Promise<PassengerTravelDocument> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyGet(
        passengerKey,
        travelDocumentKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger infant&#39;s collection of travel documents.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyInfantDocumentsGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<Array<PassengerTravelDocument>> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyInfantDocumentsGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyInfantDocumentsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific passenger&#39;s infant.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyInfantGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<PassengerInfant> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyInfantGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyInfantGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a specific passenger to the given passenger type.
   * NOTE: The date of birth doesn&#39;t need to be updated if the passenger&#39;s current date of birth still falls within the  new passenger type&#39;s age restriction.  This could also cause a repricing on the booking.  In addition, changing the passenger type will change the passenger key as well.
   */
  public async store_apiNskV1BookingPassengersByPassengerKeyPassengerTypeCodePatch(
    passengerKey: string,
    request?: PassengerTypeCodeEditRequest,
    headers?: Headers
  ): Promise<PassengerKeyResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeyPassengerTypeCodePatch(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeyPassengerTypeCodePatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a seat assignment from a specific passenger on the booking in state.
   *
   */
  public async store_apiNskV1BookingPassengersByPassengerKeySeatsByUnitKeyDelete(
    passengerKey: string,
    unitKey: string,
    waiveFee?: boolean,
    ignoreSeatSsrs?: boolean,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPassengersByPassengerKeySeatsByUnitKeyDelete(
        passengerKey,
        unitKey,
        waiveFee,
        ignoreSeatSsrs,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersByPassengerKeySeatsByUnitKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the collection of passengers on the booking.
   *
   */
  public async store_apiNskV1BookingPassengersGet(
    headers?: Headers
  ): Promise<InlineResponse2005> {
    const response = await this.baseService
      .apiNskV1BookingPassengersGet('body', headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPassengersGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a specific address on a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyDelete(
    passengerKey: string,
    addressKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyDelete(
        passengerKey,
        addressKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a specific address on a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyPatch(
    passengerKey: string,
    addressKey: string,
    request?: DeltaMapperPassengerAddressEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyPatch(
        passengerKey,
        addressKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a specific address on a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyPut(
    passengerKey: string,
    addressKey: string,
    request?: PassengerAddressEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyPut(
        passengerKey,
        addressKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyAddressesByAddressKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new address for a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyAddressesPost(
    passengerKey: string,
    request?: PassengerAddressCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyAddressesPost(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyAddressesPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a specific passenger&#39;s specific travel document.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyDelete(
    passengerKey: string,
    travelDocumentKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyDelete(
        passengerKey,
        travelDocumentKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a specific passenger&#39;s travel document.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyPatch(
    passengerKey: string,
    travelDocumentKey: string,
    request?: DeltaMapperTravelDocumentEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyPatch(
        passengerKey,
        travelDocumentKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a specific passenger&#39;s travel document.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyPut(
    passengerKey: string,
    travelDocumentKey: string,
    request?: TravelDocumentEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyPut(
        passengerKey,
        travelDocumentKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyDocumentsByTravelDocumentKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Create a new travel document for a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyDocumentsPost(
    passengerKey: string,
    request?: TravelDocumentCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyDocumentsPost(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyDocumentsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a infant from a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyInfantDelete(
    passengerKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyInfantDelete(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyInfantDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a specific passenger infant specific travel document.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyDelete(
    passengerKey: string,
    travelDocumentKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyDelete(
        passengerKey,
        travelDocumentKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a specific passenger infant travel document.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyPatch(
    passengerKey: string,
    travelDocumentKey: string,
    request?: DeltaMapperTravelDocumentEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyPatch(
        passengerKey,
        travelDocumentKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a specific passenger infant travel document.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyPut(
    passengerKey: string,
    travelDocumentKey: string,
    request?: TravelDocumentEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyPut(
        passengerKey,
        travelDocumentKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyInfantDocumentsByTravelDocumentKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Create a new travel document for a specific passenger infant.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyInfantDocumentsPost(
    passengerKey: string,
    request?: TravelDocumentCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyInfantDocumentsPost(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyInfantDocumentsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a infant on a specific passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeyInfantPatch(
    passengerKey: string,
    request?: DeltaMapperInfant,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeyInfantPatch(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeyInfantPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets passenger seat by key.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeySeatsByUnitKeyGet(
    passengerKey: string,
    unitKey: string,
    headers?: Headers
  ): Promise<PassengerSeat> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeySeatsByUnitKeyGet(
        passengerKey,
        unitKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeySeatsByUnitKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Adds a seat assignment to a specific passenger on the booking in state.
   * This endpoint actively checks whether the passenger has a seat. If the passenger does  have a seat, it will delete the current seat the passenger occupies and add the requested  one. This may result in slightly slower response times.
   */
  public async store_apiNskV2BookingPassengersByPassengerKeySeatsByUnitKeyPost(
    passengerKey: string,
    unitKey: string,
    request?: AddSeatRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeySeatsByUnitKeyPost(
        passengerKey,
        unitKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeySeatsByUnitKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets all seats associated with a passenger.
   *
   */
  public async store_apiNskV2BookingPassengersByPassengerKeySeatsGet(
    passengerKey: string,
    headers?: Headers
  ): Promise<Array<PassengerSeat>> {
    const response = await this.baseService
      .apiNskV2BookingPassengersByPassengerKeySeatsGet(
        passengerKey,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPassengersByPassengerKeySeatsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates an infant on a specific passenger.
   *
   */
  public async store_apiNskV3BookingPassengersByPassengerKeyInfantPost(
    passengerKey: string,
    request?: PassengerInfantCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPassengersByPassengerKeyInfantPost(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPassengersByPassengerKeyInfantPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates an infant on a specific passenger.
   *
   */
  public async store_apiNskV3BookingPassengersByPassengerKeyInfantPut(
    passengerKey: string,
    request?: Infant,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPassengersByPassengerKeyInfantPut(
        passengerKey,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPassengersByPassengerKeyInfantPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a specific passenger on the booking.
   *
   */
  public async store_apiNskV3BookingPassengersByPassengerKeyPatch(
    passengerKey: string,
    waiveNameChangeFees?: boolean,
    request?: DeltaMapperPassengerBase,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPassengersByPassengerKeyPatch(
        passengerKey,
        waiveNameChangeFees,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPassengersByPassengerKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a specific passenger on the booking.
   *
   */
  public async store_apiNskV3BookingPassengersByPassengerKeyPut(
    passengerKey: string,
    waiveNameChangeFees?: boolean,
    request?: PassengerBase,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPassengersByPassengerKeyPut(
        passengerKey,
        waiveNameChangeFees,
        request,
        'body',
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPassengersByPassengerKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
