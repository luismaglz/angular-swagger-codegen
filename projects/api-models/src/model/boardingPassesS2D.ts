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
import { BoardingPassS2D } from './boardingPassS2D';


/**
 * Represents a collection of boarding passes following the S2D bar code format.
 */
import * as Enums from '../enums';

export interface BoardingPassesS2D { 
    /**
     * The collection of boarding passes using S2D bar codes.
     */
    boardingPasses?: Array<BoardingPassS2D>;
    /**
     * The record locator in reference.
     */
    recordLocator?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The booking contacts phone number.
     */
    contactPhoneNumber?: string;
}
