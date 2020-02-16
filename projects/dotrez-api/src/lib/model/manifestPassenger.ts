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
import { FlightService } from "./flightService";
import { ManifestComment } from "./manifestComment";
import { ManifestInfant } from "./manifestInfant";
import { ManifestPassengerAddress } from "./manifestPassengerAddress";
import { ManifestQueue } from "./manifestQueue";
import { Name } from "./name";
import { PassengerInformation } from "./passengerInformation";
import { PassengerTravelDocument } from "./passengerTravelDocument";
import { PointOfSale } from "./pointOfSale";
import { Program } from "./program";

/**
 * Manifest Passenger.
 */
export interface ManifestPassenger {
  /**
   * If there is a balance due it returns true. This is the same as having an under paid, paid status.
   */
  readonly balanceDue?: boolean;
  /**
   * The unique identifier for the passenger.
   */
  passengerKey?: string;
  /**
   * The date the booking was created.
   */
  bookingDate?: Date;
  /**
   * The type of flight that is being dealt with: Local = first leg of journey
   */
  checkInType?: ManifestPassenger.CheckInTypeEnum;
  /**
   * Manifest comments attached to the booking.  Gets collection of ManifestComment
   */
  comments?: Array<ManifestComment>;
  /**
   * Agent that created the booking that this passenger is on.
   */
  createdAgentId?: number;
  /**
   * The string that represents the customer number of the person.
   */
  customerNumber?: string;
  /**
   * The discount code used by the passenger in booking this reservation.
   */
  discountCode?: string;
  /**
   * The information about the infant traveling with the passenger.
   */
  infant?: ManifestInfant;
  /**
   * Queue that this passenger is listed on.
   */
  manifestQueues?: Array<ManifestQueue>;
  /**
   * Passengers Name.
   */
  name?: Name;
  /**
   * The PaidStatus property.
   */
  paidStatus?: ManifestPassenger.PaidStatusEnum;
  /**
   * Travel documents for the passenger, i.e. Passports and Visas.  Navitaire.NewSkies.Messages.Manifest.ManifestPassengerAddress
   */
  passengerAddresses?: Array<ManifestPassengerAddress>;
  /**
   * Total number of passengers on the booking.
   */
  passengersOnBooking?: number;
  /**
   * Travel documents for the passenger, i.e. Passports and Visas.  Navitaire.NewSkies.Messages.Manifest.ManifestPassengerDoc
   */
  travelDocuments?: Array<PassengerTravelDocument>;
  /**
   * The unique identifier for the registered person within the system.
   */
  personId?: number;
  /**
   * The ProfileStatus property.
   */
  profileStatus?: ManifestPassenger.ProfileStatusEnum;
  /**
   * The passenger program data.
   */
  program?: Program;
  /**
   * The record locator for the booking.
   */
  recordLocator?: string;
  /**
   * The flight service information for the passenger.
   */
  services?: Array<FlightService>;
  /**
   * The balance due on the passenger.
   */
  sourcePos?: PointOfSale;
  /**
   * The booking status.
   */
  status?: ManifestPassenger.StatusEnum;
  /**
   * Additional passenger information details.
   */
  passengerInformation?: PassengerInformation;
  /**
   * The unique identifier for the passenger.
   */
  passengerId?: number;
  /**
   * The passenger's type.
   */
  type?: string;
}
export namespace ManifestPassenger {
  export type CheckInTypeEnum =
    | "Default"
    | "Local"
    | "Through"
    | "Connecting"
    | "NonLocal";
  export type PaidStatusEnum = "UnderPaid" | "PaidInFull" | "OverPaid";
  export type ProfileStatusEnum =
    | "Default"
    | "KnownIndividual"
    | "ResolutionGroup"
    | "SelecteeGroup"
    | "NotUsed"
    | "FailureGroup"
    | "RandomSelectee"
    | "Exempt";
  export type StatusEnum =
    | "Default"
    | "Hold"
    | "Confirmed"
    | "Closed"
    | "HoldCanceled"
    | "PendingArchive"
    | "Archived";
}
