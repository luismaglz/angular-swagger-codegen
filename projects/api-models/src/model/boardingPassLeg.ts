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
import { BoardingPassBoardingDetails } from './boardingPassBoardingDetails';
import { BoardingPassSeatDetails } from './boardingPassSeatDetails';
import { BoardingPassTransportationIdentifier } from './boardingPassTransportationIdentifier';
import { OperationBag } from './operationBag';
import { SsrGlance } from './ssrGlance';
import { TransportationDesignator } from './transportationDesignator';


/**
 * Defines the boarding pass leg details.
 */
import * as Enums from '../enums';

export interface BoardingPassLeg { 
    /**
     * The passengers assigned seats details.
     */
    seat?: BoardingPassSeatDetails;
    /**
     * The boarding details.
     */
    boarding?: BoardingPassBoardingDetails;
    /**
     * The legs transportation designator details.
     */
    designator?: TransportationDesignator;
    /**
     * The status of the leg for the passenger.
     */
    liftStatus?: Enums.LiftStatus;
    /**
     * The legs operated by text.
     */
    operatedByText?: string;
    /**
     * Flag indicating if the leg is subject to government approval.
     */
    subjectToGovernmentApproval?: boolean;
    /**
     * The assigned code share indicator.
     */
    codeShareIndicator?: string;
    /**
     * The homeland security government clearance auth code.
     */
    bppr?: string;
    /**
     * The legs transportation identifier.
     */
    identifier?: BoardingPassTransportationIdentifier;
    /**
     * The collection of bags.
     */
    bags?: Array<OperationBag>;
    /**
     * The collection of SSR's.
     */
    ssrs?: Array<SsrGlance>;
}
