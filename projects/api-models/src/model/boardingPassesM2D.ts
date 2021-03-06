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
import { BoardingPassM2D } from './boardingPassM2D';


/**
 * The collection of M2D boarding passes.
 */
import * as Enums from '../enums';

export interface BoardingPassesM2D { 
    /**
     * The collection of boarding passes with M2D bar codes.
     */
    boardingPasses?: Array<BoardingPassM2D>;
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
