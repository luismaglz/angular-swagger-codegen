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
import { TransportationDesignator } from './transportationDesignator';


/**
 * Defines a single instance of non-stop travel between two stations.
 */

export interface ItineraryLeg { 
    /**
     * The unique identifier for this leg sell information.
     */
    legKey?: string;
    /**
     * Transportation information.
     */
    designator?: TransportationDesignator;
}
