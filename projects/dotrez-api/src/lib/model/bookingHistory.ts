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
import { PointOfSale } from "./pointOfSale";

/**
 * Defines a booking history log entry.
 */
export interface BookingHistory {
  /**
   * The booking history report category.
   */
  readonly historyCategory?: BookingHistory.HistoryCategoryEnum;
  /**
   * The the history report data.
   */
  details?: string;
  /**
   * The specific history code.
   */
  event?: BookingHistory.EventEnum;
  /**
   * The point of sale.
   */
  pointOfSale?: PointOfSale;
  /**
   * The source point of sale.
   */
  sourcePointOfSale?: PointOfSale;
  /**
   * The received by name.
   */
  receivedBy?: string;
  /**
   * The received by reference number.
   */
  receivedByReference?: string;
  /**
   * The the history entry was created.
   */
  createdDate?: Date;
}
export namespace BookingHistory {
  export type HistoryCategoryEnum =
    | "Unknown"
    | "Baggage"
    | "BagTagPrint"
    | "BoardingPassPrint"
    | "CheckIn"
    | "ClassOfServiceChange"
    | "Comment"
    | "ConfirmedSegment"
    | "ContactChange"
    | "Converted"
    | "CouponOverride"
    | "DividePnr"
    | "FareOverride"
    | "Fee"
    | "FlightMove"
    | "GroupNameChange"
    | "Hold"
    | "ItinerarySent"
    | "ManualPayment"
    | "MoveBackPnr"
    | "NameChange"
    | "NameRemove"
    | "Payment"
    | "Pds"
    | "Promotion"
    | "QueuePlaceRemove"
    | "RecordLocator"
    | "ScheduleCancelllation"
    | "ScheduleCodeShareChange"
    | "ScheduleFlightDesignatorChange"
    | "ScheduleTimeChange"
    | "SeatAssignment"
    | "SegmentChange"
    | "Reprice"
    | "SsrChange"
    | "StandByChange"
    | "TicketNumber"
    | "VerifiedTravelDocument"
    | "Apps"
    | "InhibitedOverride"
    | "CustomIdChange"
    | "HoldDateChange";
  export type EventEnum =
    | "Unknown"
    | "ConvertedHistory"
    | "FlightTimeChange"
    | "FlightDesignatorChange"
    | "AssignedSeat"
    | "RemoveSeat"
    | "AddedFlight"
    | "DeletedFlight"
    | "DeletedPassenger"
    | "NameChange"
    | "GroupNameChange"
    | "CancelledTicketing"
    | "ScheduleChange"
    | "AddedPayment"
    | "ServiceFee"
    | "QueuedPnr"
    | "UnqueuedPnr"
    | "DeletedComment"
    | "Divided"
    | "CheckedIn"
    | "CheckedOut"
    | "FareOverride"
    | "AddedBaggage"
    | "ChangedBaggageWeight"
    | "CheckedBaggage"
    | "RemovedBaggage"
    | "BoardedPassenger"
    | "UnboardedPassenger"
    | "ManualAuthorization"
    | "ManualDecline"
    | "UndoCancel"
    | "ItinerarySent"
    | "ContactChange"
    | "SsrAdded"
    | "FlightMoved"
    | "VerifiedDocument"
    | "RemovedVerifiedDocument"
    | "Promotion"
    | "BookingComment"
    | "CancelledSchedule"
    | "CancelServiceFee"
    | "OverrideServiceFee"
    | "AddedRecordLocator"
    | "DeletedRecordLocator"
    | "UpgradeClassOfService"
    | "DowngradeClassOfService"
    | "StandbyPriorityChange"
    | "AssignedTicketNumber"
    | "DeletedTicketNumber"
    | "ConfirmSegmentStatusCodeChange"
    | "CodeshareFlightChanged"
    | "PdsCancel"
    | "PdsPending"
    | "PdsConfirm"
    | "PdsFinalized"
    | "PdsDeclined"
    | "PdsException"
    | "PdsCancelRefused"
    | "PdsCancelUnsuccessful"
    | "Apps"
    | "InhibitedOverride"
    | "PrintedBagTag"
    | "SelfPrintedBagTag"
    | "PrintedBoardingPass"
    | "AddCustomerId"
    | "DeleteCustomerId"
    | "HoldCreated"
    | "HoldRemoved"
    | "HoldChanged"
    | "OverrideCoupon"
    | "PdsSynchronized"
    | "PdsItemremoved"
    | "Reprice"
    | "ChannelOverride"
    | "EmdCreated"
    | "EmdRemoved"
    | "EmdChanged"
    | "ServiceBundle"
    | "PublishedFareOverride"
    | "FareClassRealignment";
}
