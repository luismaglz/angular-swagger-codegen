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
import { MarketDesignator } from './marketDesignator';
import { PointOfSale } from './pointOfSale';


/**
 * Defines a flight move history log entry.
 */

    import { FlightMoveHistory<CAP>changeReason</CAP> } from '../types/enums';

export interface FlightMoveHistory { 
    /**
     * The previous market designator for the journey the passenger   was moved from.
     */
    previousMarket?: MarketDesignator;
    /**
     * The new market designator for the journey the passenger   was moved to.
     */
    newMarket?: MarketDesignator;
    /**
     * The point of sale.
     */
    pointOfSale?: PointOfSale;
    /**
     * The previous transporation identifier for the journey the passenger   was moved from.
     */
    previousIdentifier?: string;
    /**
     * The source point of sale.
     */
    sourcePointOfSale?: PointOfSale;
    /**
     * The new transporation identifier for the journey the passenger   was moved to.
     */
    newIdentifier?: string;
    /**
     * The received by name.
     */
    receivedBy?: string;
    /**
     * The reason for the move operation.
     */
    changeReason?: <ENUM>'NoChange'|'Irop'|'ScheduleChange'|'Move'|'VoluntaryFlyAhead'|'InvoluntaryFlyAhead'|'SelfServiceRebooking'</ENUM>;
    /**
     * The received by reference number.
     */
    receivedByReference?: string;
    /**
     * The the history entry was created.
     */
    createdDate?: Date;
}
