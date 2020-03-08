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
  BookingSearchResult,
  BookingTripResult,
  DeltaMapperSingleSignOnTokenRequest,
  DeltaMapperUserRequest,
  DeltaMapperUserRolePatchRequest,
  IJsonResponse,
  SessionRoles,
  SingleSignOnTokenRequest,
  User,
  UserChangePasswordRequestBase,
  UserCustomerCreateRequest,
  UserCustomerCreateRequestv2,
  UserImpersonateRequest,
  UserRequest,
  UserRole,
  UserRoleCreateRequest,
  UserRoleEditRequest,
  UserSingleSignOnToken
} from "api-models";

import IHttpClient from "../IHttpClient";
import { IAPIConfiguration } from "../IAPIConfiguration";
import HttpResponse from "../HttpResponse";

import { COLLECTION_FORMATS } from "../variables";

@injectable()
export class UserService {
  private basePath: string = "https://localhost";

  constructor(
    @inject("IApiHttpClient") private httpClient: IHttpClient,
    @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Searches the logged in user booking upcoming and past bookings.
     * This is similar to the user booking endpoint but returns more focused trip information.  This endpoint will only return data where a booking&#39;s passenger customer number matches the current logged in user.  Bookings made by the user where the passenger customer number is not assigned are ignored.
     * @param startDate Booking start search date.
     * @param endDate Booking end search date.
     
     */
  public apiNskV1UserBookingsByPassengerGet(
    startDate?: Date,
    endDate?: Date,
    observe?: "body",
    headers?: Headers
  ): Observable<Array<BookingTripResult>>;
  public apiNskV1UserBookingsByPassengerGet(
    startDate?: Date,
    endDate?: Date,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<Array<BookingTripResult>>>;
  public apiNskV1UserBookingsByPassengerGet(
    startDate?: Date,
    endDate?: Date,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (startDate !== undefined) {
      queryParameters.push(
        "startDate=" + encodeURIComponent(<any>startDate.toISOString())
      );
    }
    if (endDate !== undefined) {
      queryParameters.push(
        "endDate=" + encodeURIComponent(<any>endDate.toISOString())
      );
    }

    const response: Observable<HttpResponse<
      Array<BookingTripResult>
    >> = this.httpClient.get(
      `${
        this.basePath
      }/api/nsk/v1/user/bookingsByPassenger?${queryParameters.join("&")}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <Array<BookingTripResult>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Searches the logged in user booking upcoming and past bookings.
     * 
     * @param returnCount The number of results to be returned.
     * @param associatedFirstName An associated passenger/contact first name.
     * @param associatedLastName An associated passenger/contact last name.
     * @param phoneticSearch Flag indicating to search using the phonetic option.
     * @param tripIdentifier Filter by trip identifier.
     * @param origin Filter by origin station code.
     * @param destination Filter by destination station code.
     * @param searchArchive Flag indicating to search archived bookings.
     * @param tripDate Filter by trip date.
     * @param startDate Filter by starting search date.
     * @param endDate Filter by ending search date.
     * @param searchByCustomerNumber Flag indicating to search by the users customer number instead of user identifier.
     * @param lastBookingKey The last booking key (used for paging).
     
     */
  public apiNskV1UserBookingsGet(
    returnCount: number,
    associatedFirstName?: string,
    associatedLastName?: string,
    phoneticSearch?: boolean,
    tripIdentifier?: string,
    origin?: string,
    destination?: string,
    searchArchive?: boolean,
    tripDate?: Date,
    startDate?: Date,
    endDate?: Date,
    searchByCustomerNumber?: boolean,
    lastBookingKey?: string,
    observe?: "body",
    headers?: Headers
  ): Observable<Array<BookingSearchResult>>;
  public apiNskV1UserBookingsGet(
    returnCount: number,
    associatedFirstName?: string,
    associatedLastName?: string,
    phoneticSearch?: boolean,
    tripIdentifier?: string,
    origin?: string,
    destination?: string,
    searchArchive?: boolean,
    tripDate?: Date,
    startDate?: Date,
    endDate?: Date,
    searchByCustomerNumber?: boolean,
    lastBookingKey?: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<Array<BookingSearchResult>>>;
  public apiNskV1UserBookingsGet(
    returnCount: number,
    associatedFirstName?: string,
    associatedLastName?: string,
    phoneticSearch?: boolean,
    tripIdentifier?: string,
    origin?: string,
    destination?: string,
    searchArchive?: boolean,
    tripDate?: Date,
    startDate?: Date,
    endDate?: Date,
    searchByCustomerNumber?: boolean,
    lastBookingKey?: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!returnCount) {
      throw new Error(
        "Required parameter returnCount was null or undefined when calling apiNskV1UserBookingsGet."
      );
    }

    let queryParameters: string[] = [];
    if (associatedFirstName !== undefined) {
      queryParameters.push(
        "associatedFirstName=" + encodeURIComponent(String(associatedFirstName))
      );
    }
    if (associatedLastName !== undefined) {
      queryParameters.push(
        "associatedLastName=" + encodeURIComponent(String(associatedLastName))
      );
    }
    if (phoneticSearch !== undefined) {
      queryParameters.push(
        "phoneticSearch=" + encodeURIComponent(String(phoneticSearch))
      );
    }
    if (tripIdentifier !== undefined) {
      queryParameters.push(
        "tripIdentifier=" + encodeURIComponent(String(tripIdentifier))
      );
    }
    if (origin !== undefined) {
      queryParameters.push("origin=" + encodeURIComponent(String(origin)));
    }
    if (destination !== undefined) {
      queryParameters.push(
        "destination=" + encodeURIComponent(String(destination))
      );
    }
    if (searchArchive !== undefined) {
      queryParameters.push(
        "searchArchive=" + encodeURIComponent(String(searchArchive))
      );
    }
    if (tripDate !== undefined) {
      queryParameters.push(
        "tripDate=" + encodeURIComponent(<any>tripDate.toISOString())
      );
    }
    if (startDate !== undefined) {
      queryParameters.push(
        "startDate=" + encodeURIComponent(<any>startDate.toISOString())
      );
    }
    if (endDate !== undefined) {
      queryParameters.push(
        "endDate=" + encodeURIComponent(<any>endDate.toISOString())
      );
    }
    if (searchByCustomerNumber !== undefined) {
      queryParameters.push(
        "searchByCustomerNumber=" +
          encodeURIComponent(String(searchByCustomerNumber))
      );
    }
    if (returnCount !== undefined) {
      queryParameters.push(
        "returnCount=" + encodeURIComponent(String(returnCount))
      );
    }
    if (lastBookingKey !== undefined) {
      queryParameters.push(
        "lastBookingKey=" + encodeURIComponent(String(lastBookingKey))
      );
    }

    const response: Observable<HttpResponse<
      Array<BookingSearchResult>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/user/bookings?${queryParameters.join("&")}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <Array<BookingSearchResult>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Retrieves the current logged in user.
     * 
     
     */
  public apiNskV1UserGet(observe?: "body", headers?: Headers): Observable<User>;
  public apiNskV1UserGet(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<User>>;
  public apiNskV1UserGet(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<User>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/user`,
      headers
    );
    if (observe == "body") {
      return response.pipe(map(httpResponse => <User>httpResponse.response));
    }
    return response;
  }

  /**
     * Resets the logged in users role.
     * 
     
     */
  public apiNskV1UserImpersonateDelete(
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserImpersonateDelete(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserImpersonateDelete(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/user/impersonate`,
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
     * Gets the logged in users current session roles state.
     * 
     
     */
  public apiNskV1UserImpersonateGet(
    observe?: "body",
    headers?: Headers
  ): Observable<SessionRoles>;
  public apiNskV1UserImpersonateGet(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<SessionRoles>>;
  public apiNskV1UserImpersonateGet(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      SessionRoles
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/user/impersonate`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <SessionRoles>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Impersonates a new role for the logged in user.
     * 
     * @param request The user impersonate request.
     
     */
  public apiNskV1UserImpersonatePost(
    request?: UserImpersonateRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserImpersonatePost(
    request?: UserImpersonateRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserImpersonatePost(
    request?: UserImpersonateRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/user/impersonate`,
      request,
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
     * Changes the logged in user&#39;s password.
     * 
     * @param request The change password request.
     
     */
  public apiNskV1UserPasswordChangePost(
    request?: UserChangePasswordRequestBase,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserPasswordChangePost(
    request?: UserChangePasswordRequestBase,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserPasswordChangePost(
    request?: UserChangePasswordRequestBase,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/user/password/change`,
      request,
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
     * Patches the current logged in user.
     * 
     * @param request The user patch request.
     
     */
  public apiNskV1UserPatch(
    request?: DeltaMapperUserRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserPatch(
    request?: DeltaMapperUserRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserPatch(
    request?: DeltaMapperUserRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.patch(
      `${this.basePath}/api/nsk/v1/user`,
      request,
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
     * Creates a user with customer creation parameter defaults.
     * This endpoint will create a user based off the system configured customer creation parameters. The associated  person has to be of type customer or an exception will be thrown. To change these default settings please configure  utilities.
     * @param request The user customer create request.
     
     */
  public apiNskV1UserPost(
    request?: UserCustomerCreateRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserPost(
    request?: UserCustomerCreateRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserPost(
    request?: UserCustomerCreateRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/user`,
      request,
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
     * Updates the current logged in user.
     * 
     * @param request The user edit request.
     
     */
  public apiNskV1UserPut(
    request?: UserRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserPut(
    request?: UserRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserPut(
    request?: UserRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/user`,
      request,
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
     * Delets a specific role on the logged in user.
     * 
     * @param userRoleKey The unique user role key.
     
     */
  public apiNskV1UserRolesByUserRoleKeyDelete(
    userRoleKey: string,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserRolesByUserRoleKeyDelete(
    userRoleKey: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserRolesByUserRoleKeyDelete(
    userRoleKey: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!userRoleKey) {
      throw new Error(
        "Required parameter userRoleKey was null or undefined when calling apiNskV1UserRolesByUserRoleKeyDelete."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/user/roles/${encodeURIComponent(
        String(userRoleKey)
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
     * Gets a specific role from the logged in user.
     * 
     * @param userRoleKey The unique user role key
     
     */
  public apiNskV1UserRolesByUserRoleKeyGet(
    userRoleKey: string,
    observe?: "body",
    headers?: Headers
  ): Observable<UserRole>;
  public apiNskV1UserRolesByUserRoleKeyGet(
    userRoleKey: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<UserRole>>;
  public apiNskV1UserRolesByUserRoleKeyGet(
    userRoleKey: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!userRoleKey) {
      throw new Error(
        "Required parameter userRoleKey was null or undefined when calling apiNskV1UserRolesByUserRoleKeyGet."
      );
    }

    const response: Observable<HttpResponse<UserRole>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/user/roles/${encodeURIComponent(
        String(userRoleKey)
      )}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <UserRole>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Patches a specific role on the logged in user.
     * 
     * @param userRoleKey The unique user role key.
     * @param request The patched role.
     
     */
  public apiNskV1UserRolesByUserRoleKeyPatch(
    userRoleKey: string,
    request?: DeltaMapperUserRolePatchRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserRolesByUserRoleKeyPatch(
    userRoleKey: string,
    request?: DeltaMapperUserRolePatchRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserRolesByUserRoleKeyPatch(
    userRoleKey: string,
    request?: DeltaMapperUserRolePatchRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!userRoleKey) {
      throw new Error(
        "Required parameter userRoleKey was null or undefined when calling apiNskV1UserRolesByUserRoleKeyPatch."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.patch(
      `${this.basePath}/api/nsk/v1/user/roles/${encodeURIComponent(
        String(userRoleKey)
      )}`,
      request,
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
     * Updates a specific role on the logged in user.
     * 
     * @param userRoleKey The unique user role key.
     * @param request The modified role.
     
     */
  public apiNskV1UserRolesByUserRoleKeyPut(
    userRoleKey: string,
    request?: UserRoleEditRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserRolesByUserRoleKeyPut(
    userRoleKey: string,
    request?: UserRoleEditRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserRolesByUserRoleKeyPut(
    userRoleKey: string,
    request?: UserRoleEditRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!userRoleKey) {
      throw new Error(
        "Required parameter userRoleKey was null or undefined when calling apiNskV1UserRolesByUserRoleKeyPut."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/user/roles/${encodeURIComponent(
        String(userRoleKey)
      )}`,
      request,
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
     * Gets all roles from the logged in user.
     * 
     
     */
  public apiNskV1UserRolesGet(
    observe?: "body",
    headers?: Headers
  ): Observable<Array<UserRole>>;
  public apiNskV1UserRolesGet(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<Array<UserRole>>>;
  public apiNskV1UserRolesGet(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Array<UserRole>
    >> = this.httpClient.get(`${this.basePath}/api/nsk/v1/user/roles`, headers);
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <Array<UserRole>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Creates a new role on the logged in user.
     * 
     * @param request The new role.
     
     */
  public apiNskV1UserRolesPost(
    request?: UserRoleCreateRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserRolesPost(
    request?: UserRoleCreateRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserRolesPost(
    request?: UserRoleCreateRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/user/roles`,
      request,
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
     * Deletes a token associated with the single sign on provider from the logged-in user.
     * 
     * @param providerKey The single sign on provider key.
     
     */
  public apiNskV1UserSingleSignOnTokenByProviderKeyDelete(
    providerKey: string,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyDelete(
    providerKey: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyDelete(
    providerKey: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!providerKey) {
      throw new Error(
        "Required parameter providerKey was null or undefined when calling apiNskV1UserSingleSignOnTokenByProviderKeyDelete."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/user/singleSignOnToken/${encodeURIComponent(
        String(providerKey)
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
     * Gets a single sign on token associated with a specific user.
     * 
     * @param providerKey The single sign on provider key.
     
     */
  public apiNskV1UserSingleSignOnTokenByProviderKeyGet(
    providerKey: string,
    observe?: "body",
    headers?: Headers
  ): Observable<UserSingleSignOnToken>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyGet(
    providerKey: string,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<UserSingleSignOnToken>>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyGet(
    providerKey: string,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!providerKey) {
      throw new Error(
        "Required parameter providerKey was null or undefined when calling apiNskV1UserSingleSignOnTokenByProviderKeyGet."
      );
    }

    const response: Observable<HttpResponse<
      UserSingleSignOnToken
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/user/singleSignOnToken/${encodeURIComponent(
        String(providerKey)
      )}`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <UserSingleSignOnToken>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Patches an existing token associated with the logged-in user.
     * 
     * @param providerKey The single sign on provider key.
     * @param tokenRequest The single sign on token request.
     
     */
  public apiNskV1UserSingleSignOnTokenByProviderKeyPatch(
    providerKey: string,
    tokenRequest?: DeltaMapperSingleSignOnTokenRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyPatch(
    providerKey: string,
    tokenRequest?: DeltaMapperSingleSignOnTokenRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyPatch(
    providerKey: string,
    tokenRequest?: DeltaMapperSingleSignOnTokenRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!providerKey) {
      throw new Error(
        "Required parameter providerKey was null or undefined when calling apiNskV1UserSingleSignOnTokenByProviderKeyPatch."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.patch(
      `${this.basePath}/api/nsk/v1/user/singleSignOnToken/${encodeURIComponent(
        String(providerKey)
      )}`,
      tokenRequest,
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
     * Links the requested token with the logged-in user.
     * 
     * @param providerKey The single sign on provider key.
     * @param tokenRequest The single sign on token request.
     
     */
  public apiNskV1UserSingleSignOnTokenByProviderKeyPost(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyPost(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyPost(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!providerKey) {
      throw new Error(
        "Required parameter providerKey was null or undefined when calling apiNskV1UserSingleSignOnTokenByProviderKeyPost."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/user/singleSignOnToken/${encodeURIComponent(
        String(providerKey)
      )}`,
      tokenRequest,
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
     * Updates an existing token associated with the logged-in user.
     * 
     * @param providerKey The single sign on provider key.
     * @param tokenRequest The single sign on token request.
     
     */
  public apiNskV1UserSingleSignOnTokenByProviderKeyPut(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyPut(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1UserSingleSignOnTokenByProviderKeyPut(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    if (!providerKey) {
      throw new Error(
        "Required parameter providerKey was null or undefined when calling apiNskV1UserSingleSignOnTokenByProviderKeyPut."
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/user/singleSignOnToken/${encodeURIComponent(
        String(providerKey)
      )}`,
      tokenRequest,
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
     * Gets all of the single sign on tokens associated with a specific user.
     * 
     
     */
  public apiNskV1UserSingleSignOnTokenGet(
    observe?: "body",
    headers?: Headers
  ): Observable<Array<UserSingleSignOnToken>>;
  public apiNskV1UserSingleSignOnTokenGet(
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<Array<UserSingleSignOnToken>>>;
  public apiNskV1UserSingleSignOnTokenGet(
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      Array<UserSingleSignOnToken>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/user/singleSignOnToken`,
      headers
    );
    if (observe == "body") {
      return response.pipe(
        map(httpResponse => <Array<UserSingleSignOnToken>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Creates a user with customer creation parameter defaults.
     * This endpoint will create a user based off the system configured customer creation parameters. The associated  person has to be of type customer or an exception will be thrown. To change these default settings please configure  utilities.
     * @param request The user customer create request v2.
     
     */
  public apiNskV2UserPost(
    request?: UserCustomerCreateRequestv2,
    observe?: "body",
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV2UserPost(
    request?: UserCustomerCreateRequestv2,
    observe?: "response",
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV2UserPost(
    request?: UserCustomerCreateRequestv2,
    observe: any = "body",
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v2/user`,
      request,
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
