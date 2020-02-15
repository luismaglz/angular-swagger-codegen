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
import { FlightMoveHistory } from './flightMoveHistory';


/**
 * Defines a flight move history response.
 */
export interface FlightMoveHistoryResponse { 
    /**
     * The flight move history list.
     */
    histories?: Array<FlightMoveHistory>;
    /**
     * The key of the last item in the history list.
     */
    pageKey?: string;
}
