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

import {
  AgencyCreationSettings,
  BookingPaymentSettingsv2,
  CheckInSettings,
  CodesSettings,
  ContactSettings,
  CustomerAccountSettings,
  CustomerCreationSettings,
  FeeSettings,
  FlightSearchSettings,
  GeneralSettings,
  IJsonResponse,
  ItinerarySettings,
  LogonSettings,
  PassengerSettings,
  PaymentSettings,
  PremiumServicesSettingsv2,
  ReserveFlightsSettings,
  SessionSettings,
  SkySpeedSettingsv2
} from 'api-models';

import { IHttpClient } from '../IHttpClient';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { HttpResponse } from '../HttpResponse';
import { Headers } from '../Headers';

import { COLLECTION_FORMATS } from '../variables';

@injectable()
export class SettingsService {
  private basePath: string = 'https://localhost';

  constructor(
    @inject('IApiHttpClient') private httpClient: IHttpClient,
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Get the checkin settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingCheckinGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<CheckInSettings>;
  public apiNskV1SettingsBookingCheckinGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<CheckInSettings>>;
  public apiNskV1SettingsBookingCheckinGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      CheckInSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/booking/checkin?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <CheckInSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the contact settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingContactGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<ContactSettings>;
  public apiNskV1SettingsBookingContactGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<ContactSettings>>;
  public apiNskV1SettingsBookingContactGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      ContactSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/booking/contact?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <ContactSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the custom account settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingCustomerAccountGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<CustomerAccountSettings>;
  public apiNskV1SettingsBookingCustomerAccountGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<CustomerAccountSettings>>;
  public apiNskV1SettingsBookingCustomerAccountGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      CustomerAccountSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/booking/customerAccount?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <CustomerAccountSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the fee settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingFeeGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<FeeSettings>;
  public apiNskV1SettingsBookingFeeGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<FeeSettings>>;
  public apiNskV1SettingsBookingFeeGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<FeeSettings>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/settings/booking/fee?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <FeeSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the flight search settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingFlightSearchGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<FlightSearchSettings>;
  public apiNskV1SettingsBookingFlightSearchGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<FlightSearchSettings>>;
  public apiNskV1SettingsBookingFlightSearchGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      FlightSearchSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/booking/flightSearch?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <FlightSearchSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the general settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<GeneralSettings>;
  public apiNskV1SettingsBookingGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<GeneralSettings>>;
  public apiNskV1SettingsBookingGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      GeneralSettings
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/settings/booking?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <GeneralSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the passenger settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingPassengerGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<PassengerSettings>;
  public apiNskV1SettingsBookingPassengerGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<PassengerSettings>>;
  public apiNskV1SettingsBookingPassengerGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      PassengerSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/booking/passenger?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <PassengerSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the reserve flight settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsBookingReserveFlightsGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<ReserveFlightsSettings>;
  public apiNskV1SettingsBookingReserveFlightsGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<ReserveFlightsSettings>>;
  public apiNskV1SettingsBookingReserveFlightsGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      ReserveFlightsSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/booking/reserveFlights?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <ReserveFlightsSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the logon settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsGeneralApplicationLogonGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<LogonSettings>;
  public apiNskV1SettingsGeneralApplicationLogonGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<LogonSettings>>;
  public apiNskV1SettingsGeneralApplicationLogonGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      LogonSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/general/applicationLogon?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <LogonSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the codes settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsGeneralCodesGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<CodesSettings>;
  public apiNskV1SettingsGeneralCodesGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<CodesSettings>>;
  public apiNskV1SettingsGeneralCodesGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      CodesSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/general/codes?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <CodesSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the session settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV1SettingsGeneralSessionGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<SessionSettings>;
  public apiNskV1SettingsGeneralSessionGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<SessionSettings>>;
  public apiNskV1SettingsGeneralSessionGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      SessionSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/general/session?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <SessionSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the itinerary settings.
     * 
     * @param eTag 
     
     */
  public apiNskV1SettingsItineraryGet(
    eTag?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<ItinerarySettings>;
  public apiNskV1SettingsItineraryGet(
    eTag?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<ItinerarySettings>>;
  public apiNskV1SettingsItineraryGet(
    eTag?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }

    const response: Observable<HttpResponse<
      ItinerarySettings
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/settings/itinerary?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <ItinerarySettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the non role based payment settings.
     * 
     * @param eTag 
     
     */
  public apiNskV1SettingsPaymentGet(
    eTag?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<PaymentSettings>;
  public apiNskV1SettingsPaymentGet(
    eTag?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<PaymentSettings>>;
  public apiNskV1SettingsPaymentGet(
    eTag?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }

    const response: Observable<HttpResponse<
      PaymentSettings
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/settings/payment?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <PaymentSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the agency creation settings.
     * 
     * @param eTag The unique etag ID.
     
     */
  public apiNskV1SettingsUserAgencyCreationGet(
    eTag?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<AgencyCreationSettings>;
  public apiNskV1SettingsUserAgencyCreationGet(
    eTag?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<AgencyCreationSettings>>;
  public apiNskV1SettingsUserAgencyCreationGet(
    eTag?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }

    const response: Observable<HttpResponse<
      AgencyCreationSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/user/agencyCreation?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <AgencyCreationSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the customer creation settings.
     * 
     * @param eTag The unique etag ID.
     
     */
  public apiNskV1SettingsUserCustomerCreationGet(
    eTag?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<CustomerCreationSettings>;
  public apiNskV1SettingsUserCustomerCreationGet(
    eTag?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<CustomerCreationSettings>>;
  public apiNskV1SettingsUserCustomerCreationGet(
    eTag?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }

    const response: Observable<HttpResponse<
      CustomerCreationSettings
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/settings/user/customerCreation?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <CustomerCreationSettings>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Get the role based booking payment settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV2SettingsBookingPaymentGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<BookingPaymentSettingsv2>;
  public apiNskV2SettingsBookingPaymentGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<BookingPaymentSettingsv2>>;
  public apiNskV2SettingsBookingPaymentGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      BookingPaymentSettingsv2
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v2/settings/booking/payment?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <BookingPaymentSettingsv2>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the premium services settings.
     * 
     * @param eTag The unique etag ID.
     
     */
  public apiNskV2SettingsPremiumServicesGet(
    eTag?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<PremiumServicesSettingsv2>;
  public apiNskV2SettingsPremiumServicesGet(
    eTag?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<PremiumServicesSettingsv2>>;
  public apiNskV2SettingsPremiumServicesGet(
    eTag?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }

    const response: Observable<HttpResponse<
      PremiumServicesSettingsv2
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v2/settings/premiumServices?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <PremiumServicesSettingsv2>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the SkySpeed settings.
     * 
     * @param eTag The cache eTag for this request.
     * @param roleCode Gets or sets the role code for this request.
     
     */
  public apiNskV2SettingsSkySpeedGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<SkySpeedSettingsv2>;
  public apiNskV2SettingsSkySpeedGet(
    eTag?: string,
    roleCode?: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<SkySpeedSettingsv2>>;
  public apiNskV2SettingsSkySpeedGet(
    eTag?: string,
    roleCode?: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (eTag !== undefined) {
      queryParameters.push('eTag=' + encodeURIComponent(String(eTag)));
    }
    if (roleCode !== undefined) {
      queryParameters.push('roleCode=' + encodeURIComponent(String(roleCode)));
    }

    const response: Observable<HttpResponse<
      SkySpeedSettingsv2
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v2/settings/skySpeed?${queryParameters.join(
        '&'
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <SkySpeedSettingsv2>httpResponse.response)
      );
    }
    return response;
  }
}
