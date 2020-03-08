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

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject, injectable } from 'inversify';

import {
  BundleSellRequest,
  CancelJourneyRequest,
  IJsonResponse,
  Journey,
  PassengerBag,
  PassengerBagRequest,
  TravelDocumentRequirements
} from 'api-models';

import { IHttpClient } from '../IHttpClient';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { HttpResponse } from '../HttpResponse';
import { Headers } from '../Headers';

import { COLLECTION_FORMATS } from '../variables';

@injectable()
export class BookingjourneysService {
  private basePath: string = 'https://localhost';

  constructor(
    @inject('IApiHttpClient') private httpClient: IHttpClient,
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Sells a service bundle for one or more passengers on a journey.
     * 
     * @param journeyKey The journey key.
     * @param request The bundle sell request.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyBundlesPost(
    journeyKey: string,
    request?: BundleSellRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingJourneysByJourneyKeyBundlesPost(
    journeyKey: string,
    request?: BundleSellRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingJourneysByJourneyKeyBundlesPost(
    journeyKey: string,
    request?: BundleSellRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyBundlesPost.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/bundles`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Cancels the specific journey from the booking in state.
     * 
     * @param journeyKey The journey key to be canceled.
     * @param request The cancel journey request options.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyDelete(
    journeyKey: string,
    request?: CancelJourneyRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingJourneysByJourneyKeyDelete(
    journeyKey: string,
    request?: CancelJourneyRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingJourneysByJourneyKeyDelete(
    journeyKey: string,
    request?: CancelJourneyRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyDelete.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets a single journey by the key.
     * 
     * @param journeyKey 
     
     */
  public apiNskV1BookingJourneysByJourneyKeyGet(
    journeyKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Journey>;
  public apiNskV1BookingJourneysByJourneyKeyGet(
    journeyKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Journey>>;
  public apiNskV1BookingJourneysByJourneyKeyGet(
    journeyKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyGet.'
      );
    }

    const response: Observable<HttpResponse<Journey>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <Journey>httpResponse.response));
    }
    return response;
  }

  /**
     * Gets the passenger or associated infant&#39;s destination address requirements for a specific journey for the booking in-state.
     * This endpoint will determine if the passenger or the associated infant requires a destination address for the  given journey.                This does not determine if the passenger already has a qualifying address, only if the destination address  is required.
     * @param journeyKey The journey key to check requirements for.
     * @param passengerKey The passenger key to check requirements for.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyAddressRequirementsGet(
    journeyKey: string,
    passengerKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<boolean>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyAddressRequirementsGet(
    journeyKey: string,
    passengerKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<boolean>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyAddressRequirementsGet(
    journeyKey: string,
    passengerKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyAddressRequirementsGet.'
      );
    }

    if (!passengerKey) {
      throw new Error(
        'Required parameter passengerKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyAddressRequirementsGet.'
      );
    }

    const response: Observable<HttpResponse<boolean>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/passengers/${encodeURIComponent(
        String(passengerKey)
      )}/address/requirements`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <boolean>httpResponse.response));
    }
    return response;
  }

  /**
     * Removes baggage from the booking.
     * 
     * @param journeyKey The unique identifier for the journey to remove from.
     * @param passengerKey The specific passenger key.
     * @param baggageKey Unique identifier for the bag to remove.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyDelete(
    journeyKey: string,
    passengerKey: string,
    baggageKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyDelete(
    journeyKey: string,
    passengerKey: string,
    baggageKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyDelete(
    journeyKey: string,
    passengerKey: string,
    baggageKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyDelete.'
      );
    }

    if (!passengerKey) {
      throw new Error(
        'Required parameter passengerKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyDelete.'
      );
    }

    if (!baggageKey) {
      throw new Error(
        'Required parameter baggageKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyDelete.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/passengers/${encodeURIComponent(
        String(passengerKey)
      )}/baggage/${encodeURIComponent(String(baggageKey))}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets a single bag from a passenger on a journey.
     * 
     * @param journeyKey The journey key for the journey to retrieve from.
     * @param passengerKey The passenger key for the passenger to retrieve from.
     * @param baggageKey The bag key for the bag to retrieve.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyGet(
    journeyKey: string,
    passengerKey: string,
    baggageKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<PassengerBag>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyGet(
    journeyKey: string,
    passengerKey: string,
    baggageKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<PassengerBag>>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyGet(
    journeyKey: string,
    passengerKey: string,
    baggageKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyGet.'
      );
    }

    if (!passengerKey) {
      throw new Error(
        'Required parameter passengerKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyGet.'
      );
    }

    if (!baggageKey) {
      throw new Error(
        'Required parameter baggageKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageByBaggageKeyGet.'
      );
    }

    const response: Observable<HttpResponse<
      Array<PassengerBag>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/passengers/${encodeURIComponent(
        String(passengerKey)
      )}/baggage/${encodeURIComponent(String(baggageKey))}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Array<PassengerBag>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets all baggage for a passenger on a specific journey.
     * 
     * @param journeyKey The journey key for the journey to retrieve from.
     * @param passengerKey The passenger key for the passenger to retrieve from.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageGet(
    journeyKey: string,
    passengerKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<PassengerBag>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageGet(
    journeyKey: string,
    passengerKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<PassengerBag>>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageGet(
    journeyKey: string,
    passengerKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageGet.'
      );
    }

    if (!passengerKey) {
      throw new Error(
        'Required parameter passengerKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggageGet.'
      );
    }

    const response: Observable<HttpResponse<
      Array<PassengerBag>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/passengers/${encodeURIComponent(String(passengerKey))}/baggage`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Array<PassengerBag>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Adds baggage to the booking.
     * 
     * @param journeyKey The unique identifier for the journey to remove from.
     * @param passengerKey The specific passenger key.
     * @param request A request to add bags to the given passenger.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggagePost(
    journeyKey: string,
    passengerKey: string,
    request?: PassengerBagRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggagePost(
    journeyKey: string,
    passengerKey: string,
    request?: PassengerBagRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggagePost(
    journeyKey: string,
    passengerKey: string,
    request?: PassengerBagRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggagePost.'
      );
    }

    if (!passengerKey) {
      throw new Error(
        'Required parameter passengerKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyPassengersByPassengerKeyBaggagePost.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/passengers/${encodeURIComponent(String(passengerKey))}/baggage`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the travel document requirements for a specific journey for the booking in-state.
     * This endpoint will return a response containing a collection of travel document type codes that could fulfill  a travel document requirement.  If the \&quot;AtLeastOneDocumentRequired\&quot; value is true, then one or more documents  in the list are required.  However, it does not mean that every document in the list is required.  If  \&quot;AtLeastOneDocumentRequired\&quot; is false, then the list of document type codes represents a list of acceptable  travel documents, but nothing is required.                This endpoint does not determine if any passengers already have required travel documents.
     * @param journeyKey The journey key to get required travel documents for.
     
     */
  public apiNskV1BookingJourneysByJourneyKeyTravelDocumentRequirementsGet(
    journeyKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<TravelDocumentRequirements>;
  public apiNskV1BookingJourneysByJourneyKeyTravelDocumentRequirementsGet(
    journeyKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<TravelDocumentRequirements>>;
  public apiNskV1BookingJourneysByJourneyKeyTravelDocumentRequirementsGet(
    journeyKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1BookingJourneysByJourneyKeyTravelDocumentRequirementsGet.'
      );
    }

    const response: Observable<HttpResponse<
      TravelDocumentRequirements
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys/${encodeURIComponent(
        String(journeyKey)
      )}/travelDocument/requirements`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <TravelDocumentRequirements>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Cancels all the journeys on the current booking in state.
     * 
     
     */
  public apiNskV1BookingJourneysDelete(
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingJourneysDelete(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingJourneysDelete(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/booking/journeys`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the collection of journeys on the booking in state.
     * 
     
     */
  public apiNskV1BookingJourneysGet(
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<Journey>>;
  public apiNskV1BookingJourneysGet(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<Journey>>>;
  public apiNskV1BookingJourneysGet(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Array<Journey>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Array<Journey>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the passenger or associated infant&#39;s destination address requirements for all journeys for the booking in-state.
     * This endpoint will determine if the passenger or the associated infant requires a destination address.  If a  destination address is required for the passenger or associated infant for any journey, then this will return  true.                 This does not determine if the passenger already has a qualifying address, only if the destination address  is required.
     * @param passengerKey The passenger key to check requirements for.
     
     */
  public apiNskV1BookingJourneysPassengersByPassengerKeyAddressRequirementsGet(
    passengerKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<boolean>;
  public apiNskV1BookingJourneysPassengersByPassengerKeyAddressRequirementsGet(
    passengerKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<boolean>>;
  public apiNskV1BookingJourneysPassengersByPassengerKeyAddressRequirementsGet(
    passengerKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!passengerKey) {
      throw new Error(
        'Required parameter passengerKey was null or undefined when calling apiNskV1BookingJourneysPassengersByPassengerKeyAddressRequirementsGet.'
      );
    }

    const response: Observable<HttpResponse<boolean>> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/booking/journeys/passengers/${encodeURIComponent(
        String(passengerKey)
      )}/address/requirements`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <boolean>httpResponse.response));
    }
    return response;
  }

  /**
     * Gets the travel document requirements for all journeys for the booking in-state.
     * This endpoint will return a response containing a collection of travel document type codes that could fulfill  a travel document requirement.  If the \&quot;AtLeastOneDocumentRequired\&quot; value is true, then one or more documents  in the list are required.  However, it does not mean that every document in the list is required.  If  \&quot;AtLeastOneDocumentRequired\&quot; is false, then the list of document type codes represents a list of acceptable  travel documents, but nothing is required.                This endpoint does not determine if any passengers already have required travel documents.
     
     */
  public apiNskV1BookingJourneysTravelDocumentRequirementsGet(
    observe?: 'body',
    headers?: Headers
  ): Observable<TravelDocumentRequirements>;
  public apiNskV1BookingJourneysTravelDocumentRequirementsGet(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<TravelDocumentRequirements>>;
  public apiNskV1BookingJourneysTravelDocumentRequirementsGet(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      TravelDocumentRequirements
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/journeys/travelDocument/requirements`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <TravelDocumentRequirements>httpResponse.response)
      );
    }
    return response;
  }
}
