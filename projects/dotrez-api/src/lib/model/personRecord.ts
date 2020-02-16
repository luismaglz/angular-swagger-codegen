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
import { Address } from "./address";
import { Name } from "./name";

/**
 * Defines the person record.
 */
export interface PersonRecord {
  /**
   * The unique person key.
   */
  personKey?: string;
  /**
   * The person's type.
   */
  type?: PersonRecord.TypeEnum;
  /**
   * The person's status.
   */
  status?: PersonRecord.StatusEnum;
  /**
   * The person's customer number.
   */
  customerNumber?: string;
  /**
   * The person's name.
   */
  name?: Name;
  /**
   * The person's default phone number.
   */
  phoneNumber?: string;
  /**
   * The person's default email address.
   */
  emailAddress?: string;
  /**
   * The person's default address.
   */
  address?: Address;
}
export namespace PersonRecord {
  export type TypeEnum = "None" | "Customer" | "Agent";
  export type StatusEnum = "Active" | "Terminated" | "Suspended";
}
