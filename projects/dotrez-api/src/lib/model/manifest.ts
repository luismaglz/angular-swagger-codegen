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
import { CountryBase } from './countryBase';
import { LegCrossReference } from './legCrossReference';
import { ManifestCabinPassengerCount } from './manifestCabinPassengerCount';
import { ManifestLegOperationComment } from './manifestLegOperationComment';
import { ManifestPassenger } from './manifestPassenger';
import { MarketInformation } from './marketInformation';
import { PassengerCounts } from './passengerCounts';
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * The flight manifest model.
 */
export interface Manifest { 
    /**
     * Information about the destination country regarding APIS and APPS.
     */
    arrivalCountry?: CountryBase;
    /**
     * Information about the country of origin regarding APIS and APPS.
     */
    departureCountry?: CountryBase;
    /**
     * The collection of Navitaire.NewSkies.Messages.Manifest.ManifestCabinPassengerCount.
     */
    cabinPassengerCounts?: Array<ManifestCabinPassengerCount>;
    /**
     * The trip details for the flight being checked in.
     */
    market?: MarketInformation;
    /**
     * The Status in Manifest object.
     */
    legStatus?: Manifest.LegStatusEnum;
    /**
     * Collection of InventoryLegCrossReference objects.
     */
    inventoryLegCrossReferences?: Array<LegCrossReference>;
    /**
     * Collection of manifest leg operation comment objects.
     */
    legOperationComments?: Array<ManifestLegOperationComment>;
    /**
     * Gets collection of Manifest Passenger.
     */
    passengerList?: Array<ManifestPassenger>;
    /**
     * The ArrivalTime in Manifest object.
     */
    arrivalTime?: Date;
    /**
     * Represents passenger count data associated with the  manifest object.
     */
    passengerCounts?: PassengerCounts;
    /**
     * The CheckInLid in the manifest object.
     */
    checkInLid?: number;
    /**
     * The indicator on whether the leg/flight is a code-chare flight.
     */
    codeShareIndicator?: string;
    /**
     * The departure gate number.
     */
    departureGate?: string;
    /**
     * The DepartureTime in Manifest object.
     */
    departureTime?: Date;
    /**
     * If true then this is a flight that departs from one country and arrives in.
     */
    internationalFlight?: boolean;
    /**
     * The inventory leg ID.
     */
    inventoryLegId?: number;
    /**
     * The operated by text.
     */
    operatedByText?: string;
    /**
     * The operating transportation information, such as carrier code,   flight number/identifier, etc.
     */
    operatingIdentifier?: TransportationIdentifier;
    /**
     * Has this flight been verified for international travel?
     */
    verified?: boolean;
}
export namespace Manifest {
    export type LegStatusEnum = 'Normal' | 'Closed' | 'Canceled' | 'Suspended' | 'ClosedPending' | 'BlockAllActivities' | 'Mishap';
}
