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
import { OrderFee } from './orderFee';


/**
 * Defines the pre cancel details for a specific component.
 */
import * as Enums from '../enums';

export interface PreCancelDetail { 
    /**
     * The total fee cost.
     */
    readonly total?: number;
    /**
     * The unique component key associated with the pre cancel.
     */
    componentKey?: string;
    /**
     * The collection of cancellation fees.
     */
    fees?: Array<OrderFee>;
    /**
     * The status of the pre cancel.
     */
    status?: Enums.<ENUM>'Unknown'|'CancelAvailable'|'ExternalCancelAvailable'|'ImmediateCancel'|'CancelDenied'|'RemoveFromBooking'|'CancelPending'</ENUM>;
    /**
     * The pre cancel description.
     */
    description?: string;
}
