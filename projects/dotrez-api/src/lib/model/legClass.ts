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
 * The leg class model information.
 */
export interface LegClass { 
    /**
     * The leg class nest.
     */
    classNest?: number;
    /**
     * The leg class allotted.
     */
    classAllotted?: number;
    /**
     * The type of class.
     */
    classType?: string;
    /**
     * The leg class Authorized Units (AUs).
     */
    classAuthorizedUnits?: number;
    /**
     * The leg class, class of service.
     */
    classOfService: string;
    /**
     * The leg class rank.
     */
    classRank?: number;
    /**
     * The class sold.
     */
    classSold?: number;
    /**
     * The CNX sold.
     */
    cnxSold?: number;
    /**
     * The latest advanced reservation.
     */
    latestAdvancedReservation?: number;
    /**
     * The status.
     */
    status?: LegClass.StatusEnum;
    /**
     * The thru sold.
     */
    thruSold?: number;
}
export namespace LegClass {
    export type StatusEnum = 'Active' | 'InActive' | 'AvsOpen' | 'AvsOnRequest' | 'AvsClosed';
    export const StatusEnum = {
        Active: 'Active' as StatusEnum,
        InActive: 'InActive' as StatusEnum,
        AvsOpen: 'AvsOpen' as StatusEnum,
        AvsOnRequest: 'AvsOnRequest' as StatusEnum,
        AvsClosed: 'AvsClosed' as StatusEnum
    };
}
