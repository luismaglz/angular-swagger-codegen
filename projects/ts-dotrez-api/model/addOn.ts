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
import { AddOnCharge } from './addOnCharge';
import { AddOnDetails } from './addOnDetails';
import { AddOnOrderSummary } from './addOnOrderSummary';
import { CreatedAddOnDetails } from './createdAddOnDetails';
import { Order } from './order';


/**
 * Defines a booking add on service details.
 */
import * as Enums from '../types/enums';

export interface AddOn { 
    /**
     * Returns true if the component requires a separate  payment from the rest of the booking.
     */
    readonly paymentRequired?: boolean;
    /**
     * The status of the add on.
     */
    readonly status?: Enums.AddOnStatus;
    /**
     * The unique add on key.
     */
    addOnKey?: string;
    /**
     * The type of add on.
     */
    type?: Enums.ProductTypeCode;
    /**
     * The components order summary when the order is not available.
     */
    summary?: AddOnOrderSummary;
    /**
     * The component reference.
     */
    reference?: string;
    /**
     * The created by details.
     */
    created?: CreatedAddOnDetails;
    /**
     * The responsible source details.
     */
    source?: AddOnDetails;
    /**
     * The declined component text.
     */
    declinedText?: string;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The date the component was last modified.
     */
    modifiedDate?: Date;
    /**
     * The agent reference that modified the component.
     */
    modifiedAgentReference?: string;
    /**
     * The component order details.
     */
    order?: Order;
    /**
     * Flag indicating if the component is historical.
     */
    isHistorical?: boolean;
    /**
     * The collection of booking component charges.
     */
    charges?: Array<AddOnCharge>;
}
