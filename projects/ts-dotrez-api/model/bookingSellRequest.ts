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
import { BookingPassengerRequest } from './bookingPassengerRequest';
import { ContactRequest } from './contactRequest';
import { JourneySellRequest } from './journeySellRequest';


/**
 * Trip sell request represents the data needed to sell journeys to a booking.
 */
export interface BookingSellRequest { 
    /**
     * The journey information.
     */
    journeys?: JourneySellRequest;
    /**
     * The primary contact.
     */
    contact?: ContactRequest;
    /**
     * The list of passengers.
     */
    passengers: Array<BookingPassengerRequest>;
    /**
     * The acting resident country.
     */
    residentCountry?: string;
    /**
     * The desired currency code.
     */
    currencyCode: string;
    /**
     * The promo code to apply.
     */
    promotionCode?: string;
    /**
     * The acting source organization code.
     */
    sourceOrganization?: string;
}
