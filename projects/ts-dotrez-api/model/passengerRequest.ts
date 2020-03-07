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
import { Infant } from './infant';
import { Name } from './name';
import { PassengerAddress } from './passengerAddress';
import { PassengerInformation } from './passengerInformation';
import { PassengerProgram } from './passengerProgram';
import { TravelDocumentCreateRequest } from './travelDocumentCreateRequest';


/**
 * Defines the passenger request details.
 */
import * as Enums from '../types/enums';

export interface PassengerRequest { 
    /**
     * The passenger customer number.
     */
    customerNumber?: string;
    /**
     * The passenger's name.
     */
    name?: Name;
    /**
     * The discount code associated with the passenger type.
     */
    discountCode?: string;
    /**
     * The passenger programs.
     */
    program?: PassengerProgram;
    /**
     * Additional passenger information.
     */
    info?: PassengerInformation;
    /**
     * Travel Documents.
     */
    travelDocuments?: Array<TravelDocumentCreateRequest>;
    /**
     * The passengers addresses.
     */
    addresses?: Array<PassengerAddress>;
    /**
     * The optional infant associated with this passenger.
     */
    infant?: Infant;
    /**
     * The passenger type code.
     */
    passengerTypeCode: string;
}
