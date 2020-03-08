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
import { Name } from './name';
import { PassengerAddress } from './passengerAddress';
import { PassengerBag } from './passengerBag';
import { PassengerFee } from './passengerFee';
import { PassengerInfant } from './passengerInfant';
import { PassengerInformation } from './passengerInformation';
import { PassengerProgram } from './passengerProgram';
import { PassengerTravelDocument } from './passengerTravelDocument';


/**
 * Model information representing a passenger on a journey.
 */
import * as Enums from '../enums';

export interface Passenger { 
    /**
     * The unique passenger identifier key.
     */
    passengerKey?: string;
    /**
     * The passenger alternate key is used to identify a passenger post commit of the booking.
     */
    passengerAlternateKey?: string;
    /**
     * The passenger customer number.
     */
    customerNumber?: string;
    /**
     * Fees.
     */
    fees?: Array<PassengerFee>;
    /**
     * The passenger's name.
     */
    name?: Name;
    /**
     * The passenger type code.
     */
    passengerTypeCode: string;
    /**
     * The discount code associated with the passenger type.
     */
    discountCode?: string;
    /**
     * Passenger bags.
     */
    bags?: Array<PassengerBag>;
    /**
     * The passenger programs.
     */
    program?: PassengerProgram;
    /**
     * The optional infant associated with this passenger.
     */
    infant?: PassengerInfant;
    /**
     * Additional passenger information.
     */
    info?: PassengerInformation;
    /**
     * The collection of passenger travel Documents.
     */
    travelDocuments?: Array<PassengerTravelDocument>;
    /**
     * The collection of passenger addresses.
     */
    addresses?: Array<PassengerAddress>;
    /**
     * The weight category assigned to this passenger.
     */
    weightCategory?: Enums.<ENUM>'Male'|'Female'|'Child'</ENUM>;
}
