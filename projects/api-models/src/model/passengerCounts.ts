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


/**
 * Represents various count data for passengers, such as checked-in, no-shows, etc.
 */
import * as Enums from '../enums';

export interface PassengerCounts { 
    /**
     * The checked-in passenger count.
     */
    checkedIn?: number;
    /**
     * The cleared standby passenger count.
     */
    clearedStandBy?: number;
    /**
     * The cleared thru standby passenger count.
     */
    clearedThruStandby?: number;
    /**
     * The manifested passenger count.
     */
    manifested?: number;
    /**
     * The passenger \"no-show\" count.
     */
    noShow?: number;
    /**
     * The standby passenger count.
     */
    standBy?: number;
    /**
     * The thru cheked-in passenger count.
     */
    thruCheckedIn?: number;
    /**
     * The thru manifested passenger count.
     */
    thruManifested?: number;
    /**
     * The thru \"no-show\" passenger count.
     */
    thruNoShow?: number;
    /**
     * The thru standby passenger count.
     */
    thruStandBy?: number;
    /**
     * The total checked-in passenger count.
     */
    totalCheckedIn?: number;
    /**
     * The total on-board passenger count.
     */
    totalOnBoard?: number;
}
