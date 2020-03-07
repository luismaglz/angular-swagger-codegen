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
import { TripInformationJourney } from './tripInformationJourney';


/**
 * A collection of journeys for a given departure date and market.
 */
import * as Enums from '../types/enums';

export interface TripInformationResponse { 
    /**
     * Represents the date for the journey response.
     */
    readonly date?: Date;
    /**
     * Represents the collection of journeys.
     */
    journeys?: Array<TripInformationJourney>;
}
