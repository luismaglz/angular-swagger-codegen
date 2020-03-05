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
 * Model describing the detailed leg information.
 */

    import { LegInformation<CAP>codeShareIndicator<CAP> } from '../models/enums';
    import { LegInformation<CAP>status<CAP> } from '../models/enums';

export interface LegInformation { 
    /**
     * The departure time using the time variant in universal time.
     */
    readonly departureTimeUtc?: Date;
    /**
     * The arrival time using the time variant in universal time.
     */
    readonly arrivalTimeUtc?: Date;
    /**
     * The leg adjusted capacity.
     */
    adjustedCapacity?: number;
    /**
     * The leg arrival terminal.
     */
    arrivalTerminal?: string;
    /**
     * The leg arrival Local Time Variant (LTV).
     */
    arrivalTimeVariant?: number;
    /**
     * The legs back move days.
     */
    backMoveDays?: number;
    /**
     * The leg capacity.
     */
    capacity?: number;
    /**
     * A value indicating whether the leg has a change of direction.
     */
    changeOfDirection?: boolean;
    /**
     * The leg code share indicator.
     */
    codeShareIndicator?: LegInformation<CAP>codeShareIndicator<CAP>;
    /**
     * The leg departure terminal.
     */
    departureTerminal?: string;
    /**
     * The leg departure Local Time Variant (LTV).
     */
    departureTimeVariant?: number;
    /**
     * The leg type of the equipment.
     */
    equipmentType?: string;
    /**
     * The leg equipment type suffix.
     */
    equipmentTypeSuffix?: string;
    /**
     * A value indicating whether this leg is an e-ticketed leg.
     */
    eTicket?: boolean;
    /**
     * Gets or sets a value indicating whether this leg is an IROP.
     */
    irop?: boolean;
    /**
     * The legs lid.
     */
    lid?: number;
    /**
     * The leg marketing code.
     */
    marketingCode?: string;
    /**
     * A value indicating whether the leg has a marketing override.
     */
    marketingOverride?: boolean;
    /**
     * The legs on time.
     */
    onTime?: string;
    /**
     * The leg \"operated by\" text.
     */
    operatedByText?: string;
    /**
     * The leg operating carrier.
     */
    operatingCarrier?: string;
    /**
     * The leg operating flight number.
     */
    operatingFlightNumber?: string;
    /**
     * The leg operating operating suffix.
     */
    operatingOpSuffix?: string;
    /**
     * The leg move out days.
     */
    outMoveDays?: number;
    /**
     * The leg passenger standard time of arrival (STA).
     */
    arrivalTime?: Date;
    /**
     * The leg passenger standard time of departure (STD).
     */
    departureTime?: Date;
    /**
     * The leg PRBC code.
     */
    prbcCode?: string;
    /**
     * The type of the schedule service.
     */
    scheduleServiceType?: string;
    /**
     * The sold.
     */
    sold?: number;
    /**
     * The legs status.
     */
    status?: LegInformation<CAP>status<CAP>;
    /**
     * A value indicating whether the leg is subject to government approval.
     */
    subjectToGovtApproval?: boolean;
}
