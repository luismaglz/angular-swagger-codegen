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
import { LegInformation } from './legInformation';
import { LegNest } from './legNest';
import { LegSsr } from './legSsr';
import { OperationsInformation } from './operationsInformation';
import { TransportationDesignator } from './transportationDesignator';


/**
 * Model data describing the leg which is a single travel leg from point a to b.
 */
export interface Leg { 
    /**
     * The unique identifier for this leg sell information.
     */
    legKey?: string;
    /**
     * The operations information.
     */
    operationsInfo?: OperationsInformation;
    /**
     * Transportation information.
     */
    designator?: TransportationDesignator;
    /**
     * The leg information.
     */
    legInfo?: LegInformation;
    /**
     * The collection of leg nests.
     */
    nests?: Array<LegNest>;
    /**
     * The Ssrs summary information.
     */
    ssrs?: Array<LegSsr>;
    /**
     * The reference identifying what seatmap the leg is in associated to.
     */
    seatmapReference?: string;
    /**
     * The flight reference which signifies a link to a segment and or leg.
     */
    flightReference?: string;
}
