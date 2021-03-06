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
import { BookingPointOfSale } from './bookingPointOfSale';
import { PointOfSale } from './pointOfSale';


/**
 * Defines the different point of sale information.
 */
import * as Enums from '../enums';

export interface BookingSales { 
    /**
     * Contains the details about the agent and organization information that created this booking.
     */
    created?: PointOfSale;
    /**
     * Contains the details about the agent and organization information that referred the created booking.
     */
    source?: BookingPointOfSale;
    /**
     * Contains the details about the agent and organization information that made the last set of changes.
     */
    modified?: PointOfSale;
}
