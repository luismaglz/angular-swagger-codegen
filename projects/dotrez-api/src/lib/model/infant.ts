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

/**
 * Model representing an infant.
 */
export interface Infant {
  /**
   * The nationality of the passenger.
   */
  nationality?: string;
  /**
   * The date of birth of the infant.
   */
  dateOfBirth?: Date;
  /**
   * The residentCountry of the passenger.
   */
  residentCountry?: string;
  /**
   * The gender of the passenger.
   */
  gender?: Infant.GenderEnum;
  /**
   * The name of the passenger.
   */
  name?: Name;
}
export namespace Infant {
  export type GenderEnum = "XX" | "Male" | "Female";
}
