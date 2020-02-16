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
import { DepartureEvent } from './departureEvent';
import { GateInformation } from './gateInformation';


/**
 * Model describing the operations information.
 */
export interface OperationsInformation { 
    /**
     * The arrival gate information.
     */
    arrivalGate?: GateInformation;
    /**
     * The estimated time of arrival (ETA).
     */
    estimatedArrivalTime?: Date;
    /**
     * The departure gate information.
     */
    departureGate?: GateInformation;
    /**
     * The actual off block time.
     */
    actualOffBlockTime?: Date;
    /**
     * The actual on block time.
     */
    actualOnBlockTime?: Date;
    /**
     * The actual touch down time.
     */
    actualTouchDownTime?: Date;
    /**
     * The airborne time.
     */
    airborneTime?: Date;
    /**
     * The arrival note.
     */
    arrivalNote?: string;
    /**
     * The arrival status.
     */
    arrivalStatus?: OperationsInformation.ArrivalStatusEnum;
    /**
     * The baggage claim.
     */
    baggageClaim?: string;
    /**
     * The departure note.
     */
    departureNote?: string;
    /**
     * The departure status.
     */
    departureStatus?: OperationsInformation.DepartureStatusEnum;
    /**
     * The departure time information.
     */
    departureTimes?: DepartureEvent;
    /**
     * The standard time of arrival (STA).
     */
    standardArrivalTime?: Date;
    /**
     * The tail number.
     */
    tailNumber?: string;
}
export namespace OperationsInformation {
    export type ArrivalStatusEnum = 'Default' | 'Cancelled' | 'Arrived' | 'SeeAgent' | 'Delayed';
    export type DepartureStatusEnum = 'Default' | 'Cancelled' | 'Boarding' | 'SeeAgent' | 'Delayed' | 'Departed';
}
