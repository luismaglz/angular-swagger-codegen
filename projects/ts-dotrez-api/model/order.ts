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
import { InputedParameter } from './inputedParameter';
import { OrderAddress } from './orderAddress';
import { OrderCriteria } from './orderCriteria';
import { OrderCustomer } from './orderCustomer';
import { OrderFee } from './orderFee';
import { OrderHistory } from './orderHistory';
import { OrderLocation } from './orderLocation';
import { OrderNote } from './orderNote';
import { OrderParticipants } from './orderParticipants';
import { OrderPayment } from './orderPayment';
import { OrderPriceBreakdown } from './orderPriceBreakdown';
import { PhoneNumber } from './phoneNumber';
import { ProductVariationDetail } from './productVariationDetail';
import { Term } from './term';


/**
 * Defines a order.
 */
import * as Enums from '../types/enums';

export interface Order { 
    /**
     * The orders address.
     */
    address?: OrderAddress;
    /**
     * The unique order key.
     */
    orderKey?: string;
    /**
     * The collection of available phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     * Flag indicating if the order is active.
     */
    active?: boolean;
    /**
     * The collection of order locations.
     */
    locations?: Array<OrderLocation>;
    /**
     * The specific order criteria.
     */
    criteria?: OrderCriteria;
    /**
     * The oder customer.
     */
    customer?: OrderCustomer;
    /**
     * The thumbnail file name.
     */
    thumbnailFileName?: string;
    participants?: OrderParticipants;
    /**
     * The quantity.
     */
    quantity?: number;
    /**
     * The collection of order history entry history.
     */
    history?: Array<OrderHistory>;
    /**
     * The usage date for this order.
     */
    usageDate?: Date;
    /**
     * The applied payment.
     */
    payment?: OrderPayment;
    /**
     * The third party external locator.
     */
    externalLocator?: string;
    /**
     * The orders description.
     */
    description?: string;
    /**
     * The order descriptions format type.
     */
    descriptionFormatType?: string;
    /**
     * The products description.
     */
    productDescription?: string;
    /**
     * The products variations description.
     */
    productVariationDescription?: string;
    /**
     * The payment action.
     */
    paymentAction?: Enums.PaymentAction;
    /**
     * The pricing breakdown.
     */
    amounts?: OrderPriceBreakdown;
    /**
     * The collection of terms and conditions.
     */
    terms?: Array<Term>;
    /**
     * The collection of cancellation terms and conditions.
     */
    cancellationTerms?: Array<Term>;
    /**
     * The collection of product variation details.
     */
    details?: Array<ProductVariationDetail>;
    /**
     * The collection of applied fees.
     */
    fees?: Array<OrderFee>;
    /**
     * The collection of notes about the order.
     */
    notes?: Array<OrderNote>;
    /**
     * The collection of dynamic order input parameters.
     */
    parameters?: Array<InputedParameter>;
    /**
     * The unique product variation key.
     */
    productVariationKey?: string;
    /**
     * The unique product order key.
     */
    productOrderKey?: string;
}
