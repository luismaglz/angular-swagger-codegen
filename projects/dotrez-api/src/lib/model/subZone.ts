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
import { Station } from "./station";

/**
 * The subzone model.
 */
export interface SubZone {
  /**
   * Gets or sets the area code for this subzone.
   */
  areaCode: string;
  /**
   * Gets or sets the name of this subzone.
   */
  name?: string;
  /**
   * Gets or sets the list of stations associated with this subzone.
   */
  stations?: Array<Station>;
  /**
   * Gets or sets the subzone code for this subzone.
   */
  subZoneCode: string;
  /**
   * Gets or sets the zone code for this subzone.
   */
  zoneCode: string;
}
