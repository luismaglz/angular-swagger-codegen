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
import { PassengerInformation } from './passengerInformation';
import { PassengerProgram } from './passengerProgram';


/**
 * Defines the base passenger details.
 */
export interface PassengerBase { 
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
}
