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
import { Name } from "./name";
import { PersonBasicInformation } from "./personBasicInformation";

/**
 * Defines the person create request.
 */
export interface PersonEditRequest {
  /**
   * The persons true name.
   */
  name: Name;
  /**
   * The type of person.
   */
  type?: PersonEditRequest.TypeEnum;
  /**
   * The status of the person.
   */
  status?: PersonEditRequest.StatusEnum;
  /**
   * The person's basic information.
   */
  details?: PersonBasicInformation;
  /**
   * The person's notification preference.
   */
  notificationPreference?: PersonEditRequest.NotificationPreferenceEnum;
}
export namespace PersonEditRequest {
  export type TypeEnum = "None" | "Customer" | "Agent";
  export type StatusEnum = "Active" | "Terminated" | "Suspended";
  export type NotificationPreferenceEnum = "None" | "Promotional";
}
