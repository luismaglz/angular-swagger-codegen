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
import { SeatAssignmentHistory } from './seatAssignmentHistory';


/**
 * Defines a seat assignment history response.
 */
import * as Enums from '../types/enums';

export interface SeatAssignmentHistoryResponse { 
    /**
     * The seat assignment history list.
     */
    histories?: Array<SeatAssignmentHistory>;
    /**
     * The key of the last item in the history list.
     */
    pageKey?: string;
}
