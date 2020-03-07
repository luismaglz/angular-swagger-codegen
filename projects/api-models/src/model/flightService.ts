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
import { ManifestSegment } from './manifestSegment';


/**
 * Flight Service.
 */
import * as Enums from '../enums';

export interface FlightService { 
    /**
     * The GuestValueLevelCode property.
     */
    guestValueLevelCode?: string;
    /**
     * The GuestValueScore property.
     */
    guestValueScore?: number;
    /**
     * The collection of Manifest Segment objects.
     */
    segments?: Array<ManifestSegment>;
}