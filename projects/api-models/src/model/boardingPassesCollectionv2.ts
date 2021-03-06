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
import { BoardingPassv2 } from './boardingPassv2';


/**
 * Defines the boarding passes base that contains all the common boarding pass details that is not specific to bar  code type.
 */
import * as Enums from '../enums';

export interface BoardingPassesCollectionv2 { 
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
    /**
     * The collection of boarding passes.
     */
    boardingPasses?: Array<BoardingPassv2>;
}
