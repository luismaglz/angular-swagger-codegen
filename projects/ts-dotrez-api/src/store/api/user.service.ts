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

import { UserService } from "../../base/api/index";
import { HttpResponse, Headers, IHttpClient } from "../../base/index";

@injectable()
export class StoreUserService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("UserService") protected baseService: UserService
  ) {}

  /**
   * Searches the logged in user booking upcoming and past bookings.
   * This is similar to the user booking endpoint but returns more focused trip information.  This endpoint will only return data where a booking&#39;s passenger customer number matches the current logged in user.  Bookings made by the user where the passenger customer number is not assigned are ignored.
   */
  public async store_apiNskV1UserBookingsByPassengerGet(
    startDate?: Date,
    endDate?: Date,
    headers?: Headers
  ): Promise<Array<BookingTripResult>> {
    const response = await this.baseService
      .apiNskV1UserBookingsByPassengerGet(startDate, endDate, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserBookingsByPassengerGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Searches the logged in user booking upcoming and past bookings.
   *
   */
  public async store_apiNskV1UserBookingsGet(
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
    headers?: Headers
  ): Promise<Array<BookingSearchResult>> {
    const response = await this.baseService
      .apiNskV1UserBookingsGet(
        returnCount,
        associatedFirstName,
        associatedLastName,
        phoneticSearch,
        tripIdentifier,
        origin,
        destination,
        searchArchive,
        tripDate,
        startDate,
        endDate,
        searchByCustomerNumber,
        lastBookingKey,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserBookingsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the current logged in user.
   *
   */
  public async store_apiNskV1UserGet(headers?: Headers): Promise<User> {
    const response = await this.baseService
      .apiNskV1UserGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Resets the logged in users role.
   *
   */
  public async store_apiNskV1UserImpersonateDelete(
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserImpersonateDelete("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserImpersonateDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the logged in users current session roles state.
   *
   */
  public async store_apiNskV1UserImpersonateGet(
    headers?: Headers
  ): Promise<SessionRoles> {
    const response = await this.baseService
      .apiNskV1UserImpersonateGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserImpersonateGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Impersonates a new role for the logged in user.
   *
   */
  public async store_apiNskV1UserImpersonatePost(
    request?: UserImpersonateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserImpersonatePost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserImpersonatePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Changes the logged in user&#39;s password.
   *
   */
  public async store_apiNskV1UserPasswordChangePost(
    request?: UserChangePasswordRequestBase,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserPasswordChangePost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserPasswordChangePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches the current logged in user.
   *
   */
  public async store_apiNskV1UserPatch(
    request?: DeltaMapperUserRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserPatch(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a user with customer creation parameter defaults.
   * This endpoint will create a user based off the system configured customer creation parameters. The associated  person has to be of type customer or an exception will be thrown. To change these default settings please configure  utilities.
   */
  public async store_apiNskV1UserPost(
    request?: UserCustomerCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates the current logged in user.
   *
   */
  public async store_apiNskV1UserPut(
    request?: UserRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserPut(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Delets a specific role on the logged in user.
   *
   */
  public async store_apiNskV1UserRolesByUserRoleKeyDelete(
    userRoleKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserRolesByUserRoleKeyDelete(userRoleKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserRolesByUserRoleKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific role from the logged in user.
   *
   */
  public async store_apiNskV1UserRolesByUserRoleKeyGet(
    userRoleKey: string,
    headers?: Headers
  ): Promise<UserRole> {
    const response = await this.baseService
      .apiNskV1UserRolesByUserRoleKeyGet(userRoleKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserRolesByUserRoleKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches a specific role on the logged in user.
   *
   */
  public async store_apiNskV1UserRolesByUserRoleKeyPatch(
    userRoleKey: string,
    request?: DeltaMapperUserRolePatchRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserRolesByUserRoleKeyPatch(
        userRoleKey,
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserRolesByUserRoleKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates a specific role on the logged in user.
   *
   */
  public async store_apiNskV1UserRolesByUserRoleKeyPut(
    userRoleKey: string,
    request?: UserRoleEditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserRolesByUserRoleKeyPut(userRoleKey, request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserRolesByUserRoleKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets all roles from the logged in user.
   *
   */
  public async store_apiNskV1UserRolesGet(
    headers?: Headers
  ): Promise<Array<UserRole>> {
    const response = await this.baseService
      .apiNskV1UserRolesGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserRolesGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new role on the logged in user.
   *
   */
  public async store_apiNskV1UserRolesPost(
    request?: UserRoleCreateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserRolesPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserRolesPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a token associated with the single sign on provider from the logged-in user.
   *
   */
  public async store_apiNskV1UserSingleSignOnTokenByProviderKeyDelete(
    providerKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserSingleSignOnTokenByProviderKeyDelete(
        providerKey,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserSingleSignOnTokenByProviderKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a single sign on token associated with a specific user.
   *
   */
  public async store_apiNskV1UserSingleSignOnTokenByProviderKeyGet(
    providerKey: string,
    headers?: Headers
  ): Promise<UserSingleSignOnToken> {
    const response = await this.baseService
      .apiNskV1UserSingleSignOnTokenByProviderKeyGet(
        providerKey,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserSingleSignOnTokenByProviderKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Patches an existing token associated with the logged-in user.
   *
   */
  public async store_apiNskV1UserSingleSignOnTokenByProviderKeyPatch(
    providerKey: string,
    tokenRequest?: DeltaMapperSingleSignOnTokenRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserSingleSignOnTokenByProviderKeyPatch(
        providerKey,
        tokenRequest,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserSingleSignOnTokenByProviderKeyPatch
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Links the requested token with the logged-in user.
   *
   */
  public async store_apiNskV1UserSingleSignOnTokenByProviderKeyPost(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserSingleSignOnTokenByProviderKeyPost(
        providerKey,
        tokenRequest,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserSingleSignOnTokenByProviderKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Updates an existing token associated with the logged-in user.
   *
   */
  public async store_apiNskV1UserSingleSignOnTokenByProviderKeyPut(
    providerKey: string,
    tokenRequest?: SingleSignOnTokenRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1UserSingleSignOnTokenByProviderKeyPut(
        providerKey,
        tokenRequest,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1UserSingleSignOnTokenByProviderKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets all of the single sign on tokens associated with a specific user.
   *
   */
  public async store_apiNskV1UserSingleSignOnTokenGet(
    headers?: Headers
  ): Promise<Array<UserSingleSignOnToken>> {
    const response = await this.baseService
      .apiNskV1UserSingleSignOnTokenGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1UserSingleSignOnTokenGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a user with customer creation parameter defaults.
   * This endpoint will create a user based off the system configured customer creation parameters. The associated  person has to be of type customer or an exception will be thrown. To change these default settings please configure  utilities.
   */
  public async store_apiNskV2UserPost(
    request?: UserCustomerCreateRequestv2,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2UserPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2UserPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
