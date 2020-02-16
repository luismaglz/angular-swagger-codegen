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
import { UnitInformation } from "./unitInformation";

/**
 * Defines a compartment within an equipment -&gt; deck.
 */
export interface CompartmentInformation {
  /**
   * The number of available units in the compartment.
   */
  availableUnits?: number;
  /**
   * The unique designator for the compartment.
   */
  designator?: string;
  /**
   * The length of the compartment.
   */
  length?: number;
  /**
   * The width of the compartment.
   */
  width?: number;
  /**
   * The compartment's sequence number in the equipments deck.
   */
  sequence?: number;
  /**
   * The facing orientation this compartment is in.
   */
  orientation?: number;
  /**
   * The list of units contained in the compartment.
   */
  units?: Array<UnitInformation>;
}
