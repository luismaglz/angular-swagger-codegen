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
import { MarketInformation } from './marketInformation';
import { OperationBag } from './operationBag';
import { SsrGlance } from './ssrGlance';


/**
 * Manifest Leg.
 */

    import { ManifestLeg<CAP>liftStatus<CAP> } from '../models/enums';

export interface ManifestLeg { 
    /**
     * The ArrivalDetail property.
     */
    arrivalDetail?: string;
    /**
     * The Bags property.
     */
    bags?: Array<OperationBag>;
    /**
     * The BoardingSequence property.
     */
    boardingSequence?: number;
    /**
     * Boarding Zone of ManifestLeg.
     */
    boardingZone?: number;
    /**
     * The CompartmentDesignator property.
     */
    compartmentDesignator?: string;
    /**
     * The DepartureDetail property.
     */
    departureDetail?: string;
    /**
     * The market property.
     */
    market?: MarketInformation;
    /**
     * The LegNumber property.
     */
    legNumber?: number;
    /**
     * The LiftStatus property.
     */
    liftStatus?: ManifestLeg<CAP>liftStatus<CAP>;
    /**
     * The ManifestOrigin property.
     */
    manifestOrigin?: boolean;
    /**
     * The PriorityCode property.
     */
    priorityCode?: string;
    /**
     * The PriorityDate property.
     */
    priorityDate?: Date;
    /**
     * Indicates whether to prompt to verify the passenger id when checking in,
     */
    promptToVerifyId?: boolean;
    /**
     * The SSRs property.
     */
    ssrs?: Array<SsrGlance>;
    /**
     * The unit assignment weight. This value is used to determine   the satisfaction level of the passenger's seat assignment.
     */
    unitAssignmentWeight?: number;
    /**
     * The UnitDesignator property.
     */
    unitDesignator?: string;
}
