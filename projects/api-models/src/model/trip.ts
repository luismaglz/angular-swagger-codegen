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
import { JourneyAvailability } from './journeyAvailability';


/**
 * Trip model representing a slim version of a core Availability Schedule.
 */
import * as Enums from '../enums';

export interface Trip { 
    /**
     * The arrival station code.
     */
    origin: string;
    /**
     * The destination station code.
     */
    destination: string;
    /**
     * Journey collection.
     */
    journeysAvailable?: Array<JourneyAvailability>;
}
