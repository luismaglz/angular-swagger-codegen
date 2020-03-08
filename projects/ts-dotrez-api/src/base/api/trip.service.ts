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
  Availability,
  AvailabilityFlyAheadRequest,
  AvailabilityMoveRequest,
  AvailabilityRebookRequest,
  Booking,
  BookingSellRequest,
  IJsonResponse,
  MoveRequest,
  ScheduleDetail,
  Trip,
  TripDetails,
  TripDowngradeRequest,
  TripInformationQuery,
  TripInformationResponse,
  TripSellRequest,
  TripStatusv2,
  TripUpgradeBaseRequest,
  TripUpgradeRequest,
  UpgradeSegment
} from 'api-models';

import { IHttpClient } from '../IHttpClient';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { HttpResponse } from '../HttpResponse';
import { Headers } from '../Headers';

import { COLLECTION_FORMATS } from '../variables';

@injectable()
export class TripService {
  private basePath: string = 'https://localhost';

  constructor(
    @inject('IApiHttpClient') private httpClient: IHttpClient,
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Downgrades the current booking in state segments.
     * 
     * @param request The trip downgrade request.
     
     */
  public apiNskV1TripDowngradePost(
    request?: TripDowngradeRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1TripDowngradePost(
    request?: TripDowngradeRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1TripDowngradePost(
    request?: TripDowngradeRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/trip/downgrade`,
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
     * Simple fly ahead search request covers the bare minimum search  by journey. AvailabilitySettings configure the rest.
     * 
     * @param journeyKey The journey key.
     
     */
  public apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet(
    journeyKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Trip>;
  public apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet(
    journeyKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Trip>>;
  public apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet(
    journeyKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV1TripFlyAheadAvailabilityByJourneyKeyGet.'
      );
    }

    const response: Observable<HttpResponse<Trip>> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/trip/flyAhead/availability/${encodeURIComponent(
        String(journeyKey)
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <Trip>httpResponse.response));
    }
    return response;
  }

  /**
     * Full fly ahead availability search request.
     * This request allows for total control over  the configuration. If a property is not set, the default settings (AvailabilitySettings) is used in its place.  Note, this is a post request even though it is only getting information. This is due to the complicated data needed  in the post data.
     * @param request The availability move request.
     
     */
  public apiNskV1TripFlyAheadAvailabilityPost(
    request?: AvailabilityFlyAheadRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<Trip>;
  public apiNskV1TripFlyAheadAvailabilityPost(
    request?: AvailabilityFlyAheadRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Trip>>;
  public apiNskV1TripFlyAheadAvailabilityPost(
    request?: AvailabilityFlyAheadRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<Trip>> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/trip/flyAhead/availability`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <Trip>httpResponse.response));
    }
    return response;
  }

  /**
     * Retrieves cabin and various details for the specified leg key.
     * The additional trip details include the leg cross references,   the cabin details (nest counts), and the checkin-lid.
     * @param legKey The encoded leg key.
     
     */
  public apiNskV1TripInfoByLegKeyDetailsGet(
    legKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<TripDetails>;
  public apiNskV1TripInfoByLegKeyDetailsGet(
    legKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<TripDetails>>;
  public apiNskV1TripInfoByLegKeyDetailsGet(
    legKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!legKey) {
      throw new Error(
        'Required parameter legKey was null or undefined when calling apiNskV1TripInfoByLegKeyDetailsGet.'
      );
    }

    const response: Observable<HttpResponse<TripDetails>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/trip/info/${encodeURIComponent(
        String(legKey)
      )}/details`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <TripDetails>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the search results for the trip information, based on the search criteria.
     * 
     * @param request The trip information request.
     
     */
  public apiNskV1TripInfoPost(
    request?: TripInformationQuery,
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<TripInformationResponse>>;
  public apiNskV1TripInfoPost(
    request?: TripInformationQuery,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<TripInformationResponse>>>;
  public apiNskV1TripInfoPost(
    request?: TripInformationQuery,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Array<TripInformationResponse>
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/trip/info`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(
          httpResponse => <Array<TripInformationResponse>>httpResponse.response
        )
      );
    }
    return response;
  }

  /**
     * Performs a simplified search for trip information based upon minimal, required data for  the search criteria.
     * 
     * @param beginDate The starting date of the trip information search.
     * @param numberOfJourneys When set to null, there will be no limit to the number of journeys to be returned.
     * @param origin The departure station.
     * @param destination The arrival station.
     * @param endDate The end date of the trip information search.
     * @param startTimeInterval The starting time of the trip information search.
     * @param endTimeInterval The end time of the trip information search.
     * @param identifier The transportation identifier, such as a flight number.
     * @param carrierCode The carrier code.
     * @param flightType The flight type.
     
     */
  public apiNskV1TripInfoSimpleGet(
    beginDate: Date,
    numberOfJourneys?: number,
    origin?: string,
    destination?: string,
    endDate?: Date,
    startTimeInterval?: string,
    endTimeInterval?: string,
    identifier?: string,
    carrierCode?: string,
    flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect',
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<TripInformationResponse>>;
  public apiNskV1TripInfoSimpleGet(
    beginDate: Date,
    numberOfJourneys?: number,
    origin?: string,
    destination?: string,
    endDate?: Date,
    startTimeInterval?: string,
    endTimeInterval?: string,
    identifier?: string,
    carrierCode?: string,
    flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect',
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<TripInformationResponse>>>;
  public apiNskV1TripInfoSimpleGet(
    beginDate: Date,
    numberOfJourneys?: number,
    origin?: string,
    destination?: string,
    endDate?: Date,
    startTimeInterval?: string,
    endTimeInterval?: string,
    identifier?: string,
    carrierCode?: string,
    flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect',
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!beginDate) {
      throw new Error(
        'Required parameter beginDate was null or undefined when calling apiNskV1TripInfoSimpleGet.'
      );
    }

    let queryParameters: string[] = [];
    if (numberOfJourneys !== undefined) {
      queryParameters.push(
        'numberOfJourneys=' + encodeURIComponent(String(numberOfJourneys))
      );
    }
    if (origin !== undefined) {
      queryParameters.push('origin=' + encodeURIComponent(String(origin)));
    }
    if (destination !== undefined) {
      queryParameters.push(
        'destination=' + encodeURIComponent(String(destination))
      );
    }
    if (endDate !== undefined) {
      queryParameters.push(
        'endDate=' + encodeURIComponent(<any>endDate.toISOString())
      );
    }
    if (startTimeInterval !== undefined) {
      queryParameters.push(
        'startTimeInterval=' + encodeURIComponent(String(startTimeInterval))
      );
    }
    if (endTimeInterval !== undefined) {
      queryParameters.push(
        'endTimeInterval=' + encodeURIComponent(String(endTimeInterval))
      );
    }
    if (beginDate !== undefined) {
      queryParameters.push(
        'beginDate=' + encodeURIComponent(<any>beginDate.toISOString())
      );
    }
    if (identifier !== undefined) {
      queryParameters.push(
        'identifier=' + encodeURIComponent(String(identifier))
      );
    }
    if (carrierCode !== undefined) {
      queryParameters.push(
        'carrierCode=' + encodeURIComponent(String(carrierCode))
      );
    }
    if (flightType !== undefined) {
      queryParameters.push(
        'flightType=' + encodeURIComponent(String(flightType))
      );
    }

    const response: Observable<HttpResponse<
      Array<TripInformationResponse>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/trip/info/simple?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(
          httpResponse => <Array<TripInformationResponse>>httpResponse.response
        )
      );
    }
    return response;
  }

  /**
     * Self-service search for move availability.
     * 
     
     */
  public apiNskV1TripMoveAvailabilitySelfServiceGet(
    observe?: 'body',
    headers?: Headers
  ): Observable<Availability>;
  public apiNskV1TripMoveAvailabilitySelfServiceGet(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Availability>>;
  public apiNskV1TripMoveAvailabilitySelfServiceGet(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Availability
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/trip/move/availability/selfService`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Availability>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Moves a journey on the booking in state.
     * 
     * @param request Move request.
     
     */
  public apiNskV1TripMovePost(
    request?: MoveRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1TripMovePost(
    request?: MoveRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1TripMovePost(
    request?: MoveRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/trip/move`,
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
     * Retrieves the schedule of flights for a market.
     * 
     * @param origin The origin station code.
     * @param destination The destination station code.
     * @param beginDate The begin date to search for.
     * @param endDate The end date to search for.
     * @param type The flight type filter.
     
     */
  public apiNskV1TripScheduleGet(
    origin: string,
    destination: string,
    beginDate: Date,
    endDate: Date,
    type?: 'None' | 'NonStop' | 'Through' | 'Direct' | 'Connect' | 'All',
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<ScheduleDetail>>;
  public apiNskV1TripScheduleGet(
    origin: string,
    destination: string,
    beginDate: Date,
    endDate: Date,
    type?: 'None' | 'NonStop' | 'Through' | 'Direct' | 'Connect' | 'All',
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<ScheduleDetail>>>;
  public apiNskV1TripScheduleGet(
    origin: string,
    destination: string,
    beginDate: Date,
    endDate: Date,
    type?: 'None' | 'NonStop' | 'Through' | 'Direct' | 'Connect' | 'All',
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!origin) {
      throw new Error(
        'Required parameter origin was null or undefined when calling apiNskV1TripScheduleGet.'
      );
    }

    if (!destination) {
      throw new Error(
        'Required parameter destination was null or undefined when calling apiNskV1TripScheduleGet.'
      );
    }

    if (!beginDate) {
      throw new Error(
        'Required parameter beginDate was null or undefined when calling apiNskV1TripScheduleGet.'
      );
    }

    if (!endDate) {
      throw new Error(
        'Required parameter endDate was null or undefined when calling apiNskV1TripScheduleGet.'
      );
    }

    let queryParameters: string[] = [];
    if (origin !== undefined) {
      queryParameters.push('origin=' + encodeURIComponent(String(origin)));
    }
    if (destination !== undefined) {
      queryParameters.push(
        'destination=' + encodeURIComponent(String(destination))
      );
    }
    if (beginDate !== undefined) {
      queryParameters.push(
        'beginDate=' + encodeURIComponent(<any>beginDate.toISOString())
      );
    }
    if (endDate !== undefined) {
      queryParameters.push(
        'endDate=' + encodeURIComponent(<any>endDate.toISOString())
      );
    }
    if (type !== undefined) {
      queryParameters.push('type=' + encodeURIComponent(String(type)));
    }

    const response: Observable<HttpResponse<
      Array<ScheduleDetail>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/trip/schedule?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Array<ScheduleDetail>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Upgrades the current booking for the single key.
     * 
     * @param upgradeKey The upgrade key.
     * @param request The trip upgrade request.
     
     */
  public apiNskV1TripUpgradeByUpgradeKeyPost(
    upgradeKey: string,
    request?: TripUpgradeBaseRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1TripUpgradeByUpgradeKeyPost(
    upgradeKey: string,
    request?: TripUpgradeBaseRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1TripUpgradeByUpgradeKeyPost(
    upgradeKey: string,
    request?: TripUpgradeBaseRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!upgradeKey) {
      throw new Error(
        'Required parameter upgradeKey was null or undefined when calling apiNskV1TripUpgradeByUpgradeKeyPost.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/trip/upgrade/${encodeURIComponent(
        String(upgradeKey)
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
     * Gets the list of upgrade options for the booking in state.
     * 
     
     */
  public apiNskV1TripUpgradeGet(
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<UpgradeSegment>>;
  public apiNskV1TripUpgradeGet(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<UpgradeSegment>>>;
  public apiNskV1TripUpgradeGet(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Array<UpgradeSegment>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/trip/upgrade`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Array<UpgradeSegment>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Upgrades the current booking in state segments.
     * 
     * @param request The trip upgrade request.
     
     */
  public apiNskV1TripUpgradePost(
    request?: TripUpgradeRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1TripUpgradePost(
    request?: TripUpgradeRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1TripUpgradePost(
    request?: TripUpgradeRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/trip/upgrade`,
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
     * Retrieves the trip status data for the specified leg key.
     * 
     * @param legKey The encoded leg key.
     
     */
  public apiNskV2TripInfoByLegKeyStatusGet(
    legKey: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<TripStatusv2>;
  public apiNskV2TripInfoByLegKeyStatusGet(
    legKey: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<TripStatusv2>>;
  public apiNskV2TripInfoByLegKeyStatusGet(
    legKey: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!legKey) {
      throw new Error(
        'Required parameter legKey was null or undefined when calling apiNskV2TripInfoByLegKeyStatusGet.'
      );
    }

    const response: Observable<HttpResponse<
      TripStatusv2
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v2/trip/info/${encodeURIComponent(
        String(legKey)
      )}/status`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <TripStatusv2>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Searches for availability with the simple move request. The simple search request covers the bare minimum search  criteria and lets default settings (AvailabilitySettings) configure the rest.
     * 
     * @param journeyKey The journey key.
     * @param passengerMoveType The passenger move type.
     * @param beginDate The departure date.
     * @param origin The origin station code.
     * @param destination The destination station code.
     
     */
  public apiNskV2TripMoveAvailabilityByJourneyKeyGet(
    journeyKey: string,
    passengerMoveType:
      | 'None'
      | 'Irop'
      | 'Diversion'
      | 'FlightClose'
      | 'FlyAhead'
      | 'SplitJourney'
      | 'SelfServiceRebooking',
    beginDate?: Date,
    origin?: string,
    destination?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Availability>;
  public apiNskV2TripMoveAvailabilityByJourneyKeyGet(
    journeyKey: string,
    passengerMoveType:
      | 'None'
      | 'Irop'
      | 'Diversion'
      | 'FlightClose'
      | 'FlyAhead'
      | 'SplitJourney'
      | 'SelfServiceRebooking',
    beginDate?: Date,
    origin?: string,
    destination?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Availability>>;
  public apiNskV2TripMoveAvailabilityByJourneyKeyGet(
    journeyKey: string,
    passengerMoveType:
      | 'None'
      | 'Irop'
      | 'Diversion'
      | 'FlightClose'
      | 'FlyAhead'
      | 'SplitJourney'
      | 'SelfServiceRebooking',
    beginDate?: Date,
    origin?: string,
    destination?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!journeyKey) {
      throw new Error(
        'Required parameter journeyKey was null or undefined when calling apiNskV2TripMoveAvailabilityByJourneyKeyGet.'
      );
    }

    if (!passengerMoveType) {
      throw new Error(
        'Required parameter passengerMoveType was null or undefined when calling apiNskV2TripMoveAvailabilityByJourneyKeyGet.'
      );
    }

    let queryParameters: string[] = [];
    if (beginDate !== undefined) {
      queryParameters.push(
        'beginDate=' + encodeURIComponent(<any>beginDate.toISOString())
      );
    }
    if (origin !== undefined) {
      queryParameters.push('origin=' + encodeURIComponent(String(origin)));
    }
    if (destination !== undefined) {
      queryParameters.push(
        'destination=' + encodeURIComponent(String(destination))
      );
    }
    if (passengerMoveType !== undefined) {
      queryParameters.push(
        'passengerMoveType=' + encodeURIComponent(String(passengerMoveType))
      );
    }

    const response: Observable<HttpResponse<
      Availability
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v2/trip/move/availability/${encodeURIComponent(
        String(journeyKey)
      )}?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Availability>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Searches for move availability with the full availability search request. This request will allow for total control  over  the configuration. If a property is not set, the default settings (AvailabilitySettings) is used in its place.
     * Note, this is a post request even though it is only getting information. This is due to the complicated data needed  in the post data.
     * @param request The availability move request.
     
     */
  public apiNskV2TripMoveAvailabilityPost(
    request?: AvailabilityMoveRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<Availability>;
  public apiNskV2TripMoveAvailabilityPost(
    request?: AvailabilityMoveRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Availability>>;
  public apiNskV2TripMoveAvailabilityPost(
    request?: AvailabilityMoveRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Availability
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v2/trip/move/availability`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Availability>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Rebook search with the current booking defaults.
     * Requires a booking in state.   Although this endpoint behaves like a GET, POST is used to reduce the limitations resulting from URL length issues.
     * @param request The rebook request.
     
     */
  public apiNskV3TripRebookAvailabilityPost(
    request?: AvailabilityRebookRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<Availability>;
  public apiNskV3TripRebookAvailabilityPost(
    request?: AvailabilityRebookRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Availability>>;
  public apiNskV3TripRebookAvailabilityPost(
    request?: AvailabilityRebookRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Availability
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v3/trip/rebook/availability`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Availability>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Simple rebook search with the current booking defaults.
     * Requires a booking in state.
     * @param origin The origin station code.
     * @param destination The destination station code.
     * @param beginDate The departure date.
     * @param endDate The return date if this is a round trip request.
     * @param loyaltyFilter The loyalty fare filter.
     
     */
  public apiNskV3TripRebookAvailabilitySimpleGet(
    origin: string,
    destination: string,
    beginDate: Date,
    endDate?: Date,
    loyaltyFilter?:
      | 'MonetaryOnly'
      | 'PointsOnly'
      | 'PointsAndMonetary'
      | 'PreserveCurrent',
    observe?: 'body',
    headers?: Headers
  ): Observable<Availability>;
  public apiNskV3TripRebookAvailabilitySimpleGet(
    origin: string,
    destination: string,
    beginDate: Date,
    endDate?: Date,
    loyaltyFilter?:
      | 'MonetaryOnly'
      | 'PointsOnly'
      | 'PointsAndMonetary'
      | 'PreserveCurrent',
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Availability>>;
  public apiNskV3TripRebookAvailabilitySimpleGet(
    origin: string,
    destination: string,
    beginDate: Date,
    endDate?: Date,
    loyaltyFilter?:
      | 'MonetaryOnly'
      | 'PointsOnly'
      | 'PointsAndMonetary'
      | 'PreserveCurrent',
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!origin) {
      throw new Error(
        'Required parameter origin was null or undefined when calling apiNskV3TripRebookAvailabilitySimpleGet.'
      );
    }

    if (!destination) {
      throw new Error(
        'Required parameter destination was null or undefined when calling apiNskV3TripRebookAvailabilitySimpleGet.'
      );
    }

    if (!beginDate) {
      throw new Error(
        'Required parameter beginDate was null or undefined when calling apiNskV3TripRebookAvailabilitySimpleGet.'
      );
    }

    let queryParameters: string[] = [];
    if (origin !== undefined) {
      queryParameters.push('origin=' + encodeURIComponent(String(origin)));
    }
    if (destination !== undefined) {
      queryParameters.push(
        'destination=' + encodeURIComponent(String(destination))
      );
    }
    if (beginDate !== undefined) {
      queryParameters.push(
        'beginDate=' + encodeURIComponent(<any>beginDate.toISOString())
      );
    }
    if (endDate !== undefined) {
      queryParameters.push(
        'endDate=' + encodeURIComponent(<any>endDate.toISOString())
      );
    }
    if (loyaltyFilter !== undefined) {
      queryParameters.push(
        'loyaltyFilter=' + encodeURIComponent(String(loyaltyFilter))
      );
    }

    const response: Observable<HttpResponse<
      Availability
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v3/trip/rebook/availability/simple?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Availability>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Creates a new booking with the provided journeys, contacts, passengers, and SSRs.
     * 
     * @param request The booking sell request.
     
     */
  public apiNskV4TripPost(
    request?: BookingSellRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV4TripPost(
    request?: BookingSellRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV4TripPost(
    request?: BookingSellRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v4/trip`,
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
     * Sells the list of journeys and creates a booking if it doesn&#39;t already exist.
     * 
     * @param request The trip sell request.
     
     */
  public apiNskV4TripSellPost(
    request?: TripSellRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<Booking>;
  public apiNskV4TripSellPost(
    request?: TripSellRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Booking>>;
  public apiNskV4TripSellPost(
    request?: TripSellRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<Booking>> = this.httpClient.post(
      `${this.basePath}/api/nsk/v4/trip/sell`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <Booking>httpResponse.response));
    }
    return response;
  }
}
